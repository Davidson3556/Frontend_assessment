<template>
  <button
    @click="toggleTheme"
    class="flex items-center justify-center w-8 h-8 bg-[#F4F4F4] dark:bg-[#F1F1F1] rounded-full shadow-md hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
  >
    <svg
      v-if="isDark"
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 text-yellow-400"
      viewBox="0 0 24 24"
      fill="#ADACFF"
    >
      <path
        d="M6.76 4.84l-1.8-1.8-1.42 1.42 1.8 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v-2h-3v2h3zm-3.76 7.66l1.8 1.8 1.42-1.42-1.8-1.8-1.42 1.42zM12 4a8 8 0 0 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 0 1 0-12 6 6 0 0 1 0 12z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6 text-gray-200"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M9.37 4.23a1 1 0 0 1 1.21.39 7 7 0 1 0 9.8 9.8 1 1 0 0 1 1.6 1.11 9 9 0 1 1-12.6-12.6 1 1 0 0 1 .39 1.3z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ThemeToggle",
  setup() {
    const isDark = ref(false);

    const toggleTheme = () => {
      const html = document.documentElement;
      isDark.value = !isDark.value;
      html.classList.toggle("dark", isDark.value);
      localStorage.setItem("theme", isDark.value ? "dark" : "light");
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        isDark.value = true;
      }
    });

    return { isDark, toggleTheme };
  },
});
</script>
