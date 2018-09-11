<template>
    <ul>
        <li v-for="listItem in list.content">{{listItem}}</li>
    </ul>
</template>

<script>
    export default {
      name: 'List',
      props: ['list']
    }
</script>
