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
          <div id="exampleModal" class="modal-content">
            <div id="modalBody" class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <ais-index :search-client="searchClient" index-name="github-pages">
                <ais-search-box
                  placeholder="Search the documentation"
                  :autofocus="true"
                  :class-names="{
                    'ais-input': 'searchBox',
                    'ais-search-box__submit': 'searchBox__submit',
                    'ais-clear--disabled': 'searchBox__reset',
                    'ais-clear': 'searchBox__clear'
   
                  }"
                ></ais-search-box>
                <!-- <ais-results>
                  <template slot-scope="{ result }">
                    <p class="title">{{ result.title}}</p>
                    <p class="subtitle">{{ result.description }}</p>
                    <a>{{ result.title }}</a>
                  </template>
                </ais-results>-->

                <!-- <ais-panel 
                  :class-names="{
                    'ais-Panel': 'panel',
                    'ais-Panel-body': 'panelBody',
                }">-->
                <div class="default-panel">
                  <div class="row">
                    <div class="col-6">
                      <h4>Getting Started</h4>
                      <ul class="modal-list">
                        <li>
                          <a href="https://developer.flutterwave.com/docs/rave-standard">Quickstart</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/api-keys"
                          >How to get your API Keys</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/rave-errors"
                          >Error handling</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/plugins"
                          >Flutterwave Libraries</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <h4>Payments</h4>
                      <ul class="modal-list">
                        <li>
                          <a
                            href="https://developer.flutterwave.com/v2.0/reference#introduction"
                          >Overview</a>
                        </li>
                        <!-- | <small>hello</small></li>  -->
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/plugins"
                          >Plugins and Libraries</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/integrating-rave"
                          >Collecting Web payments</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/plugins#section-mobile-sdk"
                          >Collecting Mobile payments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <h4>Features</h4>
                      <ul class="modal-list">
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/split-payment"
                            target="_blank"
                          >Split payments</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/v2.0/reference#bill-payments"
                          >Bill payments</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/v2.0/reference#create-a-virtual-card"
                          >Virtual Cards</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/v2.0/reference#how-transfers-work"
                          >Transfers</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-6">
                      <h4>API Reference</h4>
                      <ul class="modal-list">
                        <li>
                          <a
                            href="https://developer.flutterwave.com/docs/api-introduction"
                          >API Introduction</a>
                        </li>
                        <li>
                          <a
                            href="https://developer.flutterwave.com/v2.0/reference#section-step-4-validate-the-payment"
                          >Authentication</a>
                        </li>
                        <li>
                          <a href="https://developer.flutterwave.com/docs/events-webhooks">Webhooks</a>
                        </li>
                        <li>
                          <a href="https://developer.flutterwave.com/docs/rave-errors">Errors</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- </ais-panel> -->
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
            placeholder="Search docs"
            aria-label="Search"
            id="searchBar"
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
            <a class="nav-link">Blog</a>
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
            >{{ username }}</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <a @click="logout" class="dropdown-item">Logout</a>
            </div>
          </li>

          <li v-else class="nav-item">
            <router-link :to="{ name: 'login' }" class="btn my-2 my-sm-0">Get API Keys</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  name: "Header",
  data() {
    return {
      username: "",
      initials: "",
      logo: "",
      showSearch: false,
      loggedIn: false,
      isImage: false,
      searchClient: algoliasearch(
        "ENGYVJQGI9",
        "f19616439cac1e58e1a8f7f0a7e4764a"
      )
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
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    },
    // Show the search modal when the search bar is clicked
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
          this.$refs.content.innerHTML = md.render(content);
          this.$refs.content.innerHTML;
          var pre = document.getElementsByTagName("code");
          // Attach stylings to the code snippets
          Array.from(pre).forEach(el => {
            el.classList.add("highlight");
          });

          // Append link anchors to all headings
          const linkContent = "  &#9875";
          for (const heading of headings) {
            const linkIcon = document.createElement("a");
            linkIcon.setAttribute("href", `#${heading.innerHTML}`);
            linkIcon.setAttribute("class", "anchor");
            linkIcon.innerHTML = linkContent;
          }
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
.modal-content {
  /* background-color: red; */
  height: 500px;
}
.default-panel {
  padding: 10px 10px;
}
.modal-content h4 {
  font-size: 16px;
  color: #4d5679;
  margin-left: 14px;
  margin-top: 12px;
  /* position: absolute; */
  /* z-index: 2; */
  /* text-align: center; */
}
.modal-list {
  list-style-type: none;
  padding-left: 0;
  font-size: 14px;
  font-weight: 600;
}

.modal-list a {
  text-decoration: none;
  color: #8d8e94;
}
.modal-list li {
  margin: 9px 10px 0px 10px;
}

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

@media (min-width: 2250px) {
  .navbar-brand img {
    margin-right: 676px;
    /* margin-top: 29px; */
  }
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
.navbar-collapse {
  z-index: 10 !important;
}

.navbar-nav {
  text-align: right;
  background-color:#fef8ee;
  margin-left: 60%;
  padding: 10px;
  border-radius: 4px;
}
.navbar-light .navbar-nav .nav-item:hover {
  color: #f5a623;
  padding: 5px;
  box-shadow: 1px 1px 2px rgba(50, 50, 54, 0.13);
}
.search {
  /* display: inline-flex; */
  position: relative;
  height: 40px;
  margin-left: 25%;
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
  /* width: 513px; */
  width: 250px;
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
.ais-index {
  width: 100%;
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

.ais-results .subtitle {
  font-weight: 300px !important;
  margin-left: 15px;
  color: #637381;
  cursor: pointer;
}

@media all and (max-width: 1320px) {
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

@media all and (max-width: 992px) {
  .search form input {
    width: 250px;
  }
  .navbar-brand img {
    margin-right: 20px;
  }
  .navbar {
    padding: 21px 50px;
  }
  .doc-content {
    width: 500px;
    padding: 15px 30px;
  }
}

@media all and (max-width: 425px) {
  .search {
    height: 40px;
  }
  .search form input {
    width: 130px;
  }
  .navbar-brand img {
    margin-right: 10px;
    width: 100px;
  }
  .navbar {
    padding: 21px 30px;
  }
}

@media all and (max-width: 375px) {
  .search form img {
    position: absolute;
    right: 2px;
  }
  .search form input {
    width: 100px;
  }
  .navbar-brand img {
    /* margin-right: 10px; */
    width: 100px;
  }
  .navbar {
    padding: 21px 30px;
  }
}
</style>
