<template>
  <div class="tech">
    <Header />
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <p class="title">What technology are you building with?</p>
        <p class="subtitle">
          We’ve got comprehensive guides for each platform that
          <br />should help out with anything you need. You can also take a
          <br />look at the detailed API references and tutorials for a
          <br />better idea of how it all comes together.
        </p>
      </div>
    </div>
    <div class="container tech-section">
      <p class="text-center">What technology are you building it with?</p>
      <div class="searchWrapper">
        
        <input class="searchBox2" type="search" name="search" placeholder="Search technology name" />
        <!-- <img class="searchIcon2" src="../assets/img/search.svg" /> -->
      </div>
      <p class="heading">Web</p>
      <div class="row">
        <div class="card">
          <img src="../assets/img/react.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">ReactJs</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/angular.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">AngularJs</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/vue.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">VueJs</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/nodejs.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">nodeJs</p>
          </div>
        </div>
      </div>

      <p class="heading">Mobile</p>
      <div class="row">
        <div class="card">
          <img src="../assets/img/android.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Android</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/ios.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Apple</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/cordova.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Cordova</p>
          </div>
        </div>
      </div>

      <p class="heading">SDKs</p>
      <div class="row">
        <div class="card">
          <img src="../assets/img/php.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">PHP SDK</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/golang.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Go</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/woocommerce.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Woo commerce</p>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/react.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Wordpress</p>
          </div>
        </div>
      </div>
      
      <hr />

      <NeedHelp />

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import NeedHelp from "../components/NeedHelp";
import Footer from "../components/Footer";

export default {
  name: "Tech",
  components: {
    Header,
    NeedHelp,
    Footer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tech {
  background-color: #f2f2f2;
}
.jumbotron {
  height: 475px;
  background-color: #fef8ee;
  text-align: center;
}
.jumbotron .title {
  margin-top: 80px;
}
.tech-section {
    padding-right: 270px;
    padding-left: 270px;
    margin-right: auto;
    margin-left: auto;
}
.title {
  font-size: 46px;
  line-height: 55px;
  color: #000000;
  font-family: Flutterwave;
}
.subtitle {
  font-size: 28px;
  line-height: 34px;
  margin-top: 24px;
  font-family: F-Wave-Regular;
  color: #101010;
  margin-bottom: 87px;
}
.text-center {
  font-family: Flutterwave;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

.heading {
  font-family: Open-Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #212b35;
  margin-top: 59px;
}
.row {
    margin-left: 0px;
}
.card {
  height: 132px;
  width: 140px;
  padding: 10px 0;
  text-align: center;
  background: #ffffff;
  border: 1px solid #ffffff;
  margin-right: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: 0px 1.2px 5.6px rgba(0, 0, 0, 0.12);
  color: #2a3255;
}
hr {
    margin-top: 43px;
}

.searchWrapper2 {
  display: inline-flex;
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 24px;
  overflow: hidden;
  border-radius: 3px;
  font-family: Open-Sans;
}
.searchIcon2 {
  position: absolute;
  padding: 0.6rem;
  right: 5px;
}
.searchBox2 {
  background: #ffffff;
  color: #101010;
  border: 0.9px solid #c4b7a2;
  box-sizing: border-box;
  border-radius: 3px;
  /* width: 613px; */
  width: 100%;
  height: 40px;
  padding: 0 24px;
  font-family: Open-Sans;
  font-style: normal;
  font-weight: normal;
}
@media all and (max-width: 1024px) {
  .tech-section {
    padding-right: 150px;
    padding-left: 150px;
  }
}
@media all and (max-width: 768px) {
  .tech-section {
    padding-right: 70px;
    padding-left: 70px;
  }
}
@media all and (max-width: 425px) {
  .subtitle {
    font-size: 16px;
  }
}
</style>
