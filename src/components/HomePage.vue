<template>
  <div class="home-page">
    <Header />

    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <p class="title">Flutterwave for Developers</p>
        <p class="subtitle">
          Fastest way to learn how to integrate our APIs to your products. You are
          <br />covered with everything from SDKs in your preferred language to sample
          <br />apps for Web and Mobile.
        </p>
        <div class="row button-row">
          <div class="col-6 text-right login-btn">
            <!-- <button @click="bhj" class="btn-primary" id="login">Get API Keys</button> -->
            <router-link :to="{ name: 'login' }" target="_blank">Get API Keys</router-link>
          </div>
          <div class="col-6 text-left help-btn">
            <!-- <a class="btn-primary" id="slack" href="#">Get help</a> -->

            <a href="http://34.247.34.48/forum" target="_blank">Get Help</a>
          </div>
        </div>
      </div>
      <div class="container features-container">
        <p id="title">What do you need to do ?</p>
        <hr />
        <div class="card-deck">
         
          
            <div class="card firstlink">
               <router-link class="nolink" to="/Payments">
              <img src="../assets/img/payments.svg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-title">Payments</p>
                <p class="card-text">
                  Payment links allow merchants accept payments
                  on their site without the need to integrate. This
                  is great for Individuals and merchants who don't
                  have developer resources.
                </p>
                <a href="#" >View documentation</a>
              </div>
              </router-link>
            </div>
          

          <div class="card" @click="goToDocs('subscriptions', 'node', 'overview')">
            <img src="../assets/img/subscriptions.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-title">Subscriptions</p>
              <p class="card-text">
                Payment links allow merchants accept payments
                on their site without the need to integrate. This
                is great for Individuals and merchants who don't
                have developer resources.
              </p>
              <a href="#" class>View documentation</a>
            </div>
          </div>

          <div class="card" @click="goToDocs('transfers', 'node', 'overview')">
            <img src="../assets/img/transfers.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-title">Transfers</p>
              <p class="card-text">
                Payment links allow merchants accept payments
                on their site without the need to integrate. This
                is great for Individuals and merchants who don't
                have developer resources.
              </p>
              <a href="#" class>View documentation</a>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card" @click="goToDocs('split-payment', 'node', 'overview')">
            <img src="../assets/img/split-payment.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-title">Split payment</p>
              <p class="card-text">
                Rave's split payment feature allows you split a
                transaction between two (2) or more accounts
                and collect fees on the transaction.
              </p>
              <a href="#" class>View documentation</a>
            </div>
          </div>

          <div class="card" @click="goToDocs('bills', 'node', 'overview')">
            <img src="../assets/img/bills.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-title">Bills Payment / Airtime Purchase</p>
              <p class="card-text">
                Payment links allow merchants accept payments
                on their site without the need to integrate. This
                is great for Individuals and merchants who don't
                have developer resources.
              </p>
              <a href="#" class>View documentation</a>
            </div>
          </div>

          <div class="card" @click="goToDocs('identity', 'node', 'overview')">
            <img src="../assets/img/identity.svg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-title">Identity verification</p>
              <p class="card-text">
                 Rave allows you to verify customer's BVN
                and perform KYC.  It allows you verify BVN supplied by a customer and can also be used for customer KYC methods
                
              </p>
              <a href="#" class>View documentation</a>
            </div>
          </div>



         
        </div>
      </div>
    </div>

    <div class="container guides-container">
      <p id="title">Guides and Resources</p>
      <p id="sub-title">
        Learn and explore best practices and the different ways to work with the
        Rave APIs to enable amazing ways to innovate.
      </p>

      <div class="card-deck">
        <div class="card">
          <img src="../assets/img/learning-vue-step-by-step.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-title">
              Building a complete checkout
              system using Rave, Vuejs & Nodejs
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consecte
              adipiscing elit. Donec sollicitudin arcu
              at elementum velit accumen pulvinar.
            </p>
          </div>
          <div class="footer">
            <a href="#" class>Read more</a>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/learning-vue-step-by-step.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-title">
              Building a complete checkout
              system using Rave, Vuejs & Nodejs
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consecte
              adipiscing elit. Donec sollicitudin arcu
              at elementum velit accumen pulvinar.
            </p>
          </div>
          <div class="footer">
            <a href="#" class>Read more</a>
          </div>
        </div>

        <div class="card">
          <img src="../assets/img/learning-vue-step-by-step.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-title">
              Building a complete checkout
              system using Rave, Vuejs & Nodejs
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consecte
              adipiscing elit. Donec sollicitudin arcu
              at elementum velit accumen pulvinar.
            </p>
          </div>
          <div @click="changed" class="footer">
            <!-- <a href="#" class>Read more</a> -->
            <p>{{ $store.getters.loggedIn }}</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "HomePage",
  components: {
    Header,
    Footer
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      feature: ""
    };
  },
  methods: {
    goToDocs(feature, language, article) {
      //   alert(`we going`);
      this.$router.push({
        name: "docs",
        params: { feature: feature, language: language, article: article }
      });
    },
    changed() {
      this.$store.commit('change', true)
      console.log($store.getters.loggedIn)

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  background-color: #f2f2f2;
}
.navbar-brand img {
  width: 130px;
  /* margin-right: 199px; */
  /* margin-top: 29px; */
}
.jumbotron {
  height: 900px;
  background-color: #fef8ee;
  text-align: center;
  margin-bottom: 500px;
}
.jumbotron .title {
  margin-top: 60px;
}
.title {
  font-size: 48px;
  line-height: 58px;
  color: #000000;
  font-family: Flutterwave;
}
.subtitle {
  font-size: 24px;
  line-height: 32px;
  margin-top: 10px;
  font-family: F-Wave-Regular;
  color: #4a4a4a;
}
.button-row {
  margin-top: 84px;
  margin-bottom: 100px;
}
.button-row a {
  box-shadow: 1px 1px 3px rgba(50, 50, 54, 0.13),
    0px 0px 3px rgba(63, 63, 68, 0.05);
  border-radius: 4px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.0036px;
  cursor: pointer;
  font-family: SFProDisplay;
  text-decoration: none;
  border: none;
  padding: 17px 22px;
  width: 199px;
}
.login-btn a {
  background: #f5a623;
  color: #ffffff;
}
.help-btn a {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
}
.features-container {
  width: 100%;
  background-color: #ffffff;
  margin-top: 125px;
  height: 800px;
  padding: 1px 20px;
  overflow: auto;
  border-radius: 6px;
}
.features-container #title {
  font-size: 32px;
  line-height: 38px;
  color: #000000;
  font-family: Flutterwave;
}
.features-container hr {
  width: 120px;
  margin-top: 25px !important;
  margin-bottom: 61px;
  border-radius: 17.57px;
  background: #e5e5e5;
}
.features-container .row {
  margin-top: 10px;
}

