<template>
  <div id="app">
    <Menu />
    <hr />
    <router-view />
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

<style>

</style>
