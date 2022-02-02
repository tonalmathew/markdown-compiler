<template>
  <div class="lg:mx-4 dark:bg-dark-1 bg-light-3 rounded-lg">
    <div
      class="flex items-center justify-center mx-auto absolute top-5 right-0 left-1/3"
    ></div>
    <div class="flex justify-end items-center space-x-2 mx-auto relative p-2">
      <h1
        class="dark:text-light-1 ml-2 text-dark-1 mr-auto text-xl dark:hover:text-light-4 hover:text-light-4"
      >
        MARKDOWN COMPILER
      </h1>
      <input
        @click="toggleDarkMode"
        type="checkbox"
        name=""
        id="checkbox"
        class="hidden"
        checked
      />
      <label for="checkbox" class="cursor-pointer">
        <div
          class="w-9 h-5 mr-2 flex items-center dark:bg-light-4 bg-dark-4 rounded-full p2"
        >
          <div class="w-4 h-4 bg-light-1 rounded-full shadow switch-ball"></div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "dark-mode",
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

<style scoped>
#checkbox + label .switch-ball {
  transition: transform 0.3s linear;
}

#checkbox:checked + label .switch-ball {
  background-color: white;
  transform: translateX(19px);
  transition: transform 0.3s linear;
}
</style>
