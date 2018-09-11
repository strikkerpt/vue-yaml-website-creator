<template>
    <div :class="['col-12', alignClass(text.align)]">
        <p v-html="text.content"></p>
    </div>
</template>

<script>
  import alignMixin from '@/mixin/alignMixin'

  export default {
    name: 'Textblock',
    props: ['text'],
    mixins: [alignMixin]
  }
</script>