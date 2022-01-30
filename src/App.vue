<template>
  <div
    class="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3"
  ></div>
  <div class="flex justify-end items-center space-x-2 mx-auto relative">
    <input
      @click="toggleDarkMode"
      type="checkbox"
      name=""
      id="checkbox"
      class="hidden"
      checked
    />
    <label for="checkbox" class="cursor-pointer">
      <div class="w-9 h-5 flex items-center dark:bg-gray-400 bg-gray-700 rounded-full p2">
        <div class="w-4 h-4 bg-white rounded-full shadow switch-ball"></div>
      </div>
    </label>
  </div>

  <div class="bg-white dark:bg-gray-800">
    <h1 class="text-gray-900 dark:text-white">Dark mode</h1>
    <p class="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
  </div>
  <!-- <div class="grid grid-cols-2 grid-flow-col gap-4">
  <div>
    <textarea v-model="markdown" rows="20"></textarea>
  </div>
  <div><div v-html="compileIt"></div></div>
</div> -->
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
  methods: {
    toggleDarkMode() {
      const checkbox = document.querySelector("#checkbox");
      const html = document.querySelector("html");
      checkbox.checked
        ? html.classList.add("dark")
        : html.classList.remove("dark");
    },
  },
};
</script>

<style>
textarea {
  resize: none !important;
  width: 100%;
}

#checkbox + label .switch-ball {
  transition: transform 0.3s linear;
}

#checkbox:checked + label .switch-ball {
  background-color: white;
  transform: translateX(19px);
  transition: transform 0.3s linear;
}
</style>
