<script setup>
  import { reactive, ref, provide } from 'vue';
  // 导入子组件
  import Header from './components/header03.vue';

  const web = {
    name: 'kxc玩玩vue3',
    url: 'www.kxc.org.com'
  }
  // // 上方的定义数据为非响应式数据
  // const web = reactive({
  //   name: 'kxc玩玩vue3',
  //   url: 'www.kxc.org.com'
  // });

  provide("provideWeb", web);

  const user = ref(10)
  provide("provideUser", user);

  const userAdd = ()=>{
    user.value++;
  }
  provide("provideFuncUserAdd", userAdd);
</script>

<template>
  <h3>App.vue-top组件</h3>
  user: {{ user }}

  <!-- 子组件 -->
  <Header />
</template>

<style scoped>

</style>