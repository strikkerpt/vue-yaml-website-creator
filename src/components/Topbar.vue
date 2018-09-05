<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-faded">
        <a class="navbar-brand" href="/">{{ brand }}</a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav float-right">
                <li v-for="(block,key) in menu" class="nav-item">
                    <a class="nav-link" :href="block.url">{{key}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
      name: 'TopBar',
      props: ['brand','logo','menu']
    }
</script>

<style scoped>
    .navbar {
        margin: 60px 0;
    }
</style>