<template lang="pug">
div(v-if="show" class="popup" @click="closePopup"  )
  div.popup-content(class=" items-center w-[50%] mt-80")
    .header
      .flex.justify-between.align-center.m-5
        div
        Icon(name="ri:close-circle-line" @click="closePopup" size="30px"  color="red" class=" icon")
        
    
    slot


</template>

<script setup>

  const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:show'])

const closePopup = () => {
  emit('update:show', false)
}
</script>


<style lang="scss" scoped>

.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  
    &-content {
    align-items: center;
    width: 50%;
    margin: auto;
    background: black;
    z-index: 1000;
  
  }

  }




</style>