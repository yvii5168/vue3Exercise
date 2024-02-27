<script setup>
// 导入子组件
import Header from './components/header04.vue';
import Footer from './components/footer04.vue';
</script>

<template>
  <h3>App04.vue</h3>

  <!-- 匿名插槽 -->
  <Header>
    <a href="kxc.org.com">kxc玩玩vue3</a>
  </Header>

  <!-- 具名插槽 -->
  <Footer>
    <!-- <template v-slot:url> -->
    <!-- 具名插槽的简写形式v-slot:(#) -->
    <!-- 可以接收插槽传送的props，且支持解构 -->
    <!-- <template #url="data"> -->
      <template #url="{title, user}">
        {{ title }}
        {{ user }}
        <br>
      <a href="www.kxc.org.com">网址</a>
    </template>
  </Footer>
</template>

<style scoped></style>