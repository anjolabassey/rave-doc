<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img alt="Flutterwave logo" src="../assets/img/flw_icon.svg" />
      </a>
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
      <div class="search">
          <form @click="displaySearch" class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search the documentation"
          aria-label="Search"
        />
        <img class src="../assets/img/search.svg" />
      </form>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <!-- <form class="form-inline mr-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn my-2 my-sm-0" type="submit">Search</button>
        </form>-->

        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <router-link to="/Login" target="_blank" class="btn my-2 my-sm-0">Get API Keys</router-link>
          </li>
          <li v-if="loggedIn" class="nav-item dropdown">
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
              <a class="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <Search v-if="showSearch"/>
  </div>
</template>

<script>
import Search from "./Search";

export default {
  name: "Header",
  components: {
    Search
  },
  data: function() {
    return {
      username: "Anjola",
      loggedIn: false,
      showSearch: false
    };
  },
  methods: {
    displaySearch() {
      if (this.showSearch == false) {
        this.showSearch = true;
      } else {
        this.showSearch = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: #fef8ee;
  height: 77px;
}
.navbar-brand img {
  width: 130px;
  margin-right: 199px;
  /* margin-top: 29px; */
}

.navbar-light .navbar-nav .nav-link {
  font-family: Open-Sans-Semibold;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  color: #333333;

  margin-right: 37px;
  /* margin-top: 32px; */
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
  margin-right: 17px;
  margin-top: 1px;
  overflow: hidden;
  border-radius: 20.25px;
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
}
.search form img {
  position: absolute;
  padding: 0.6rem;
  right: 25px;
}
</style>
