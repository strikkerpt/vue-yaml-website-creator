<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Spectral:400,700');

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .spectral {
    font-family: 'Spectral', serif;
  }
</style>
