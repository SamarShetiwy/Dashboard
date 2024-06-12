<template lang="pug">
div 
button(@click="useToastSuccess()") click
</template>

<script setup>
import { useToast } from 'vue-toast-notification';
const toast = useToast();
function useToastSuccess() {
toast.success({
    title: 'Success',
    message: 'Your action was successful!',
    duration: 5000
});

}

</script>

<style lang="scss" scoped>

</style>