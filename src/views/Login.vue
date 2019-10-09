<template>
  <div class="login">
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
  props: ["loggedIn"],
  data() {
    return {
      isError: false,
      email: "",
      password: "",
      flwAuthToken: "",
      buttonText: "Login",
      errorText: "error Text",
    };
  },
  methods: {
    login(event) {
      const vm = this;
      this.buttonText = "Fetching Keys..";
      document.getElementById("loginButton").disabled = true;
      event.preventDefault();
      let loginRequestObject = {
        identifier: this.email,
        password: this.password
      };
      let testRequestObject = {
        merchant_status: "test"
      };
      let prodRequestObject = {
        merchant_status: "prod"
      }

      this.$http
        .post("https://api.ravepay.co/login", loginRequestObject, {
          headers: {
            "v3-xapp-id": 1
          }
        })
        .then(response => {
          localStorage.setItem(
            "flwAuthToken",
            response.data.data["flw-auth-token"]
          );
          localStorage.setItem(
            "username",
            `${response.data.data.user.first_name} ${response.data.data.user.last_name}`
          );
          localStorage.setItem("logo", response.data.data.company.business_logo);
          localStorage.setItem("loggedIn", true);

          return this.$http.post(
            "https://api.ravepay.co/merchant/accounts/update", testRequestObject, {
              headers: {
                "flw-auth-token": localStorage.getItem("flwAuthToken"),
                "alt_mode_auth": 1,
                "v3-xapp-id": 1
              }
            }
          );
        })
        .then(response => {
          return this.$http.get("https://api.ravepay.co/v2/merchantkeys?include_v1_keys=1", {
            headers: {
              "flw-auth-token": localStorage.getItem("flwAuthToken"),
              "v3-xapp-id": 1
            }
          })
        }).then(response => {
          localStorage.setItem(
            "publicKey", response.data.data.v1keys.public_key
          );
          localStorage.setItem(
            "secretKey", response.data.data.v1keys.secret_key
          );

          return this.$http.post(
            "https://api.ravepay.co/merchant/accounts/update", prodRequestObject, {
              headers: {
                "flw-auth-token": localStorage.getItem("flwAuthToken"),
                "alt_mode_auth": 1,
                "v3-xapp-id": 1
              }
            }
          );
          
        }).then(response => {
          console.log(response.statusText);

          vm.loggedIn = true;
          this.buttonText = "Logged In";
          self.$router.push('/home');
          document.getElementById("loginButton").disabled = false;
        })
        .catch(function(error) {
          var errorMessage = error.response.data.message;

          vm.isError = true;
          vm.errorText = errorMessage;
          vm.buttonText = "Login";
          document.getElementById("loginButton").disabled = false;

          //          if (
          //   errorText.message == "identifier is required , password is required"
          // ) {
          //   $(".error").remove();
          //   $("#submit").after('<span class="error"></span>');
          // } else if (
          //   errorText.message ==
          //   "Error: You have logged in too many times. Please wait an hour before trying again"
          // ) {
          //   $(".error").remove();
          //   $("#submit").after(
          //     '<span class="error">' + errorText.message + "</span>"
          //   );
          // } else {
          //   $(".error").remove();
          //   $("#submit").after(
          //     '<span class="error">' + errorText.message + "</span>"
          //   );
          // }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  background-color: #ffffff !important;
}
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
  margin-top: 10px;
  font-family: SFProDisplay;
}
</style>
