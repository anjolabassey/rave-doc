<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background-color: #f2f2f2;
}
/* fonts */
@font-face {
  font-family: Flutterwave;
  src: url(./assets/font/Flutterwave-Black.ttf);
}
@font-face {
  font-family: F-Wave-Regular;
  src: url(./assets/font/FLW-Regular.ttf);
}
@font-face {
  font-family: SFProDisplay;
  src: url(./assets/font/SFProDisplay-Regular.ttf);
}
@font-face {
  font-family: Open-Sans;
  src: url(./assets/font/OpenSans-Regular.ttf);
}
@font-face {
  font-family: Open-Sans-Semibold;
  src: url(./assets/font/OpenSans-Semibold.ttf);
}
</style>
