<template>
  <div id="app">
    <transition name="fade">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .page {
    position: absolute;
    width: 100%;
  }

  .spectral {
    font-family: 'Spectral', serif;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
