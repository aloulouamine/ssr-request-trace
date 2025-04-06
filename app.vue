<template>
  <div>
    <pre>{{ data }}<pre>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/test');
</script>
