<template>
  <div>
    <h1>Page 2</h1>
    <p>Это тестовая страница 2.</p>

    <button @click="goToPage1">Перейти на Page 1</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToPage1 = () => {
  router.push("/page1");
};
</script>
