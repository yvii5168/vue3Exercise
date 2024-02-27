<script setup>
// vue3的生命周期函数
import {
  onMounted, onUpdated, ref, onBeforeMount, onBeforeUpdate,
  onUnmounted, onBeforeUnmount, onErrorCaptured
} from 'vue';

// 挂载阶段
onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});
// 更新阶段
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpdated');
});

const user = ref(0);
console.log("user：", user.value);
// 卸载阶段
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});
// 错误处理
onErrorCaptured(() => {
  console.log('onErrorCaptured');
});

</script>

<template>
  user：{{ user }}

  <button @click="user++">添加用户</button>
</template>

<style scoped></style>