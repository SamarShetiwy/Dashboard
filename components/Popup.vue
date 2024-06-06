<template lang="pug">
div(v-if="show" class="popup" @click.self="closePopup" class= "flex justify-center items-center")
  div.popup-content(class=" items-center h-screen")
    .header
      .flex.justify-between.align-center
        div
        Icon(name="ri:close-circle-line" @click="closePopup" size="30px"  color="red" class=" icon mt-2 ")
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
    margin-top:10rem ;
    background: transparent;
    z-index: 1000;
    border-radius: 10px;

  
  }

  }




</style>