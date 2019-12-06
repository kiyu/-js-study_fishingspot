<template>
  <AppBody msg="Welcome to Your Vue.js App" />
</template>

<script>
import AppBody from "./components/AppBody.vue";

export default {
  name: "app",
  components: {
    'AppBody': AppBody
  }
};
</script>

<style lang="scss">
html,body {
  margin: 0;
  font-size: 14px;
}
</style>
