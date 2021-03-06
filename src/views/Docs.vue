<template>
  <div class="docs">
    <Header />
    <div class="subheader d-flex justify-content-between">
      <!-- <div class="back">
          <img src="../assets/img/back.png" />
          <router-link to="/">Back</router-link>
      </div>-->

      <div class="dropdown">
        <button
          class="btn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >&#9776;</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <ul>
            <li
              class="dropdown-item"
              v-for="link in pathLinks[this.feature][this.selectedSdk]"
              :key="link.title"
            >
              <a :id="link.url" class="menu-item" @click="changeContent">{{ link.title }}</a>
              <ul v-if="link.subfolderitems">
                <li class="sub-menu" v-for="link in link.subfolderitems" :key="link.title">
                  <a :id="link.url" class="menu-item" @click="changeContent">{{ link.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >Select Technology</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-on:change="selectSdk">
          <a
            class="dropdown-item"
            href="#"
            v-for="item in sdkItems"
            :value="item.value"
            :key="item.name"
          >{{ item.value }}</a>
        </div>
      </div>
    </div>

    <div class="container doc-container">
      <div class="left-nav">
        <div class="back">
          <img src="../assets/img/back.png" />
          <router-link to="/">Back</router-link>
        </div>

        <p class="heading">{{ this.selectedSdk }}</p>
        <select class="custom-select select" v-on:change="selectSdk" v-model="selectedSdk">
          <option selected>Select Technology</option>
          <option v-for="item in sdkItems" :value="item.value" :key="item.value">{{ item.name }}</option>
        </select>

        <ul>
          <li
            class="menu"
            v-for="link in pathLinks[this.feature][this.selectedSdk]"
            :key="link.title"
          >
            <a
              :id="link.url"
              class="menu-item"
              v-bind:class="{ disable: link.subfolderitems }"
              @click="changeContent"
            >{{ link.title }}</a>
            <ul v-if="link.subfolderitems">
              <li class="sub-menu" v-for="link in link.subfolderitems" :key="link.title">
                <a :id="link.url" class="menu-item" @click="changeContent">{{link.title}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="doc-content">
        <div class="keys-callout" v-if="showKeys">
          <p class="header">YOUR API KEYS</p>
          <p class="text">
            Public key:
            <span class="keys">{{ publicKey }}</span>
          </p>
          <p class="text">
            Secret key:
            <span class="keys">{{ secretKey }}</span>
          </p>
        </div>

        <div v-html="content" class="content"></div>
      </div>

      <div class="right-nav">
        <select class="custom-select" v-on:change="selectSdk" v-model="selectedSdk">
          <option selected>Select Technology</option>
          <option v-for="item in sdkItems" :value="item.value" :key="item.name">{{ item.name }}</option>
        </select>

        <hr />

        <p class="heading" v-html="headings">TABLE OF CONTENTS</p>

        <!-- <ul>
          <li class="menu" v-for="item in headings" :key="item.innerText">{{ item.innerText }}</li>
        </ul>-->
      </div>
    </div>

    <div class="container help-container">
      <NeedHelp />
    </div>

    <div class="container rating">
      <p class="title">Was this page helpful?</p>

      <button @click="rateGood" id="yesButton">Yes</button>

      <button id="noButton" v-popover:comments.top>No</button>
    </div>

    <popover name="comments" ref="popover">
      <p>
        Sorry to hear that you couldn't find what you were looking for ☹.
        Can you tell us what you would like to see?
      </p>
      <form @submit="rateBad">
        <div class="form-group">
          <!-- <label for="exampleFormControlTextarea1">Example textarea</label> -->
          <textarea
            v-model="comment"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </popover>
    <div>
      <input id="copy-input" :value="copyInput" type="hidden" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import NeedHelp from "../components/NeedHelp";

import { Remarkable } from 'remarkable';

export default {
  name: "Docs",
  props: ["feature", "language", "article"],
  components: {
    Header,
    NeedHelp
  },
  metaInfo() {
    return {
      title: "Flutterwave documentation",
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: `${this.feature}`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: `Flutterwave's ${this.artcle}`
        }
      ]
    };
  },
  mounted() {
    const { set, remove } = this.$meta().addApp("client-only");
    set({
      bodyAttrs: { class: "client-only" }
    });

    setTimeout(() => remove(), 3000);
  },
  data() {
    return {
      selectedFeature: this.feature ? this.feature : "subscriptions",
      selectedLanguage: "",
      selectedArticle: "",
      showKeys: false,
      publicKey: "",
      secretKey: "",
      sdkItems: [
        { value: "node", name: "Node Js" },
        { value: "python", name: "Python" },
        { value: "php", name: "PHP" }
      ],
      selectedSdk: "node",
      pathLinks: [],
      headings: "",
      content: `<div class="loader-container"><div class="loader"></div><h3>Fetching Content....</h3></div>`,
      comment: "",
      copyInput: ""
    };
  },

  created() {
    this.getPathLink();
    this.displayContent("");
  },
  mounted() {
    if (localStorage.loggedIn) {
      this.showKeys = localStorage.loggedIn;
    }

    if (localStorage.publicKey || localStorage.SecretKey) {
      this.publicKey = localStorage.publicKey;
      this.secretKey = localStorage.secretKey;
    }
  },
  methods: {
    execFunc(func) {
      func();
    },
    // Copy button functionality
    copyCode(val) {
      const buttons = document.querySelectorAll(val);
      var vm = this;

      Array.from(buttons).forEach(el => {
        el.addEventListener("click", function(event) {
          let copiedText = event.target.nextElementSibling.innerText;
          let pub = copiedText.search("npm");
          let sec = copiedText.search("ravepay");

          // Replace occurences of public key and secret key with the users public and secret key when logged in
          // Uncomment code snippet below
          //  if (PBFPubKey > 0 || secKey > 0) {
          //   copiedText = copiedText.replace("PBFPubKey", this.publicKey);
          //   copiedText = copiedText.replace("secKey", this.secretKey);
          // }

          let copyText = document.querySelector("#copy-input");
          copyText.setAttribute("type", "text");
          copyText.value = copiedText;
          copyText.select();

          try {
            var successful = document.execCommand("copy");
            var msg = successful ? "successfully" : "unsuccessfully";
          } catch (err) {
            console.log("Oops, unable to copy");
          }
          copyText.setAttribute("type", "hidden");
          window.getSelection().removeAllRanges();
        });
      });
    },
    // Add anchor links to the content headings(h2)
    linkHeadings(val) {
      const headings = document.querySelectorAll(val);
      const linkContent = `<i class="fas fa-link f2"></i>`;
      var storeHeadings = [];
      let baseURL = window.location.href;

      [].forEach.call(headings, function(el) {
        el.id = el.innerText.replace(/\s+/g, "-");
        storeHeadings.push(el);

        const linkIcon = document.createElement("a");

        linkIcon.setAttribute("href", `#${el.innerText.replace(/\s+/g, "-")}`);
        linkIcon.setAttribute("class", "hide");
        linkIcon.innerHTML = linkContent;

        el.append(linkIcon);

        el.addEventListener("mouseover", function(event) {
          event.target.lastChild.classList.remove("hide");
          event.target.lastChild.classList.add("show");
        });
        el.addEventListener("mouseaway", function(event) {
          event.target.lastChild.classList.remove("show");
          event.target.lastChild.classList.add("hide");
        });
      });
      var right_nav = "<ul>";
      storeHeadings.forEach(item => {
        var url = item.innerText.replace(/\s+/g, "-");
        right_nav += `<li class="menu"><a class="menulink" href="#${url}">${item.innerText}</a></li>`;
      });

      this.headings = right_nav;
    },
    waitTillHeadingIsComplete(selector) {
      return new Promise((resolve, reject) => {
        const id = setInterval(() => {
          let btn = document.querySelector(selector);
          if (btn !== null) {
            // console.log(">>>. Found Header", btn);

            resolve(id);
            clearInterval(id);
            this.linkHeadings(selector);
          } else {
            console.log(">>> Waiting");
          }
        }, 1000);
      });
    },
    waitTillLoadIsComplete(selector) {
      return new Promise((resolve, reject) => {
        const id = setInterval(() => {
          let btn = document.querySelector(selector);
          if (btn !== null) {
            // console.log(">>>. Found Button", btn);
            resolve(id);
            clearInterval(id);
            this.copyCode(selector);
          } else console.log(">>> Waiting ");
        }, 1000);
      });
    },
    // Switch content based on selected sdk
    selectSdk() {
      this.$router.push({
        name: "docs",
        params: {
          feature: this.feature,
          language: this.language,
          article: this.article
        }
      });
      this.displayContent("");
    },
    // Get the path links
    getPathLink() {
      this.$http
        .get(
          "https://api.github.com/repos/anjolabassey/test-docs/contents/paths.json"
        )
        .then(response => {
          this.pathLinks = JSON.parse(
            this.b64DecodeUnicode(response.data.content)
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // Fetch and display the content from github
    displayContent(value) {
      let vm = this;
      let url;

      if (value == "") {
        url = `https://rave-documentation.herokuapp.com/content?path=${this.language}/${this.feature}/${this.article}.md`;
      } else {
        value = value.substring(value.indexOf("", 1));

        url = `https://rave-documentation.herokuapp.com/content?path=${value}`;
      }

      this.$http
        .get(url)
        .then(response => {
          // console.log(response);
          var content = this.b64DecodeUnicode(response.data["data"][0].content);

          // If you're in the browser, the Remarkable class is already available in the window
          var md = new Remarkable({
            html: true,
            typographer: true
          });

          content = md.render(content);

          vm.content = content
            .replace(
              /<pre>/gi,
              '<pre><button id="copy-btn" class="copy-btn">Copy</button>'
            )
            .replace(/<h2>/gi, '<h2 id="heading2">');

          vm.waitTillLoadIsComplete(".copy-btn");
          vm.waitTillHeadingIsComplete("#heading2");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // Decoding string from github API response
    b64DecodeUnicode: function(str) {
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    },
    // Change the content based on the lick clicked in the navigation
    changeContent(event) {
      event.preventDefault();
      let article;
      let url = event.target.id;

      this.selectedLanguage = url.split("/")[1];
      this.selectedFeature = url.split("/")[2];
      article = url.split("/")[3];
      this.selectedArticle = article.substring(0, article.length-3)

      if (
        this.selectedLanguage == undefined ||
        this.selectedFeature == undefined ||
        this.selectedArticle == undefined
      ) {
        console.log("i'm undefined");
      }

      this.$router.push({
        name: "docs",
        params: {
          feature: this.selectedFeature,
          language: this.selectedLanguage,
          article: this.selectedArticle
        }
      });

      this.displayContent(url);

      var menuList = document.getElementsByClassName("menu-item");
      Array.from(menuList).forEach(el => {
        el.classList.remove("active-link");
      });

      event.target.classList.add("active-link");
    },
    // Give page content a good rating
    rateGood() {
      var ratingObject = {
        url: this.$route.path
      };
      // this.$http
      //   .post("http://04ff9f9a.ngrok.io/thumbs-up", ratingObject)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     var errorMessage = error.response.data.message;
      //     console.log(error);

      //   });
    },
    // Give page content a bad rating
    rateBad: function(event) {
      event.preventDefault();
      this.$refs.popover.visible = false;

      // var ratingObject = {
      //   url: this.$route.path,
      //   comment: this.comment
      // };
      // this.$http
      //   .post("http://04ff9f9a.ngrok.io/thumbs-down", ratingObject)
      //   .then(response => {
      //     console.log(response);

      //   })
      //   .catch(function(error) {
      //     var errorMessage = error.response.data.message;
      //     console.log(error);
      //   });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.docs {
  background-color: #f2f2f2;
  padding-bottom: 89px;
}
.subheader {
  display: none !important;
}
.doc-container {
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
}
.doc-content {
  background: #ffffff;
  box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 19px 80px;
  min-height: 1021px;
  width: 684px;
  font-family: Open-Sans;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
}

.back a {
  /* margin-top: 7px; */
  font-family: SFProDisplay;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: #637381;
}
.back img {
  margin-right: 7px;
}
.help-container {
  padding-right: 270px;
  padding-left: 270px;
  margin-right: auto;
  margin-left: auto;
}
.rating {
  display: flex;
  background: #f5f5f5;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 3% 0;
  margin-top: 82px;
}
div[data-popover="comments"] {
  background: #f5f5f5;
  border-radius: 4px;
  font-family: F-Wave-Regular;
  font-size: 14px;
  text-align: center;
  width: 360px !important;
  top: 2900px !important;
}
div[data-popover="comments"] button {
  background-color: #4d5679;
}
.left-nav {
  margin: 35px 35px 0 0;
  text-align: right;
}
.left-nav .heading {
  font-family: SFProDisplay;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  margin-top: 15px;
}
.right-nav {
  margin: 35px 0 0 35px;
}
p {
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none;
  margin: 10px 0px;
  padding: 0;
  font-size: 16px;
  line-height: 20px;
}
.menu {
  margin: 16px 0px;
  list-style-type: none;
  font-weight: 500;
}
.sub-menu {
  color: #637381;
  margin: 16px 0px;
  font-weight: 300;
}
li a {
  cursor: pointer;
}
li a:hover {
  color: #4c5257 !important;
}
.active-link {
  color: #f5a623 !important;
}
.title {
  font-family: F-Wave-Regular;
  font-size: 22px;
  line-height: 26px;
  color: #000000;
  margin-top: 20px;
  margin-right: 65px;
}
.rating #yesButton {
  background-color: #f5a623;
  color: #ffffff;
  border-radius: 4px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  width: 140px;
  font-family: Open-Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
}
.rating #yesButton:before {
  content: url(../assets/img/thumbs-up.svg);
  width: 20px;
  float: left;
  margin-right: 11px;
  margin-bottom: 3px;
}
.rating #noButton {
  background: #4d5679;
  color: #ffffff;
  border-radius: 4px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  width: 140px;
  font-family: Open-Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
}
.rating #noButton:before {
  content: url(../assets/img/thumbs-down.svg);
  width: 20px;
  float: left;
  margin-right: 11px;
  margin-top: 3px;
}

.keys-callout {
  background-color: rgb(187, 229, 179, 0.5);
  mix-blend-mode: normal;
  border: 1px solid #c4cdd5;
  box-sizing: border-box;
  border-radius: 0px 3px 3px 0px;
  width: 100%;
  height: 80px;
  font-family: SFProDisplay;
  padding: 16px 24px;
  border-left: 4px solid #b8e986;
  color: #000000;
}
.keys-callout .header {
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 0.3em;
}
.keys-callout .text {
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  margin: 0.2em;
}
.keys-callout .keys {
  color: #5f6cc7;
  font-weight: 400;
  margin: 0.2em;
}
.hide {
  display: none;
}
.select {
  display: none;
}
@media all and (max-width: 768px) {
  .help-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .right-nav {
    display: none;
  }
}

@media all and (max-width: 1254px) {
  .left-nav {
    width: 15%;
    margin-right: 20px;
  }
  .right-nav {
    display: none;
  }
  .select {
    display: inline-block;
  }
  .doc-content {
    width: 90%;
    padding: 15px 30px;
  }
}
@media (max-width: 800px) and (max-width: 1254px) {
  .select {
    display: inline-block;
  }
}

@media all and (max-width: 800px) {
  .doc-content {
    width: 100%;
    padding: 15px 30px;
  }
  .left-nav {
    display: none;
  }

  .subheader {
    display: flex !important;
    background-color: #fef8ee;
    padding: 0 45px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  .back {
    margin-top: 7px;
  }
}

@media all and (max-width: 425px) {
  .title {
    font-size: 16px;
    margin-right: 15px;
  }
  .rating #yesButton,
  .rating #noButton {
    width: 80px;
  }
  .help-container {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
