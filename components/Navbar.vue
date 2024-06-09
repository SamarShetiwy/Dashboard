<template lang="pug">    
div(class="flex justify-between sm:gap-4 pt-10 gap-2")
    div.flex.items-center.gap-5.pt-2(class="")
        NuxtLink(to="/")
            input(type="text" placeholder="Search" class=" border-2 border-white rounded-full py-1 md:px-14 sm:px-3 px-2")
    div(class="flex items-center md:gap-3  mr-5")
        icon(name="meteocons:clear-day-fill" @click="toggleColorMode()" size="30px")
        icon(name="mdi-light:account" size="60px"  class="cursor-pointer"  @click="logout")
</template>

<script setup>

import { useAuthStore } from '../stores/auth';

const router =useRouter();
const colorMode = useColorMode();
const toggleColorMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
    };

// const logout = () => {
//   localStorage.removeItem('token');
//   router.push({ name: 'login' });
// };

const authStore = useAuthStore();

const logout = async () => {
    await authStore.logout();
    router.push({ name: 'login' });

}

    
</script>

<style lang="scss" scoped>
Icon {
    size: '24px', 
}
    
</style>