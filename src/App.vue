<template>
  <!-- <div>{{ markdown }}</div> -->
  <textarea v-model="markdown" rows="30"></textarea>
  <div v-html="compileIt"></div>
</template>

<script>
import { marked } from "marked";

export default {
  name: "App",
  data() {
    return {
      markdown: "# Hello World!",
    };
  },
  computed: {
    compileIt() {
      console.log(marked(this.markdown));
      return marked(this.markdown);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

textarea{
resize: none;
width: 50%;
}
</style>
