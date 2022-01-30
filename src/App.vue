<template>
  <dark-mode />
  <div class="grid grid-cols-2 grid-flow-col gap-4">
    <div>
      <textarea
        class="text-gray-900 dark:text-white dark:bg-gray-700"
        v-model="markdown"
        rows="20"
      ></textarea>
    </div>
    <div>
      <div v-html="compileIt" class="text-gray-900 dark:text-white"></div>
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
@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
textarea {
  resize: none !important;
  width: 100%;
}
</style>
