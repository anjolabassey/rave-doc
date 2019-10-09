<template>
  <div class="docs">
    <Header />

    <div class="container doc-container">
      <div class="left-nav">
        <div class="back">
          <img src="../assets/img/back.png" />
          <router-link to="/">Back</router-link>
        </div>

        <p class="heading">{{this.selectedSdk}}</p>
        <p>{{this.feature}}</p>

        <ul>
          <li v-for="link in pathLinks[this.feature][this.selectedSdk]" :key="link">
            <a class="menu-item" @click="changeContent">{{ link.title }}</a>
          </li>
        </ul>
      </div>
      <!-- <div class="doc-content" ref="content">
      </div>-->

      <div class="doc-content">
        <div class="keys-callout" v-if="showKeys">
          <p class="header">YOUR API KEYS</p>
          <p class="text">
            Public key:
            <span class="keys">{{publicKey}}</span>
          </p>
          <p class="text">
            Secret key:
            <span class="keys">{{secretKey}}</span>
          </p>
        </div>
        <div ref="content"></div>
      </div>

      <div class="right-nav">
        <select class="custom-select" v-on:change="selectSdk" v-model="selectedSdk">
          <option selected>Select Technology</option>
          <option v-for="item in sdkItems" :key="item.value" :value="item.value">{{ item.name }}</option>
        </select>

        <hr />

        <p class="heading">TABLE OF CONTENTS</p>

        <ul>
          <li class v-for="item in headings" :key="item.innerText">{{ item.innerText }}</li>
        </ul>
      </div>
    </div>

    <div class="container help-container">
      <NeedHelp />
    </div>

    <div class="container rating">
      <p class="title">Was this page helpful?</p>

      <a @click="rateGood" class="button" id="yesButton" href>Yes</a>

      <a
        @click="rateBad"
        class="button"
        id="noButton"
        href
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top"
      >No</a>

      <a
        tabindex="0"
        class="btn btn-lg btn-danger"
        role="button"
        data-toggle="popover"
        data-trigger="focus"
        title="Thank you for helping improve Rave's documentation"
        data-content="If you need help or have any questions, please consider contacting support."
      >Dismissible popover</a>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import NeedHelp from "../components/NeedHelp";

