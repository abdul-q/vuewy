﻿//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accesibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
<template>
  <div>
    <div class="skipLink">
      <a href="#mainContent">Skip to Main Content</a>
    </div>
    <b-nav class="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
      <a class="navbar-brand" href="/">graphApp</a>
      <div class="navbar-nav">
        <b-nav-item class="nav-item nav-link active" to="/">Blank</b-nav-item>
        <b-nav-item class="nav-item nav-link active" to="/Grid">Grid</b-nav-item>
        <b-nav-item class="nav-item nav-link active" to="/Grid2">Grid2</b-nav-item>
        <b-nav-item class="nav-item nav-link active" to="/Grid3">Grid3</b-nav-item>
        <b-nav-item class="nav-item nav-link active" to="/Grid4">Grid4</b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "TheNavBar"
};
</script>

<style scoped>
.skipLink a {
  position: absolute;
  left: -100px;
  top: -100px;
}

.skipLink a:focus {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 10px;
  color: #ffffff;
  background: #000000;
}
</style>
