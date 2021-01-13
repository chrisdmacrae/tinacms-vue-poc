<template>
  <div id="app">
    <p>The CMS is {{ cms.enabled ? "enabled" : "disabled" }}</p>
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <HelloWorld v-bind:title="page.title" v-bind:description="page.description" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  props: ['data'],
  data: function() {
    console.log(this);
    
    return {
      cms: this.$parent.cms,
      page: this.data
    }
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
