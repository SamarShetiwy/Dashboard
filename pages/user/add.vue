<template lang="pug">
div.container.mx-auto.p-4.pt-8.shadow-xl.mt-2.rounded-xl.flex.items-center.justify-center
    form(@submit.prevent="onSubmit" class="bg-[#eef2ff] w-[40rem] rounded-3xl shadow-xl").ml-2.flex.items-center.flex-col
        div.mb-4(class="w-[30rem] mt-3")
            label(for="firstName" class="text-[#312e81]").block.p-2 FirstName
            input(id="firstName"  v-model="firstName"  v-bind="firstNameProps" type="text" class="border mt-1 text-[#6366f1] block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1(v-if="errors.firstName") {{ errors.firstName }}
        div.mb-4(class="w-[30rem]")
            label(for="lastName" class="text-[#312e81]").block.p-2 LastName
            input(id="lastName" v-model="lastName"  v-bind="lastName" type="text" class=" border mt-1 block text-[#6366f1]  w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1(v-if="errors.lastName") {{ errors.lastName }} 
        div.mb-4(class="w-[30rem]")
            label(for="email" class="text-[#312e81]").block.p-2 Email
            input(id="email" v-model="email"   v-bind="emailProps" type="text" class="border mt-1 block text-[#6366f1] w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1(v-if="errors.email") {{ errors.email }}
        div.mb-4(class="w-[30rem]")
            label(for="birthDate" class="text-[#312e81]").block.p-2 BirthDate
            DatePicker(id="birthDate" v-model="birthDate"  @update:modelValue="updateBirthDate" v-bind="birthDateProps" type="text" class=" border mt-1 text-[#6366f1] block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1(v-if="errors.birthDate") {{ errors.birthDate }}

        div.mb-4(class="w-[30rem]")
            label(for="nationality " class="text-[#312e81]").block.p-2 Nationality
            //- pre {{ countries?.countries?.data }}
            select(id="nationality"  v-model="nationality" v-bind="nationalityProps" class="border mt-1 text-[#6366f1] block w-full p-1 rounded-full") 
                option(v-for="country in  countries?.countries?.data"  :value="country.id" :key="country.id") {{ country.enName }}
            div.text-red-500.text-sm.mt-1(v-if="errors.nationality") {{ errors.nationality}}
        div.mb-4(class="w-[30rem]")
            label(for="gender" class="text-[#312e81]").text-gray-700.block.p-2 Gender
            select(id="gender" v-model="gender"  v-bind="genderProps" class=" border mt-1 text-[#6366f1] block w-full p-1 rounded-full")
                option(value="MALE") Male
                option(value="FEMALE") Female
            div.text-red-500.text-sm.mt-1(v-if="errors.gender") {{ errors.gender }}

        div.mb-4(class="w-[30rem]")
            label(for="phone" class="text-[#312e81]").text-gray-700.block.p-2 Phone
            input(id="phone"  v-model="phone"  v-bind="phoneProps" type="text" class="border mt-1 text-[#6366f1] block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1(v-if="errors.phone") {{ errors.phone }}                
        div.mb-4.flex.gap-5.mt-10.justify-end.pr-5
            button(type="submit" class="px-5 py-2 text-semibold text-white bg-[#312e81] rounded-full") Add 
            button(type="button" @click="cancel()" class="px-4 py-2 text-semibold  text-white bg-[#312e81] rounded-full") Cancel 
</template>

<script setup>

import { useForm  } from 'vee-validate';
import * as yup from 'yup';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useToast } from 'vue-toast-notification';


const { errors, handleSubmit, defineField,resetForm} = useForm({
validationSchema: yup.object({
    firstName: yup.string().required().matches(/^[a-zA-Z\s]*$/, 'error ').label('First name').required(),
        lastName: yup.string().matches(/^[a-zA-Z\s]*$/, 'error').label('last name').required(),
        email: yup.string().email().required(),
        birthDate: yup.date().required(),
        nationality: yup.string().required(),
        gender: yup.string().matches(/^(MALE|FEMALE)$/, 'error').label('gender name').required(),
        phone: yup.string().label('phone name').required(),


}),
});

watch((errors) , (curr)=> { 
    console.log(curr , "errors")
})
const [ firstName,firstNameProps] = defineField('firstName');
const [ lastName,lastNameProps] = defineField('lastName');
const [ email,emailProps] = defineField('email');
const [ birthDate,birthDateProps] = defineField('birthDate');
const [ nationality,nationalityProps] = defineField('nationality');
const [ gender,genderProps] = defineField('gender');
const [ phone, phoneProps]= defineField('phone');



const updateBirthDate = (newValue) => {
    birthDate.value = newValue;
};
watch(birthDate, (newValue) => {
    console.log('birthDate updated:', newValue);
});
const {data:countries, error} = await useAsyncGql('countries', {
    enableCities: true
});
// console.log('>>>>>>>>>>>>>>coun', countries.value?.countries?.data );
const toast=useToast();
const addUser = async (values) => {
    const birthDateTimestamp = new Date(values.birthDate).valueOf();
    const { data } = await useAsyncGql({
        operation: 'createUserBoard',
        variables: { input: {
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            birthDate:birthDateTimestamp,
            nationalityId:values.nationality,
            gender:values.gender,
            phone:values.phone
        } 
        },
});

    if (data.value.createUserBoard.success) {
        toast.success(data.value.createUserBoard?.message,{
            duration:5000,
            position: 'top-right'
        }); 
        }
        else {
        toast.error(data.value.createUserBoard?.message,{
            duration:5000,
            position: 'top-right'
        })   
};
}




const onSubmit = handleSubmit(async (values) => {
try {
    const result = await addUser(values);
    console.log('User added:', result);
    resetForm();
    emit('addSuccessful');

} catch (error) {
    console.error('Error adding user:', error);
}

});


const router = useRouter();
const cancel = () => {
    router.push({ path: "/user/all-user" });
};

</script>

<style >

</style>
