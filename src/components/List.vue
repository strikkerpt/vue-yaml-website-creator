<template>
    <ul>
        <li v-for="listItem in list.content">{{listItem.content}}</li>
    </ul>
</template>

<script>
    export default {
      name: 'List',
      props: ['list']
    }
</script>