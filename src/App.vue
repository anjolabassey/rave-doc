<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->

    <router-view />
  </div>
</template>
<script>
export default {
  
  watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'Your Website'
      }
    },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
/* style algolia search */
.searchBox {
  width: 100%;
  outline: none;
  font-size: 15px;
  padding: 7px;
  /* margin-top: 25px; */
  /* box-sizing: border-box; */
  border: none;
  border-bottom: 2px solid lightgrey;
  border-radius: 4px;
}
.color {
  color: rebeccapurple;
}

.searchBox__submit,
.searchBox__reset,
.searchBox__clear {
  display: none;
}

.ais-results {
  margin-top: 20px;
}
.ais-description .subtitle {
  font-weight: 300;
  font-size: 2px;
}
.panel {
  color: red;
}
.panelBody {
  background-color: #009926;
}
.panelBody h4 {
  font-size: 11px;
  line-height: 160%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #637381;
  margin-top: 0px;
  padding-top: 0px;
}

/* style content from github */
.notes {
  background: #f2f2f2;
  mix-blend-mode: normal;
  opacity: 0.5;
  border: 1px solid #c4cdd5;
  box-sizing: border-box;
  border-radius: 0px 3px 3px 0px;
  border-left: 5px solid #b8e986;
  padding: 16px 24px;
}
.copy-btn {
  position: absolute;
  top: 12px;
  right: 13px;
  z-index: 2;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 5px 10px;
  color: #555555;
  background: #ffffff;
  box-shadow: 1px 1px 3px rgba(50, 50, 54, 0.13),
    0px 0px 3px rgba(63, 63, 68, 0.05);
  border-radius: 2px;
  font-family: Open-Sans;
  font-size: 8px;
  line-height: 11px;
  
}

.copy-btn:hover {
  text-decoration: none;
  box-shadow: 1px 1px 5px rgba(50, 50, 54, 0.13),
    0px 0px 5px rgba(63, 63, 68, 0.05);
}
.copy-btn:before {
  content: url("./assets/img/Group.svg");
  position: relative;
  margin-right: 4px;
  top: 2px;
}
pre {
  position: relative;
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

.fa {
  text-decoration: none;
  opacity: 0.5;
  margin-left: 10px;
  color: #637381;
}
.fa:hover {
  opacity: 1;
  text-decoration: none;
}
.hide {
  visibility:hidden;
}
.show {
  visibility: visible;
}
.menu {
  margin: 16px 0px;
  list-style-type: none;
  font-weight: 500;
}
.menulink {
  color: #637381 !important;
}
pre code {
  margin-top: 10px;
}

pre .c {
  color: #998;
  font-style: italic;
}
pre .err {
  color: #a61717;
  background-color: #e3d2d2;
}
pre .k {
  font-weight: bold;
}
pre .o {
  font-weight: bold;
}
pre .cm {
  color: #998;
  font-style: italic;
}
pre .cp {
  color: #999;
  font-weight: bold;
}
pre .c1 {
  color: #998;
  font-style: italic;
}
pre .cs {
  color: #999;
  font-weight: bold;
  font-style: italic;
}
pre .gd {
  color: #000;
  background-color: #fdd;
}
pre .gd .x {
  color: #000;
  background-color: #faa;
}
pre .ge {
  font-style: italic;
}
pre .gr {
  color: #a00;
}
pre .gh {
  color: #999;
}
pre .gi {
  color: #000;
  background-color: #dfd;
}
pre .gi .x {
  color: #000;
  background-color: #afa;
}
pre .go {
  color: #888;
}
pre .gp {
  color: #555;
}
pre .gs {
  font-weight: bold;
}
pre .gu {
  color: #aaa;
}
pre .gt {
  color: #a00;
}
pre .kc {
  font-weight: bold;
}
pre .kd {
  font-weight: bold;
}
pre .kp {
  font-weight: bold;
}
pre .kr {
  font-weight: bold;
}
pre .kt {
  color: #458;
  font-weight: bold;
}
pre .m {
  color: #099;
}
pre .s {
  color: #d14;
}
pre .na {
  color: #008080;
}
pre .nb {
  color: #0086b3;
}
pre .nc {
  color: #458;
  font-weight: bold;
}
pre .no {
  color: #008080;
}
pre .ni {
  color: #800080;
}
pre .ne {
  color: #900;
  font-weight: bold;
}
pre .nf {
  color: #900;
  font-weight: bold;
}
pre .nn {
  color: #555;
}
pre .nt {
  color: #000080;
}
pre .nv {
  color: #008080;
}
pre .ow {
  font-weight: bold;
}
pre .w {
  color: #bbb;
}
pre .mf {
  color: #099;
}
pre .mh {
  color: #099;
}
pre .mi {
  color: #099;
}
pre .mo {
  color: #099;
}
pre .sb {
  color: #d14;
}
pre .sc {
  color: #d14;
}
pre .sd {
  color: #d14;
}
pre .s2 {
  color: #d14;
}
pre .se {
  color: #d14;
}
pre .sh {
  color: #d14;
}
pre .si {
  color: #d14;
}
pre .sx {
  color: #d14;
}
pre .sr {
  color: #009926;
}
pre .s1 {
  color: #d14;
}
pre .ss {
  color: #990073;
}
pre .bp {
  color: #999;
}
pre .vc {
  color: #008080;
}
pre .vg {
  color: #008080;
}
pre .vi {
  color: #008080;
}
pre .il {
  color: #099;
}

@media (min-width: 1200px) {
  .container {
    max-width: 80% !important;
  }
}
</style>
