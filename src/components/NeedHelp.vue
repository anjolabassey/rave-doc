
<template>
  <div class="need-help-section">
    <div class="container" id="text-center">
      <p class="heading">Need help?</p>
      <p class="text-body">
        We are always happy to help with any issues you have.
        <br />Search the documentation or
        <router-link to target>visit our Forum.</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeedHelp"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.need-help-section {
  text-align: left !important;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-family: Open-Sans;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 33px;
}
.need-help-section .container {
  margin: 0;
  padding: 0;
}
.heading {
  font-family: Open-Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #2a3255;
}
.text-body {
  font-family: Open-Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
}

</style>
