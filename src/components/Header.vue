<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">
        <img alt="Flutterwave logo" src="../assets/img/flw_icon.svg" />
      </a>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModalScrollable"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <!-- <h5 class="modal-title" id="exampleModalScrollableTitle">Search Bar</h5> -->
              <ais-index
                app-id="ENGYVJQGI9"
                api-key="43dd4103be33bc9bb9fabe7e8807896c"
                index-name="github-pages"
              >
                <ais-search-box
                  placeholder="Search the documentation"
                  :class-names="{
                    'ais-input': 'MySearchBox',
                    'ais-SearchBox-submit': 'search-box__submit',
                    'ais-SearchBox-reset': 'ais-search-box__reset'
   
                  }"
                ></ais-search-box>
              </ais-index>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ais-index
                app-id="ENGYVJQGI9"
                api-key="43dd4103be33bc9bb9fabe7e8807896c"
                index-name="github-pages"
              >
                <ais-results>
                  <template slot-scope="{ result }">
                    <p @click="getSearchPage" class="title">{{ result.title}}</p>
                    <!-- <h6 class="subtitle">{{ result.description }}</h6> -->
                    <!-- <a @click="getSearchResult" :href=result.url>{{result}}</a> -->
                    <!-- <ais-highlight :result="result" attribute-name="title"></ais-highlight> -->
                  </template>
                </ais-results>
              </ais-index>
            </div>
          </div>
        </div>
      </div>
      <div type=" button" class="search" data-toggle="modal" data-target="#exampleModalScrollable">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search the documentation"
            aria-label="Search"
          />
          <img class src="../assets/img/search.svg" />
        </form>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://support.flutterwave.com">Support</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>

          <li v-if="loggedIn" class="nav-item dropdown">
            <div class="nav-icon">
              <div class="nav-item" v-if="isImage">
                <img class="img-fluid img-thumbnail" :src="logo" />
              </div>
              <div v-else class="nav-item">
                <div class="avatar">{{ initials }}</div>
              </div>
            </div>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >{{username}}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <a @click="logout" class="dropdown-item" href="#">Logout</a>
            </div>
          </li>

          <li v-else class="nav-item">
            <router-link
              :to="{ name: 'login' }"
              target="_blank"
              class="btn my-2 my-sm-0"
            >Get API Keys</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <Search v-if="showSearch" />
  </div>
</template>

<script>
import Search from "./Search";

export default {
  name: "Header",
  components: {
    Search
  },
  data() {
    return {
      username: "",
      initials: "",
      logo: "",
      showSearch: false,
      loggedIn: false,
      isImage: false,
      MySearchBox: {
        'color': 'red'
      }
    };
  },
  mounted() {
    if (localStorage.loggedIn) {
      this.loggedIn = localStorage.loggedIn;
    }

    if (localStorage.logo) {
      if (localStorage.logo == "null") {
        this.isImage = false;
      } else {
        this.isImage = true;
        this.logo = localStorage.logo;
      }
    } else {
      this.isImage = false;
    }

    if (localStorage.username) {
      const initials = localStorage.username
      .split(" ")
      .map(x => x[0])
      .join("");
    this.username = localStorage.username;
    this.initials = initials;
    }

    
  },
  // watch() {

  // },
  methods: {
    // Log user out of their profile on the documentation
    logout() {
      this.loggedIn = false;
      this.isImage = false;
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("secretKey");
      localStorage.removeItem("publicKey");
      localStorage.removeItem("username");
      localStorage.removeItem("logo");
      localStorage.removeItem("flwAuthToken");
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
    getSearchPage() {

      var headings = document.getElementsByTagName("h2");
      this.headings = headings;

      this.$http
        .get(
          "https://rave-documentation.herokuapp.com/content?path=node/transfers/goinglive.md"
        )
        .then(response => {
          var content = this.b64DecodeUnicode(response.data["data"][0].content);
          // If you're in the browser, the Remarkable class is already available in the window
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

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #fef8ee;
  height: 77px;
  padding: 21px 146px;
}
.navbar-brand img {
  width: 140px;
  margin-right: 176px;
  /* margin-top: 29px; */
}

.navbar-light .navbar-nav .nav-link {
  font-family: Open-Sans-Semibold;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  color: #333333;

  margin-right: 25px;
  margin-top: 8px;
}
.navbar-collapse .btn {
  background: #f5a623;
  border-radius: 6px;
  color: #ffffff;
  font-family: Open-Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  height: 45px;
  width: 128px;
  padding: 13px 21px;
  margin-top: 19px;
}

.navbar-light .navbar-toggler-icon {
  /* background-color: #f5a623; */
  color: red;
}
.search {
  display: inline-flex;
  position: relative;
  height: 40px;
  /* margin-right: 17px; */
  /* margin-left: 30px; */
  margin-top: 2px;
  /* overflow:hidden; */
  border-radius: 20.25px;
}
li img {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  border: 1px solid #979797;
}
.avatar {
  background: #ece4d5;
  border: 1px solid #979797;
  color: #333333;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 14px;
  margin-right: 10px;
}
.nav-icon {
  float: left;
  margin-right: 10px;
  margin-top: 11px;
}
.search form input {
  background: #fffcf6;
  color: #101010;
  font-size: 14.4px;
  border: 0.9px solid #c4b7a2;
  box-sizing: border-box;
  border-radius: 20.25px;
  width: 513px;
  height: 40px;
  outline: none;
  overflow: hidden;
  -webkit-appearance: none;

  padding: 0 24px;
  font-family: F-Wave-Regular;
  font-size: 14.4px;
  line-height: 17px;
  color: #101010;
}
.search form img {
  position: absolute;
  padding: 0.6rem;
  right: 25px;
}
/* style algolia search */
.ais-search-box__form {
  /* background-color: red; */
}
.search-box {
  width: 100%;
  outline: none;
  font-size: 15px;
  padding: 7px;
  box-sizing: border-box;
  border: 2px solid lightgrey;
  border-radius: 2px;
  margin: 20px 0;
  margin-right: 5%;
  padding-left: 40px;
}
.search-box__submit {
  background-color: #f5a623;
}
.ais-search-box__reset {
  display: none;
}
.ais-clear ais-clear--disabled {
  display: none;
}
.ais-results p {
  /* background-color: wheat; */
  color: #637381;
  cursor: pointer;
  
}
.ais-results p:hover {
  color: #f5a623;
  
}
.ais-results .title {
  font-weight: 600;
}
.ais-results .title::before {
  content: url(../assets/img/back.png);
  width: 20px;
  /* float: left; */
  margin-right: 11px;
  margin-bottom: 3px;
}
.ais-description .subtitle {
  font-weight: 300;
  font-size: 2px;
}
@media all and (max-width: 1024px) {
  .search form input {
    width: 300px;
  }
  .navbar-brand img {
    margin-right: 106px;
  }
  .navbar {
    padding: 21px 116px;
  }
}
@media all and (max-width: 768px) {
  .search form input {
    width: 250px;
  }
  .navbar-brand img {
    margin-right: 50px;
  }
  .navbar {
    padding: 21px 50px;
  }
}
@media all and (max-width: 425px) {
  .search {
    height: 40px;
  }
  .search form input {
    width: 150px;
  }
  .navbar-brand img {
    margin-right: 10px;
    width: 100px;
  }
  .navbar {
    padding: 21px 30px;
  }
}
</style>
