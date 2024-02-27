<script setup>
  const emits = defineEmits(["getWeb", "userAdd"]);
  emits('getWeb', {name: 'kxc玩玩vue3', url: 'www.kxc.org.com'});

  const add = ()=>{
    emits("userAdd", 10);
  }
</script>

<template>
  <h3>Header</h3>

  <button @click="add">添加用户</button>
</template>

<style scoped>

</style>