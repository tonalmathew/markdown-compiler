<template>
  <dark-mode />
  <!-- <div class="bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">Dark mode</h1>
    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
  </div> -->
  <div class="grid grid-cols-2 grid-flow-col gap-4">
  <div>
    <textarea class="text-gray-900 dark:text-white dark:bg-gray-700" v-model="markdown" rows="20"></textarea>
  </div>
  <div><div v-html="compileIt" class="text-gray-900 dark:text-white"></div></div>
</div>
</template>

<script>
import { marked } from "marked";
import DarkMode from "./components/DarkMode.vue";

export default {
  name: "App",
  components: {
    DarkMode,
  },
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
