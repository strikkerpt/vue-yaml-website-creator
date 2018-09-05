<template>
    <div :class="['col-12', alignClass(align)]">
        <img class="img-fluid" :src="srcFile" :alt="title"/>
    </div>
</template>

<script>
  import alignMixin from '@/mixin/alignMixin'

  export default {
      name: 'Imageblock',
      props: ['src', 'title', 'align'],
      mixins: [alignMixin],
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