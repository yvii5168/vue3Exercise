<script setup>
import { inject } from 'vue';
  // 导入子组件
  import Nav from './nav03.vue';

  const user = inject("provideUser");
  console.log('provideUser：', user);
</script>

<template>
  <h3>header.vue-Middle组件</h3>

  <!-- 子组件 -->
  <Nav />
</template>

<style scoped>

</style>