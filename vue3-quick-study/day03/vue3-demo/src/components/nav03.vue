<script setup>
  import { inject } from 'vue';

  const web = inject("provideWeb");
  console.log('provideWeb：', web);

  const funcUserAdd = inject("provideFuncUserAdd");
  console.log('funcUserAdd事件为：', funcUserAdd);
</script>

<template>
  <h3>nav.vue-Bottom组件</h3>

  <button @click="funcUserAdd">添加用户</button>
</template>

<style scoped>

</style>