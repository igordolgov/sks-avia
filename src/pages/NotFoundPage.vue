<template>
  <v-app app>
    <v-main class="bg-main">
      <v-container class="pa-0">
        <h1>Страница не найдена</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "NotFoundPage",

  data: () => ({}),
};
</script>

<style scoped>
h1 {
  font-size: 8vw;
  width: 100%;
  margin-top: 3vh;
  text-align: center;
  color: hsla(0, 0%, 0%, 0.212);
  text-shadow: 2px 2px 2px white;
}
</style>