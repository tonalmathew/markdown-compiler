<template>
  <dark-mode />
  <div class="flex flex-col lg:flex-row gap-4 h-screen m-4">
    <div class="grow w-full">
      <textarea
        class="text-gray-900 dark:text-white dark:bg-gray-700 rounded w-full h-4/5 focus:outline-none focus:border-none resize-none "
        v-model="markdown"
        rows="20"
        data-gramm_editor="false"
        
      ></textarea>
    </div>
    <hr class="w-full lg:w-0 lg:h-4/5 m-1"/>
    <div class="grow w-full h-full">
      <div v-html="compileIt" class="text-gray-900 dark:text-white dark:bg-gray-700 p-1 overflow-y-auto rounded h-4/5"></div>
    </div>
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


* {
  font-family: "Rubik", sans-serif;
}
/* textarea {
  resize: none !important;
  width: 100%;
} */
</style>
