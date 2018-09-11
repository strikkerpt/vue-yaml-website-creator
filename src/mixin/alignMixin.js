const alignMixin = {
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

export default alignMixin