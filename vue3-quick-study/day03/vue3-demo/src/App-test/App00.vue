<script setup>
// 引入依赖：reactive
import { reactive } from 'vue';
const web = reactive({
  show: true
});
const toggle = () => {
  web.show = !web.show;
}
</script>
<template>
  <h2>{{ web.show }}</h2>
  <p v-show="web.show">kxc玩玩vue3 kxc.org.com</p>
  <button @click="toggle">切换显示状态</button>
</template>


<style scoped></style>