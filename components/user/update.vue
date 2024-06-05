<template lang="pug">
div.container.p-4.pt-8.ml-7.shadow-xl.mt-7.bg-gray-200.rounded-xl
        form(@submit.prevent="onSubmit")
            div.mb-4
                label(for="firstName").text-gray-700.block.p-2 FirstName
                input(id="firstName"  v-model="firstName"  v-bind="firstNameProps" type="text" class="border mt-1 block w-full p-1 rounded-full")
                div.text-red-500.text-sm.mt-1(v-if="errors.firstName") {{ errors.firstName }}
            div.mb-4
                label(for="lastName").text-gray-700.block.p-2 LastName
                input(id="lastName" v-model="lastName"  v-bind="lastName" type="text" class=" border mt-1 block w-full p-1 rounded-full")
                div.text-red-500.text-sm.mt-1(v-if="errors.lastName") {{ errors.lastName }} 
            div.mb-4
                label(for="email").text-gray-700.block.p-2 Email
                input(id="email" v-model="email"   v-bind="emailProps" type="text" class="border mt-1 block w-full p-1 rounded-full")
                div.text-red-500.text-sm.mt-1(v-if="errors.email") {{ errors.email }}
            div.mb-4
                label(for="birthDate").text-gray-700.block.p-2 BirthDate
                input(id="birthDate" v-model="birthDate" v-bind="birthDateProps" type="text" class=" border mt-1 block w-full p-1 rounded-full")
                div.text-red-500.text-sm.mt-1(v-if="errors.birthDate") {{ errors.birthDate }}
            div.mb-4
                label(for="nationalityId").text-gray-700.block.p-2 Nationality
                select(id="nationalityId"  v-model="nationalityId" v-bind="nationalityIdProps" class="border mt-1 block w-full p-1 rounded-full")
                    option(v-for="(country, index) in countries" :key="index" :value="country.id") {{ country.enName }}
                div.text-red-500.text-sm.mt-1(v-if="errors.nationalityId") {{ errors.nationalityId }}
            div.mb-4
                label(for="gender").text-gray-700.block.p-2 Gender
                select(id="gender" v-model="gender"  v-bind="genderProps" class=" border mt-1 block w-full p-1 rounded-full")
                    option(value="MALE") Male
                    option(value="FEMALE") Female
                div.text-red-500.text-sm.mt-1(v-if="errors.gender") {{ errors.gender }}
    
            div.mb-4
                label(for="phone").text-gray-700.block.p-2 Phone
                input(id="phone"  v-model="phone"  v-bind="phoneProps" type="text" class="border mt-1 block w-full p-1 rounded-full")
                div.text-red-500.text-sm.mt-1(v-if="errors.phone") {{ errors.phone }}                
            div.mb-4.flex.gap-5.mt-10.justify-end.pr-5
                button(type="submit" class="px-5 py-2 text-semibold bg-white rounded-full") Add
                button(type="button" @click="cancel" class="px-4 py-2 text-semibold bg-white rounded-full") Cancel 
</template>

<script setup>


// const firstName = ref('')
// const lastName = ref('')
// const email = ref('')
// const birthDate = ref('')
// const nationalityId = ref('')
// const gender = ref('')
// const phone = ref('')
// const countries = ref([]) 
// const errors = ref({})




</script>




