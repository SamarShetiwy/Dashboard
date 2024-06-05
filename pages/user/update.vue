<template lang="pug">
div(v-if="show")
    div.content
        slot
        <button @click="closePopup">Close</button>
    


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
  
  <style scoped>
 
  </style>
  