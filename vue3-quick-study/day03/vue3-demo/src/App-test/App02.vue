<script setup>
import { reactive, ref } from 'vue';
import Header from './components/header02.vue';

// 响应式数据
const web = reactive({
  name: 'kxc玩玩vue3',
  url: 'kxc.org.com'
});

const user = ref(0);

const emitsGetWeb = (data)=>{
  console.log('emitsGetWeb的参数为：', data);
  web.url = data.url;
}

const emitsUserAdd = (data)=>{
  console.log('emitsUserAdd的参数为：', data);
  user.value += data;
}

</script>

<template>
  <Header @getWeb="emitsGetWeb" @userAdd="emitsUserAdd" />

  {{ web.url }} -- {{ user }}
</template>

<style scoped></style>