export default {
  name: "Docs",
  props: ["feature"],
  components: {
    Header,
    NeedHelp
  },
  data() {
    return {
      selectedFeature: this.feature,
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
      headings: [],
      content: ""
    };
  },

  created() {
    this.displayContent();
    this.getPathLink();
  },
  mounted() {
    var headings = document.getElementsByTagName("h2");
    this.headings = headings;

    if (localStorage.loggedIn) {
      this.showKeys = localStorage.loggedIn;
    }

    if (localStorage.publicKey || localStorage.SecretKey) {
      this.publicKey = localStorage.publicKey;
      this.secretKey = localStorage.secretKey;
    }
  },
  methods: {
    selectSdk: function() {
      // console.log(event);
      // console.log(this.selectedSdk);
      this.displayContent();
    },
    getPathLink: function() {
      // if(this.pathLinks == []) {
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
      // }
    },
    displayContent: function() {
      var headings = document.getElementsByTagName("h2");
      this.headings = headings;

      this.$http
        .get(
          "https://rave-documentation.herokuapp.com/content?path=node/transfers/overview.md"
        )
        .then(response => {
          var content = this.b64DecodeUnicode(response.data["data"][0].content);
          var md = new Remarkable({
            html: true
          });
          // this.content = md.render(content);
          this.$refs.content.innerHTML = md.render(content);
          this.$refs.content.innerHTML;
          var pre = document.getElementsByTagName("code");
          Array.from(pre).forEach(el => {
            el.classList.add("highlight");
          });

          // const headers = document.querySelectorAll("h2,h3");
          const linkContent = "  &#9875";

          for (const heading of headings) {
            const linkIcon = document.createElement("a");
            linkIcon.setAttribute("href", `#${heading.innerHTML}`);
            linkIcon.setAttribute("class", "anchor");
            linkIcon.innerHTML = linkContent;
            // heading.append(linkIcon);
          }
          // console.log(pre);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // Decoding string from github API response
    b64DecodeUnicode: function(str) {
      // Going backwards: from bytestream, to percent-encoding, to original string.
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    },
    changeContent: function(event) {
      event.preventDefault();
      this.displayContent();

      var headings = document.getElementsByTagName("h2");
      this.headings = headings;

      var menuList = document.getElementsByClassName("menu-item");
      Array.from(menuList).forEach(el => {
        el.classList.remove("active-link");
      });

      console.log(event.target);
      event.target.classList.add("active-link");
    },
    rateGood: function() {
      console.log("thumbs up");
    },
    rateBad: function() {
      console.log("thumbs up");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.docs {
  background-color: #f2f2f2;
}
.doc-container {
  display: flex;
  justify-content: space-around;
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
}
.doc-content img {
  width: 100%;
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
  margin: 0 7%;
  padding: 3% 0;
  /* margin-bottom: 89px; */
  margin-top: 82px;
}
.left-nav {
  margin-top: 35px;
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
  margin-top: 35px;
}
ul {
  list-style-type: none;
  margin: 10px 0px;
  padding: 0;
  font-size: 16px;
  line-height: 20px;
}
li {
  margin: 16px 0px;
  list-style-type: none;
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
}
.rating a {
  color: #ffffff;
  text-decoration-line: none;
}
.rating #helptext {
  position: relative;
  display: inline-block;
  /* margin-right: 50px !important; */
}
.rating #yesButton {
  background-color: #f5a623;
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
.rating #yesButton:before {
  content: url(../assets/img/thumbs-up.svg);
  width: 20px;
  float: left;
  margin-right: 11px;
  margin-bottom: 3px;
}
.rating #noButton {
  background: #4d5679;
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
.anchor {
  /* background: url(../img/); */
  text-decoration: none;
  opacity: 0;
  color: #637381;
}
.anchor:hover {
  opacity: 1;
  text-decoration: none;
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

/* markdown styling */
pre {
  color: yellowgreen !important;
}
.highlight {
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 2em 1.5em 1em 1.5em;
  display: block;
  text-align: left !important;
  word-wrap: break-word;
  margin: 0 !important;
  overflow-x: auto;
  background: rgba(232, 236, 242, 0.674536);
  font-family: Open-Sans;
}

.highlight .c {
  color: #998;
  font-style: italic;
}
.highlight .err {
  color: #a61717;
  background-color: #e3d2d2;
}
.highlight .k {
  font-weight: bold;
}
.highlight .o {
  font-weight: bold;
}
.highlight .cm {
  color: #998;
  font-style: italic;
}
.highlight .cp {
  color: #999;
  font-weight: bold;
}
.highlight .c1 {
  color: #998;
  font-style: italic;
}
.highlight .cs {
  color: #999;
  font-weight: bold;
  font-style: italic;
}
.highlight .gd {
  color: #000;
  background-color: #fdd;
}
.highlight .gd .x {
  color: #000;
  background-color: #faa;
}
.highlight .ge {
  font-style: italic;
}
.highlight .gr {
  color: #a00;
}
.highlight .gh {
  color: #999;
}
.highlight .gi {
  color: #000;
  background-color: #dfd;
}
.highlight .gi .x {
  color: #000;
  background-color: #afa;
}
.highlight .go {
  color: #888;
}
.highlight .gp {
  color: #555;
}
.highlight .gs {
  font-weight: bold;
}
.highlight .gu {
  color: #aaa;
}
.highlight .gt {
  color: #a00;
}
.highlight .kc {
  font-weight: bold;
}
.highlight .kd {
  font-weight: bold;
}
.highlight .kp {
  font-weight: bold;
}
.highlight .kr {
  font-weight: bold;
}
.highlight .kt {
  color: #458;
  font-weight: bold;
}
.highlight .m {
  color: #099;
}
.highlight .s {
  color: #d14;
}
.highlight .na {
  color: #008080;
}
.highlight .nb {
  color: #0086b3;
}
.highlight .nc {
  color: #458;
  font-weight: bold;
}
.highlight .no {
  color: #008080;
}
.highlight .ni {
  color: #800080;
}
.highlight .ne {
  color: #900;
  font-weight: bold;
}
.highlight .nf {
  color: #900;
  font-weight: bold;
}
.highlight .nn {
  color: #555;
}
.highlight .nt {
  color: #000080;
}
.highlight .nv {
  color: #008080;
}
.highlight .ow {
  font-weight: bold;
}
.highlight .w {
  color: #bbb;
}
.highlight .mf {
  color: #099;
}
.highlight .mh {
  color: #099;
}
.highlight .mi {
  color: #099;
}
.highlight .mo {
  color: #099;
}
.highlight .sb {
  color: #d14;
}
.highlight .sc {
  color: #d14;
}
.highlight .sd {
  color: #d14;
}
.highlight .s2 {
  color: #d14;
}
.highlight .se {
  color: #d14;
}
.highlight .sh {
  color: #d14;
}
.highlight .si {
  color: #d14;
}
.highlight .sx {
  color: #d14;
}
.highlight .sr {
  color: #009926;
}
.highlight .s1 {
  color: #d14;
}
.highlight .ss {
  color: #990073;
}
.highlight .bp {
  color: #999;
}
.highlight .vc {
  color: #008080;
}
.highlight .vg {
  color: #008080;
}
.highlight .vi {
  color: #008080;
}
.highlight .il {
  color: #099;
}

@media all and (max-width: 768px) {
  .help-container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
