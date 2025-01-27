<template>
  <XyzTransitionGroup xyz="fade small">
    <div xyz="fade big" v-if="show">
      <h1
        class="inherit left text-[#3C3B6E] dark:text-[#ADACFF] text-center text-2xl font-bold"
      >
        What kind of Account suit you best?
      </h1>
    </div>
  </XyzTransitionGroup>

  <XyzTransitionGroup xyz="fade small stagger">
    <router-link
      to="/Individualaccount"
      v-if="show"
      class="flex mt-5 mx-5 gap-2 bg-[#F4F4F4] dark:bg-[#3C3B6E59] p-4 md:w-[32rem] min-h-[10rem] items-center rounded-xl justify-center transform transition hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 focus:outline focus:outline-2 focus:outline-blue-500"
    >
      <img
        src="../assets/Profile.svg"
        class="xyz-in w-16 h-16 block dark:hidden"
        alt="profile light"
      />
      <img
        src="../assets/Profile_dark.svg"
        class="xyz-in w-16 h-16 hidden dark:block"
        alt="profile dark"
      />
      <div class="flex flex-col">
        <p class="text-lg py-1 text-[#1F201D] dark:text-[#F1F1F1] font-bold">
          Individual Account
        </p>
        <p class="text-sm font-normal py-1">
          Perfect for personal use. Send<br />
          money to family and friends with <br />ease and zero fees.
        </p>
      </div>
    </router-link>

    <router-link to="/Businessaccount">
      <main
        v-if="show"
        class="xyz-in flex mt-5 mx-5 gap-6 bg-[#F4F4F4] dark:bg-[#3C3B6E59] p-4 md:min-w-[32rem] min-h-[10rem] items-center rounded-xl justify-center hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 focus:outline focus:outline-2 focus:outline-blue-500"
      >
        <img
          src="../assets/Business.svg"
          class="w-16 h-16 block dark:hidden"
          alt="business light"
        />
        <img
          src="../assets/Business_dark.svg"
          class="w-16 h-16 hidden dark:block"
          alt="business dark"
        />
        <div class="flex flex-col">
          <p class="text-lg py-1 text-[#1F201D] dark:text-[#F1F1F1] font-bold">
            Business Account
          </p>
          <p class="text-sm font-normal py-1">
            Ideal for business transactions.<br />
            Manage your finances efficiently <br />
            with no hidden costs.
          </p>
        </div>
      </main>
    </router-link>
  </XyzTransitionGroup>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
let show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>
