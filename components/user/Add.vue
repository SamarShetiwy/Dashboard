<template lang="pug">
div.container.mx-auto.p-4.pt-8.ml-7.shadow-lg.mt-7.border
    form(@submit.prevent="onSubmit")
        div.mb-4
            label(for="firstName").text-gray-700.block FirstName
            input(id="firstName" v-model="firstName"  v-bind="firstName" type="text" class="mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="arLastName").text-gray-700.block arLastName
            input(id="arLastName" v-model="arLastName"  v-bind="arLastName" type="text" class="mt-1 block w-full p-1 rounded-full") 
        div.mb-4
            label(for="country").text-gray-700.block country
            input(id="country" v-model="country"  v-bind="country" type="text" class="mt-1 block w-full p-1 rounded-full")
        div.mb-4
            label(for="Gender").text-gray-700.block Gender
            select(id="Gender" v-model="Gender"  v-bind="Gender" class="mt-1 block w-full p-1 rounded-full")
                option(value="Male") Male
                option(value="Female") Female
        div.mb-4
            label(for="phone").text-gray-700.block phone
            input(id="phone" v-model="phone"  v-bind="phone" type="Number" class="mt-1 block w-full p-1 rounded-full")                
        div.mb-4.flex.gap-2.mt-10
            button.px-4.py-2.text-semibold.bg-white.rounded-full(type='submit') Add 
            button.px-4.py-2.text-semibold.bg-white.rounded-full Cancel


</template>

<script setup>

import { useForm  } from 'vee-validate';
import * as yup from 'yup';


const { errors, handleSubmit, defineField  } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required(),
    arLastName: yup.string().required(),
    country: yup.string().required(),
    Gender: yup.string().required(),
    phone: yup.string().min(6).required(),


}),
});

watch((errors) , (curr)=> { 
    console.log(curr , "errors")
})
const [firstName, firstName] = defineField('FirstName');
const [arLastName, arLastName] = defineField('LastName');
const [country, country] = defineField('country');
const [Gender, Gender] = defineField('Gender');
const [phone, phone]= defineField('phone');

const addUser = async (values) => {
    const { data } = await useAsyncGql({
        operation: 'createUserBoard',
        variables: { input: {
            FirstName: values.FirstName,
            arLastName: values.arLastName ,
            country:values.country,
            Gender: values.Gender ,
            phone: values.phone ,
        
        } 
        },
});
            if (data.value.createUserBoard.success) {
                return data.value.createUserBoard.data.token;
            } else {
                throw new Error(data.value.createUserBoard.message);
            }
};






</script>

<style lang="scss" scoped>

</style>