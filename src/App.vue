<template>
  <div id="app">
    <Menu />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
  import Menu from './components/Menu'
  export default {
    name: 'app',
    components: {
      Menu
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  @import "./assets/style.scss";
  .main-content {
    padding: 20px;
  }
</style>
