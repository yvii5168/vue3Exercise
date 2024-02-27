<script setup>
  const props = defineProps({
    user: Number,
    url: {
      type: String,
      required: true,
      default: 'kxccode.org.com'
    }
  });
  console.log('propsWeb：', props);
</script>

<template>
  <h3>Footer</h3> {{ props.user }}
</template>

<style scoped>

</style>