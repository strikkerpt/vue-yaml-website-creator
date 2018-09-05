const filterMixin = {
  methods: {
    filterClass (filter) {
      if (!filter) {
        return
      }
      switch (filter) {
        case 'grayscale':
          return 'grayscale'
        case 'blur':
          return 'blur'
      }
    }
  }
}

export default filterMixin