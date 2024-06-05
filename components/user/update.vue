<template lang="pug">
div.container.p-4.pt-8.ml-7.shadow-xl.mt-7.bg-gray-200.rounded-xl
            pre {{ errors }}
            form(@submit.prevent="onSubmit")
                div.mb-4
                    label(for="firstName").text-gray-700.block.p-2 FirstName
                    input(id="firstName"  v-model="updateUser.firstName" type="text" class="border mt-1 block w-full p-1 rounded-full")
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.firstName") {{ errors.firstName }}
                div.mb-4
                    label(for="lastName").text-gray-700.block.p-2 LastName
                    input(id="lastName" v-model="updateUser.lastName"   type="text" class=" border mt-1 block w-full p-1 rounded-full")
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.lastName") {{ errors.lastName }} 
                div.mb-4
                    label(for="email").text-gray-700.block.p-2 Email
                    input(id="email" v-model="updateUser.email"   type="text" class="border mt-1 block w-full p-1 rounded-full")
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.email") {{ errors.email }}
                div.mb-4
                    label(for="birthDate").text-gray-700.block.p-2 BirthDate
                    input(id="birthDate" v-model="updateUser.birthDate" type="text" class=" border mt-1 block w-full p-1 rounded-full")
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.birthDate") {{ errors.birthDate }}
                div.mb-4
                    label(for="nationalityId").text-gray-700.block.p-2 Nationality
                    select(id="nationalityId"  v-model="updateUser.nationalityId"  class="border mt-1 block w-full p-1 rounded-full")
                        option(v-for="(country, index) in countries" :key="index" :value="country.id") {{ country?.enName }}
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.nationalityId") {{ errors.nationalityId }}
                div.mb-4
                    label(for="gender").text-gray-700.block.p-2 Gender
                    select(id="gender" v-model="updateUser.gender"  class=" border mt-1 block w-full p-1 rounded-full")
                        option(value="MALE") Male
                        option(value="FEMALE") Female
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.gender") {{ errors.gender }}
        
                div.mb-4
                    label(for="phone").text-gray-700.block.p-2 Phone
                    input(id="phone"  v-model="updateUser.phone"  type="text" class="border mt-1 block w-full p-1 rounded-full")
                    //- div.text-red-500.text-sm.mt-1(v-if="errors.phone") {{ errors.phone }}                
                div.mb-4.flex.gap-5.mt-10.justify-end.pr-5
                    button(type="submit" class="px-5 py-2 text-semibold bg-white rounded-full") Add
                    button(type="button" @click="cancel" class="px-4 py-2 text-semibold bg-white rounded-full") Cancel 
</template>
    
<script setup>
    const props = defineProps({
        data: {
            type: Object,
        }
    })

    console.log('>>>>>>>>>>>>>>.', props.data)
  const updateUser = reactive({
    firstName:  props.data?.firstName,
    lastName: props.data?.lastName,
    email: props.data?.email,
    birthDate: props.data?.birthDate,
    nationalityId: props.data?.nationalityId,
    gender: props.data?.gender,
    phone: props.data?.phone,
});
</script>