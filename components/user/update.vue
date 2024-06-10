<template lang="pug">
div.p-4.pt-10.shadow-xl.bg-gray-300.rounded-xl.w-50
    form(@submit.prevent="onSubmit")
        div.mb-4
            label(for="firstName").text-gray-700.block.p-2 FirstName
            input(id="firstName"  v-model="updateUser.firstName" type="text" class="border mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="lastName").text-gray-700.block.p-2 LastName
            input(id="lastName" v-model="updateUser.lastName"   type="text" class=" border mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="email").text-gray-700.block.p-2 Email
            input(id="email" v-model="updateUser.email"   type="text" class="border mt-1 block w-full p-1 rounded-full")
        div.mb-4
                label(for="birthDate").text-gray-700.block.p-2 BirthDate
                input(id="birthDate" v-model="updateUser.birthDate" type="text" class=" border mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="nationality").text-gray-700.block.p-2 Nationality
            select(id="nationality" v-model="updateUser.nationality" class="border mt-1 block w-full p-1 rounded-full")
                option(v-for="country in countries?.countries?.data" :value="country.enName" :key="country.id") {{ country.enName }}
        div.mb-4
            label(for="gender").text-gray-700.block.p-2 Gender
            select(id="gender" v-model="updateUser.gender"  class=" border mt-1 block w-full p-1 rounded-full")
                option(value="MALE") Male
                option(value="FEMALE") Female
        
        div.mb-4
            label(for="phone").text-gray-700.block.p-2 Phone
            input(id="phone"  v-model="updateUser.phone"  type="text" class="border mt-1 block w-full p-1 rounded-full")
        div.mb-4.flex.gap-5.mt-10.justify-end.pr-5
            button(type="submit" class="px-5 py-2 text-semibold bg-white rounded-full") Update
            button(type="button" @click="cancel" class="px-4 py-2 text-semibold bg-white rounded-full") Cancel 
</template>
    
<script setup>

const props = defineProps({
        data: {
            type: Object,
        }
    })

const resetForm = () => {
    updateUser.value.firstName = '';
    updateUser.value.lastName = '';
    updateUser.value.email = '';
    updateUser.value.birthDate = '';
    updateUser.value.nationality = '';
    updateUser.value.gender = '';
    updateUser.value.phone = '';
};

console.log('>>>>>>>>>>>>>>.', props.data)
const updateUser = reactive({
    firstName:  props.data?.firstName,
    lastName: props.data?.nickname,
    email: props.data?.email,
    birthDate: useDateFormat(props.data?.birthDate),
    nationality: props.data?.nationality,
    gender: props.data?.gender,
    phone: props.data?.phone,
});
const {data:countries, error} = await useAsyncGql('countries', {
    enableCities: true
});

const onSubmit = async (event) => {
    event.preventDefault();
    try {
        const result = await updateUser(updateUser);
        console.log('User added:', result);
        resetForm();
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

</script>

<style></style>