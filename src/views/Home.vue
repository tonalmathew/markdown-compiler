<template>
  <dark-mode />
  <div class="flex flex-col lg:flex-row gap-4 h-screen lg:m-4 mt-8">
    <div class="grow w-full h-full relative">
      <copy-button :textToCopy="markdown" />
      <textarea
        id="textId"
        class="text-dark-1 bg-light-3 dark:text-light-1 dark:bg-dark-1 rounded-lg w-full h-full resize-none text-base"
        v-model="markdown"
        data-gramm_editor="false"
      ></textarea>
    </div>
    <hr
      class="w-full lg:w-0 lg:h-full m-1 bg-dark-1 dark:bg-light-1"
    />
    <div class="grow w-full h-full relative">
      <copy-button :textToCopy="printMarkdownAndHtml" />
      <div>
        <button
          @click="showHtmlCode"
          class="bg-dark-3 hover:bg-dark-4 text-light-1 border-none rounded-md mx-auto absolute top-2 right-3 mt-1 mr-10"
        >
          <svg
            v-if="isHtmlShown"
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <svg
            v-else
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </button>
      </div>
      <div
        v-if="isHtmlShown"
        v-text="printMarkdownAndHtml"
        class="text-dark-1 bg-light-3 dark:text-light-1 dark:bg-dark-1 p-1 overflow-y-auto rounded-lg h-full text-base -mr-1"
      ></div>
      <div
        v-else
        v-html="printMarkdownAndHtml"
        class="text-dark-1 bg-light-3 dark:text-light-1 dark:bg-dark-1 p-1 overflow-y-auto rounded-lg h-full text-base -mr-1"
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
      markdown: "# Enter text here!",
      isHtmlShown: false,
      htmlCode: null,
    };
  },
  computed: {
    printMarkdownAndHtml() {
      return marked.parse(this.markdown);
    },
  },
  methods: {
    showHtmlCode() {
      this.isHtmlShown ? (this.isHtmlShown = false) : (this.isHtmlShown = true);
    },
  },
};
</script>
