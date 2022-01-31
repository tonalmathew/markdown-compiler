<template>
  <dark-mode />
  <div class="flex flex-col lg:flex-row gap-4 h-screen lg:m-4 mt-8">
    <div class="grow w-full h-full relative">
      <copy-button :markdown="markdown" />
      <textarea
        id="textId"
        class="text-gray-900 bg-gray-300 dark:text-white dark:bg-gray-900 rounded-lg w-full h-full focus:outline-none focus:border-none resize-none text-base"
        v-model="markdown"
        data-gramm_editor="false"
      ></textarea>
    </div>
    <hr
      class="w-full lg:w-0 lg:h-full m-1 border-gray-900 bg-gray-900 dark:border-white dark:bg-white"
    />
    <div class="grow w-full h-full">
      <div
        v-html="compileIt"
        class="text-gray-900 bg-gray-300 dark:text-white dark:bg-gray-900 p-1 overflow-y-auto rounded-lg h-full text-base"
      ></div>
    </div>
  </div>

  <Footer />
</template>

<script>
import { marked } from "marked";
import DarkMode from "../components/DarkMode.vue";
import Footer from "../components/Footer.vue";
import CopyButton from "../components/CopyButton.vue";

export default {
  name: "Home",
  components: {
    DarkMode,
    Footer,
    CopyButton,
  },
  data() {
    return {
      markdown: "# Hello World!",
    };
  },
  computed: {
    compileIt() {
      return marked(this.markdown);
    },
  },
};
</script>
