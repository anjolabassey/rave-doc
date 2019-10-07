<template>
  <div>
    <form @submit="login" class="login_container">
      <h5 class="header text-center">LOGIN TO GET YOUR API KEYS</h5>
      <div class="form-group">
        <!-- <label for="inputEmail4">Email</label> -->
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
          required
        />
      </div>

      <div class="form-group">
        <!-- <label for="inputPassword4">Password</label> -->
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword4"
          placeholder="Password"
          required
        />
      </div>

      <span v-if="isError" class="error-text">{{errorText}}</span>

      <button id="loginButton" type="submit" class="btn">{{buttonText}}</button>

      <p class="footer text-center">
        Don't have an account?
        <a
          href="https://rave.flutterwave.com/signup"
          target="_blank"
          class
        >Sign Up</a>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      isError: false,
      email: "",
      password: "",
      flwAuthToken: "",
      buttonText: "Login",
      errorText: "error Text"
    };
  },
  methods: {
    login(event) {
      this.buttonText = "Fetching Keys..";
      document.getElementById("loginButton").disabled = true;
      event.preventdefault();
      let requestObject = {
        identifier: this.email,
        password: this.password
      };

      console.log(requestObject);

      //   this.$http({
      //     method: "post",
      //     url: "https://api.ravepay.co/login",
      //     data: {
      //       firstName: "Fred",
      //       lastName: "Flintstone"
      //     }
      //   }).then(response => {
      //       console.log(response.data);
      //     });

      this.$http
        .post("https://api.ravepay.co/login", requestObject, {
          headers: {
            "v3-xapp-id": 1
          }
        })
        .then(response => {
          console.log(response.data.data);
          //   this.flwAuthToken = response.data["flw-auth-token"];
        })
        .catch(function(error) {
          console.log(error);
          //   this.isError = true;
          this.errorText = error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_container {
  background-color: #ffffff;
  box-shadow: 0px 1.2px 5.6px rgba(0, 0, 0, 0.12);
  padding: 25px;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  min-height: 350px;
  /* max-height: 440px; */
  min-width: 456px;
  margin-top: 100px;
}
.form-group {
  margin-top: 30px;
}
input {
  padding: 25px 14px;
  font-size: 18px;
  font-weight: 400;
}
.btn {
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  padding: 14px 16px;
  margin-bottom: 10px;
  font-weight: 400;
  display: block;
  background-color: #f5a623;
  color: #ffffff;
  border: none;
}
.btn:hover {
  background-color: #f5a623;
  color: #ffffff;
  box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.12);
}
.header {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 26px;
  text-align: center;
  margin-top: 15px;
  text-align: center;
  font-family: SFProDisplay;
}
.footer {
  margin-top: 10px;
  font-family: SFProDisplay;
}
.footer a {
  color: #f5a623;
}
.error-text {
  color: red;
}
</style>
