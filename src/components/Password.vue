<template>
  <XyzTransitionGroup
    class="head flex justify-center items-center item-group"
    xyz="fade small"
  >
    <div class="text-center px-4" xyz="fade big" v-if="show">
      <h1 class="text-[#3C3B6E] dark:text-[#ADACFF] text-2xl font-bold sm:text-3xl">
        Enter your Preferred Password
      </h1>
      <p class="text-base font-normal text-[#1F201D] dark:text-[#F1F1F1] mt-2 sm:text-lg">
        Create a strong password to keep your SwapMoney account safe.
      </p>
    </div>
  </XyzTransitionGroup>

  <!-- Password Field -->
  <div class="relative mt-8 w-full max-w-md px-2">
    <input
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      placeholder="Password"
      class="w-full bg-[#F4F4F4] dark:bg-[#3C3B6E59] text-[#1F201D] dark:text-[#F1F1F1] rounded-2xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
    <span
      class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      @click="togglePasswordVisibility('password')"
    >
      <svg
        v-if="showPassword"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-4-8-4s1.791-2.682 4.512-4.243m7.004-.556C17.617 12.4 20 15 20 15s-3.582 4-8 4a9.96 9.96 0 01-3.872-.8m7.743-5.368a2.25 2.25 0 11-3.181-3.181"
        />
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.5 1.658-1.55 3.163-3.042 4.361A10.05 10.05 0 0112 19c-4.418 0-8-4-8-4-.702-.765-1.261-1.65-1.542-2.634z"
        />
      </svg>
    </span>
  </div>

  <!-- Confirm Password Field -->
  <div class="relative mt-4 w-full max-w-md px-2">
    <input
      v-model="confirmPassword"
      :type="showConfirmPassword ? 'text' : 'password'"
      placeholder="Confirm Password"
      class="w-full bg-[#F4F4F4] dark:bg-[#3C3B6E59] text-[#1F201D] dark:text-[#F1F1F1] rounded-2xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
    <span
      class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      @click="togglePasswordVisibility('confirmPassword')"
    >
      <svg
        v-if="showConfirmPassword"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-4-8-4s1.791-2.682 4.512-4.243m7.004-.556C17.617 12.4 20 15 20 15s-3.582 4-8 4a9.96 9.96 0 01-3.872-.8m7.743-5.368a2.25 2.25 0 11-3.181-3.181"
        />
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.5 1.658-1.55 3.163-3.042 4.361A10.05 10.05 0 0112 19c-4.418 0-8-4-8-4-.702-.765-1.261-1.65-1.542-2.634z"
        />
      </svg>
    </span>
  </div>

  <footer class="w-full mt-12 py-4 px-4">
    <div class="max-w-md mx-auto">
      <router-link to="/pass">
        <Button
          class="bg-[#3C3B6E] rounded-md text-[#FFFFFF] h-14 w-full"
          @click="handleSubmit"
          :disabled="loading"
        >
          <span v-if="loading" class="flex items-center justify-center">
            <svg
              class="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            Loading...
          </span>
          <span v-else>Next</span>
        </Button>
      </router-link>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

let show = ref(false);
onMounted(() => {
  show.value = true;
});

// Reactive state variables
const password = ref<string>("");
const confirmPassword = ref<string>("");
const showPassword = ref<boolean>(false);
const showConfirmPassword = ref<boolean>(false);
const loading = ref<boolean>(false);

// Vue Router instance
const router = useRouter();

const togglePasswordVisibility = (
  field: "password" | "confirmPassword",
): void => {
  if (field === "password") {
    showPassword.value = !showPassword.value;
  } else {
    showConfirmPassword.value = !showConfirmPassword.value;
  }
};

const handleSubmit = () => {
  loading.value = true;

  // Simulating asynchronous operation
  setTimeout(() => {
    loading.value = false;

    if (password.value !== confirmPassword.value) {
      alert("Error: Passwords do not match. Please try again.");
    } else {
      alert("Account created successfully!");

      // Redirect to the home page
      router.push("/");
    }
  }, 2000);
};
</script>
