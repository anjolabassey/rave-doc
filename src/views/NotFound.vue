<template>
  <div class="notfound">
    <div class="container">
      <div class="caption">{{ errorCode }}</div>
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ subtitle }}</div>

      <div class="btn">
        <router-link :to="{ name: 'home' }">{{ btnText }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notfound",
  data() {
    return {
      errorCode: "404",
      title: "LOOKS LIKE YOU ARE LOST",
      subtitle: "The page you're looking for does not exist",
      btnText: "Go back to the homepage"
    };
  },
  methods: {
    login(event) {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notfound {
  background-color: #f2f2f2f2 !important;
}
.container {
  /* display: flex; */
  background-color: #ffffff;
  text-align: center;
  padding: 0 30px;
  min-height: 100vh;
  align-items: center;
}
.caption {
  color: #f5a623;
  font-size: 280px;
  font-weight: bold;
}
.title {
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 800;
}
.subtitle {
  font-size: 24px;
  color: #637381;
  margin-top: 10px;
}
.btn {
  background: #ffffff;
  margin-top: 50px;
  box-shadow: 1px 1px 3px rgba(50, 50, 54, 0.13),
    0px 0px 3px rgba(63, 63, 68, 0.05);
  border-radius: 2px;
}
btn:hover {
  box-shadow: 1px 2px 5px rgba(50, 50, 54, 0.13),
    0px 0px 4px rgba(63, 63, 68, 0.05);
  border-radius: 2px;
}
.btn a {
  color: #000000;
  font-weight: 600;
}
.btn a:hover {
  text-decoration: none;
  color: #f5a623;
}
@media screen and (max-width: 992px) {
  .caption {
    font-size: 180px;
  }
}

@media screen and (max-width: 325px) {
  .caption {
    font-size: 90px;
  }
}
</style>