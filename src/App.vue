<template>
  <dark-mode />
  <div class="flex flex-col lg:flex-row gap-4 h-screen lg:m-4 mt-8">
    <div class="grow w-full h-full relative">
      <button
        type="button"
        class=" bg-gray-800 hover:bg-gray-700 text-white border-none rounded-md mx-auto absolute top-1 right-0"
        id="copyBtn"
        @click="copy"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </button>
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
import DarkMode from "./components/DarkMode.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    DarkMode,
    Footer,
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
  methods: {
    async copy() {
      await navigator.clipboard.writeText(this.markdown);
      // .then(() => {
      //   alert('Text copied to clipboard');
      // })
      // .catch(err => {
      //   alert('Error in copying text: ', err);
      // });
    },
  },
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
}
</style>
