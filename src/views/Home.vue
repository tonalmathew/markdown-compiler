<template>
  <dark-mode />
  <div class="flex flex-col lg:flex-row gap-4 h-screen lg:m-4 mt-8">
    <div class="grow w-full h-full relative">
      <copy-button :markdown="markdown" />
      <textarea
        id="textId"
        class="text-dark-1 bg-light-3 dark:text-light-1 dark:bg-dark-1 rounded-lg w-full h-full focus:outline-none focus:border-none resize-none text-base"
        v-model="markdown"
        data-gramm_editor="false"
      ></textarea>
    </div>
    <hr
      class="w-full lg:w-0 lg:h-full m-1 border-dark-1 bg-dark-1 dark:border-light-1 dark:bg-light-1"
    />
    <div class="grow w-full h-full">
      <div
        v-html="compileIt"
        class="text-dark-1 bg-light-3 dark:text-light-1 dark:bg-dark-1 p-1 overflow-y-auto rounded-lg h-full text-base"
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
