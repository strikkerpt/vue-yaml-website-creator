<template>
    <div :class="alignClass(text.align)">
        <p>{{text.content}}</p>
    </div>
</template>

<script>
    export default {
      name: 'Textblock',
      props: ['text'],
      methods: {
        alignClass (align) {
          if (!align) {
            return
          }
          switch (align) {
            case 'left':
              return 'col-12 text-left'
            case 'right':
              return 'col-12 text-right'
            case 'center':
              return 'col-12 text-center'
          }
        }
      }
    }
</script>