<template>
  <XyzTransitionGroup xyz="fade small stagger">
    <div xyz="fade big" v-if="show" class="text-center px-4">
      <h1 class="text-[#3C3B6E] dark:text-[#ADACFF] text-2xl font-bold sm:text-3xl">
        Create your Business Account
      </h1>
      <p class="text-base font-normal text-[#1F201D] dark:text-[#F1F1F1] mt-2 sm:text-lg">
        Let's get started on setting up your Business SwapMoney account.
      </p>
    </div>
  </XyzTransitionGroup>

  <!-- Phone Input -->
  <div
    class="flex items-center space-x-3 w-full max-w-md bg-gray-100 rounded-2xl px-4 py-3 mt-6 mx-auto"
  >
    <Vue3PhoneInput
      v-model="phoneNumber"
      defaultCountry="gb"
      placeholder="Enter your phone number"
      class="flex-1 text-[#1F201D] dark:text-[#F1F1F1] !w-full !max-w-md !rounded-2xl !bg-[#F4F4F4] dark:!bg-[#3C3B6E59] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>

  <!-- Email Input -->
  <div class="mt-4 w-full max-w-md mx-auto px-4">
    <input
      v-model="email"
      type="email"
      placeholder="Email Address"
      @blur="validateEmail"
      class="w-full bg-[#F4F4F4] dark:bg-[#3C3B6E59] text-[#1F201D] dark:text-[#F1F1F1] rounded-2xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>
  <p v-if="emailError" class="text-red-500 text-sm mt-1 text-center">
    {{ emailError }}
  </p>

  <!-- First Name Input -->
  <div class="mt-4 w-full max-w-md mx-auto px-4">
    <input
      v-model="firstName"
      type="text"
      placeholder="First Name"
      @blur="validateFirstName"
      class="w-full bg-[#F4F4F4] dark:bg-[#3C3B6E59] text-[#1F201D] dark:text-[#F1F1F1] rounded-2xl px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
  </div>
  <p v-if="firstNameError" class="text-red-500 text-sm mt-1 text-center">
    {{ firstNameError }}
  </p>

  <footer class="w-full mt-12 py-4 px-4">
    <div class="max-w-md mx-auto">
      <router-link to="/pass">
        <Button
          :disabled="!isFormValid"
          class="bg-[#3C3B6E] hover:bg-[#2F2E5A] rounded-md text-[#FFFFFF] h-14 w-full disabled:bg-gray-400"
        >
          Next
        </Button>
      </router-link>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import Vue3PhoneInput from "vue3-phone-input";

const phoneNumber = ref("");
const email = ref("");
const firstName = ref("");

const emailError = ref("");
const firstNameError = ref("");
const isFormValid = computed(() => {
  return phoneNumber.value && email.value && firstName.value;
});

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = emailRegex.test(email.value)
    ? ""
    : "Please enter a valid email address.";
};

const validateFirstName = () => {
  firstNameError.value = firstName.value ? "" : "First name cannot be empty.";
};

let show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>
