<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-faded">
        <a class="navbar-brand" href="/">
            <img v-if="logo" :src="logoFile"/>
            <div v-if="!logo">{{ brand }}</div>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav float-right">
                <li v-for="(block,key) in menu" class="nav-item">
                    <router-link class="nav-link" v-bind:to="block.url">{{key}}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'TopBar',
  props: ['brand', 'logo', 'menu'],
  computed: {
    logoFile() {
      if(!this.$props.logo) {
        return;
      }

      if (this.$props.logo.includes('http')) {
        return this.$props.logo;
      } else {
        return require('./../assets/' + this.$props.logo);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    margin: 60px 0;
}
.navbar-brand {
    img {
        max-height: 50px;
    }
}
</style>
