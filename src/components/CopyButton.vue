<template>
  <button
    ref="btnRef"
    type="button"
    class="bg-dark-3 hover:bg-dark-4 text-light-1 border-none rounded-md mx-auto absolute top-0 right-0 mt-1"
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
  <div
    ref="popoverRef"
    v-bind:class="{ hidden: !popoverShow, block: popoverShow }"
    class="bg-dark-4 border-0 block text-sm rounded-md"
  >
    <div>
      <div class="text-light-1 p-1">copied!</div>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "copy-button",
  props: { textToCopy: String },
  data() {
    return {
      popoverShow: false,
    };
  },
  methods: {
    async copy() {
      await navigator.clipboard
        .writeText(this.$props.textToCopy)
        .then(() => {
          this.popoverShow
            ? (this.popoverShow = false)
            : (this.popoverShow = true);
          createPopper(this.$refs.btnRef, this.$refs.popoverRef, {
            placement: "top",
          });
        })
        .catch((err) => {
          alert("Error in copying text: ", err);
        });
    },
  },
};
</script>
