<template lang="pug">
div
    userAllUser


</template>

<script setup>
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const toast = useToast();

function test(){
    let instance = toast.success('You did it!');
}
</script>

<style lang="scss" scoped>

</style>