.features-container .card {
  border: none;
  color: #101010;
  cursor: pointer;
}
.features-container .card img {
  height: 60px;
}
.features-container .card .card-title {
  font-size: 18px;
  line-height: 22px;
  font-family: Flutterwave;
}
.nolink{
  color: #000000 !important;
  font-weight: normal !important;
    
}
.nolink a:after {
  line-height: 24px !important;
}
.features-container .card .card-text {
  font-size: 14.4px;
  line-height: 21px;
  font-family: F-Wave-Regular;
}
.features-container .card a {
  font-size: 14px;
  line-height: 19px;
  font-family: Open-Sans;
  color: #f5a623;
  font-weight: 600;
}
.features-container .card a:after {
  content: url(../assets/img/right-arrow.svg);
  position: absolute;
  line-height: 29px;
  margin-left: 15px;
}
.features-container .card:hover {
  cursor: pointer;
}
.nn {
  background: yellowgreen;
}

/* try it now section: to be removed */
.tryWrapper {
  text-align: center;
}
#title {
  font-size: 38px;
  line-height: 46px;
  margin-bottom: 12px;
  margin-top: 80px;
  font-family: Flutterwave;
  padding-bottom: 0px !important;
}
#sub-title {
  font-weight: normal;
  font-style: normal;
  font-family: Open-Sans;
  font-size: 24px;
  line-height: 33px;
  padding: 0 15px;
  color: #4a4a4a;
  padding: 0 250px;
  padding-bottom: 0px !important;
}
.try {
  height: 575px;
  background-color: #ffffff;
  color: #000000;
  padding: 0px 5px;
  margin: 5px auto;
  border-radius: 4px;
}
.tryHeader {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding: 5px 5px;
  /* font-size: 14px; */
  font-size: 1vw;
  font-family: Open-Sans;
}
#nav {
  display: flex;
  justify-content: space-around;
}
.codebox {
  /* width: inherit; */
  height: 470px;
  background-color: #f8f9fd;
  position: relative;
  color: #1d75b3;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;

  display: block;
  text-align: left !important;
  word-wrap: break-word;
  margin: 0 !important;
  overflow-x: auto;
  background: rgba(232, 236, 242, 0.674536);
  font-family: Open-Sans;
}
pre {
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
.btn {
  position: absolute;
  background-color: #f5a623;
  border-radius: 6px;
  font-weight: 600;

  font-size: 14px;
  line-height: 19px;
  padding: 13px 17px;
  color: #ffffff;
  overflow: auto;
  right: 34px;
  bottom: 30px;
  font-family: Open-Sans;
}
.text-waiting {
  color: #e3e8ee;
}
.trynow-waiting {
  display: inline-block;
  height: 25px;
  width: 25px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  font: 16px Open-Sans;
  margin-right: 10px;
  background-color: #e3e8ee;
  color: #697386;
}
.trynow-completed {
  background-color: #292e31;
  color: #697386;
  display: inline-block;
  height: 25px;
  width: 25px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  font: 16px Open-Sans;
  margin-right: 10px;
}
.text-completed {
  color: #292e31;
}
.trynow-current {
  background: #f5a623;
  color: #ffffff;
  display: inline-block;
  height: 25px;
  width: 25px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  font: 16px Open-Sans;
  margin-right: 10px;
}

.text-current {
  color: #f5a623;
}

#sub-title {
  font-weight: normal;
  font-family: Open-Sans;
  font-size: 24px;
  line-height: 33px;
  padding: 0 15px;
  color: #4a4a4a;
  padding: 0 250px;
  padding-bottom: 0px !important;
}

/* guides section */
.guides-container {
  text-align: center;
}
.guides-container .card {
  text-align: justify;
  font-family: Open-Sans;
  margin-bottom: 20px;
}
.guides-container .card-title {
  font-weight: 900;
}
.guides-container .card-body {
  color: #2a3255;
}
.guides-container .card .footer {
  background: #f4f6f8;
  font-size: 15.4px;
  /* line-height: 21px; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62.7px;
}
.guides-container .card .footer a {
  text-decoration: none;
  color: #4e5770;
}
@media all and (max-width: 768px) {
  #sub-title {
    padding: 0 10px;
  }
  .subtitle {
    font-size: 20px;
  }
}
@media all and (max-width: 425px) {
  .jumbotron {
    margin-bottom: 530px;
  }
}
</style>
