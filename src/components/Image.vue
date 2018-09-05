<template>
    <div class="col-12">
        <img class="img-fluid" :src="srcFile" :alt="title"/>
    </div>
</template>

<script>
    export default {
      name: 'Imageblock',
      props: ['src', 'title'],
      computed: {
        srcFile() {
          if (this.$props.src.includes('http')) {
            return this.$props.src;
          } else {
            return require('./../assets/' + this.$props.src);
          }
        }
      }
    }
</script>