<script setup>
import { reactive } from 'vue';
import Header from './components/header01.vue'
import Footer from './components/footer01.vue';

// const propsWeb = {
//   user: 10,
//   url: 'www.kxc.org.com'
// }
// 修改为响应式的数据
const propsWeb = reactive({
  user: 10,
  url: 'www.kxc.org.com'
});
const userAdd = () => {
  propsWeb.user++;
  console.log(propsWeb.user);
}
</script>
<template>
  <Header propsName="kxc玩玩vue3" propsUrl="kxc.org.com" />

  kxc.org.com

  <button @click="userAdd">添加用户</button>
  <!-- <Footer v-bind="propsWeb" /> -->
  <!-- v-bind的简写形式（:） -->
  <Footer :="propsWeb" />
</template>


<style scoped></style>