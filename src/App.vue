<template>
  <div id="app">
    <div class="app-container">
      <Menu />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './components/common/Menu'
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

  #app {

    .app-container {
      min-height: 100vh;
      display: flex;

      .main-content {
        padding: 30px;
        flex: 3;
      }
    }
  }
</style>
