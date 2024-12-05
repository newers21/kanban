<template>
  <div>
    <h1>Page 1</h1>
    <p>Это тестовая страница 1.</p>
    <button @click="goToPage2">Перейти на Page 2</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToPage2 = () => {
  router.push("/page2");
};
</script>
