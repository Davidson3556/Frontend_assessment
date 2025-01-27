<script setup lang="ts">
import ThemeToggle from "./components/ThemeToggle.vue";

// Restore the saved theme on mount
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}
</script>

<template>
  <section
    class="bg-[#FFFFFF] text-gray-800 dark:bg-[#12152B] dark:text-[#F1F1F1] transition-colors duration-300"
  >
    <header class="p-4 flex justify-end">
      <!-- Use the ThemeToggle component -->
      <ThemeToggle />
    </header>
    <main class="min-h-screen container mx-auto">
      <div class="py-24">
        <router-view />
      </div>
    </main>
  </section>
</template>
