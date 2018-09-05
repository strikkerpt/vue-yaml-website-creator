<template>
    <div :class="['col-12', alignClass(text.align)]">
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