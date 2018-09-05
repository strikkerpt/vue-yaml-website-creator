<template>
    <div :class="['col-12', alignClass(align)]">
        <img :class="['img-fluid', filterClass(filter)]" :src="srcFile" :alt="title"/>
    </div>
</template>

<script>
  import alignMixin from '@/mixin/alignMixin'
  import filterMixin from '@/mixin/filterMixin'

  export default {
      name: 'Imageblock',
      props: ['src', 'title', 'align', 'filter'],
      mixins: [alignMixin, filterMixin],
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