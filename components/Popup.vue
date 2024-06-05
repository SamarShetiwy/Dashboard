<template lang="pug">
div(v-if="show" class="popup" )
    div.popup-content(class="flex items-center position-relative")
        slot
        Icon(name="ri:close-circle-line"  size="30px"  color="red" class="position-absolute closePopup top-0")

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .popup-content {
    width: 50%; 
    max-width: 600px;    
    background: white;
    border-radius: 8px;
  }

  }



</style>