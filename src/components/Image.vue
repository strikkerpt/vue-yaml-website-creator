<template>
    <div class="col-12">
        <img class="img-fluid" :src="getSrc(src)" :alt="title"/>
    </div>
</template>

<script>
    export default {
      name: 'Imageblock',
      props: ['src', 'title'],
      methods: {
        getSrc(src) {
          return src;
        }
      }
    }
</script>