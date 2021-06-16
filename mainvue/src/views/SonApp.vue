<template>
  <div id="appContainer">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sonapp/">SonApp</router-link> |
    </div>
    子应用容器
  </div>
</template>

<script>
import { start } from 'qiankun';

export default {
  name: '',
  data() {
    return {};
  },
  mounted() {
    if (!window.qianKunStarted) {
      window.qianKunStarted = true;
      start();
    }
  },
};
</script>

<style lang='less' scoped>
#appContainer {
  height: 500px;
}
</style>
