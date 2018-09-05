<template>
    <div :class="['col-12', alignClass(highlight.align)]">
        <h1 v-if="highlight.weight == 1">{{highlight.content}}</h1>
        <h2 v-if="highlight.weight == 2">{{highlight.content}}</h2>
        <h3 v-if="highlight.weight == 3">{{highlight.content}}</h3>
        <h4 v-if="highlight.weight == 4">{{highlight.content}}</h4>
        <h5 v-if="highlight.weight == 5">{{highlight.content}}</h5>
        <h6 v-if="highlight.weight == 6">{{highlight.content}}</h6>
    </div>
</template>

<script>
    export default {
      name: 'HighlightBlock',
      props: ['highlight'],
      methods: {
        alignClass (align) {
          if (!align) {
            return
          }
          switch (align) {
            case 'left':
              return 'text-left'
            case 'right':
              return 'text-right'
            case 'center':
              return 'text-center'
          }
        }
      }
    }
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;
    }
</style>