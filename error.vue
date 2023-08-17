<template>
  <NuxtLayout>
    <div v-if="error && error.statusCode === '404'" class="prose">
      <h1>404</h1>
      <p>Page doesn't exist</p>
      <p>
        <strong>{{ error.message }}</strong>
      </p>
      <p>
        Go to
        <a class="hover:cursor-pointer" @click="handleError">first lesson</a>
      </p>
    </div>
    <div v-else class="prose">
      <h1>Dang</h1>
      <p>It looks like something went wrong.</p>
      <p>Sorry about that.</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect:
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
  });
};
</script>
