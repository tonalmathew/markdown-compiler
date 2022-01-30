<template>
    <h1>hai</h1>
<div class="">
  <div>
    <textarea v-model="markdown" rows="20"></textarea>
  </div>
  <div><div v-html="compileIt"></div></div>
</div>
  
  
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
textarea {
  resize: none !important;
  width: 100%;
}
</style>
