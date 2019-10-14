<template>
  <footer class="footer">
    <div id="text-center">
      <p>Get help from other developers and get product news from our forum before anyone</p>
    </div>

    <div class="help-btn">
      <router-link to="" target="_blank">Get Help</router-link>
    </div>
  </footer>
</template>

<script>


export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background: url("../assets/img/slack_bg.png") no-repeat center;
  background-size: cover;
  color: #ffffff;
  margin-top: 84px;
  height: 397px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer p {
  font-family: Open-Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
}
.help-btn {
    margin-top: 36px;
}
.help-btn a {
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  font-family: SFProDisplay;
  text-decoration: none;
  border: none;
  padding: 17px 22px;
  font-size: 18px;
  line-height: 24px;
  border-radius: 4px;
}
@media all and (max-width: 768px) {

  .footer {
    text-align: center;
  }
}
</style>
