<template>
  <XyzTransitionGroup
    class="head flex justify-center items-center item-group"
    xyz="fade small"
  >
    <div>
      <h1 class="text-[#3C3B6E] text-center text-2xl font-bold">Create your Individual
account</h1>
<p>Let's get started on setting up your personal SwapMoney account.
</p>
       </div>
  </XyzTransitionGroup>

  

  <XyzTransitionGroup xyz="fade small stagger">
    <main
      v-if="show"
      class="flex mt-5 mx-5 gap-2 bg-[#F4F4F4] p-4 md:w-[32rem] min-h-[10rem] items-center rounded-xl justify-center "
    >
      
        <img src="../assets/Profile.svg" class="xyz-in w-16 h-16" alt="profile" />
        <div class="flex flex-col">
          <p class="text-lg py-1 text-[#1F201D] font-bold">Individual Account</p>
          <p class="text-sm font-normal py-1">Perfect for personal use. Send<br/> money to family and friends with <br/>ease and zero fees.</p>
        </div>
     
    </main>


    <main
      v-if="show"
      class="flex mt-5 mx-5 gap-6 bg-[#F4F4F4] p-4 md:min-w-[32rem] min-h-[10rem] items-center rounded-xl justify-center hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 focus:outline focus:outline-2 focus:outline-blue-500"
    >
      
        <img src="../assets/Business.svg" class="xyz-in w-16 h-16" alt="profile" />
        <div class="flex flex-col">
          <p class="text-lg py-1 text-[#1F201D] font-bold">Business Account</p>
          <p class="text-sm font-normal py-1">Ideal for business transactions.<br/> Manage your finances efficiently <br/> with no hidden costs.</p>
        </div>
     
    </main>
  </XyzTransitionGroup>
  <li>
          <router-link to="/store" class="px-3 py-2 rounded-lg">
            Store
          </router-link>
        </li>
  
  
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
let show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>