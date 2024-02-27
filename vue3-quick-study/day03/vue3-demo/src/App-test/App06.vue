<script setup>
import { reactive, toRefs, toRef } from 'vue';

// let { name, url } = reactive({
// 此处解构后，name/url就是非响应式的变量了，可以使用toRefs/toRef变为响应式的
let web = reactive({
  name: 'kxc玩玩vue3',
  url: 'kxc.org.com'
});

// let { name, url } = toRefs(web);
// toRefs接收对象，toRef接收对象和解构的属性
let url = toRef(web, 'url');
console.log('typeof url：', typeof url);
console.log('url：', url);
</script>

<template>
  {{ url }}
</template>

<style scoped></style>