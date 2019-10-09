<template>
<div>


</div>
</template>

<script>
export default {
  name: "Search",
  data: function() {
    return {};
  },
  props: {
    searched: Boolean
  },
  methods: {
    getSearchResult() {
      console.log("Search hit");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_modal {
  position: fixed;
  z-index: 10;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.search_modal .content {
  background-color: #fefefe;
  box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 19px 80px;
  margin: auto;
  padding: 5px 20px 20px 20px;
  border: 1px solid #888;
  width: 50%;
  overflow-x: auto;
  max-height: 500px;
  min-height: 400px;
  font-family: F-Wave-Regular;
  transition: opacity 0.2s linear 0s;
  color: #637381;
}
.ais-index {
  /* background-color: red; */
  padding: 5px auto;
}
.search_box {
  width: 100%;
  border-radius: 15px;
}
.ais-index .ais-clear {
  display: none;
}
button.ais-clear {
  display: none;
}

.ais-results {
  /* background-color: aqua; */
  min-height: 350px;
  /* color: limegreen; */
}
.hide {
  display: none;
}
.show {
  display: inline-block;
}
</style>
