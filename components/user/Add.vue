<template lang="pug">
div.container.mx-auto.p-4.pt-8.ml-7.shadow-xl.mt-7.bg-gray-200.rounded-xl
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
            label(for="nationality").text-gray-700.block.p-2 Nationality
            //- pre {{ countries?.countries?.data }}
            select(id="nationality"  v-model="nationality" v-bind="nationalityProps" class="border mt-1 block w-full p-1 rounded-full") 
                option(v-for="country in  countries?.countries?.data"  :value="country.id" :key="country.id") {{ country.enName }}
            div.text-red-500.text-sm.mt-1(v-if="errors.nationality") {{ errors.nationality}}
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

import { useForm  } from 'vee-validate';
import * as yup from 'yup';


const { errors, handleSubmit, defineField,resetForm} = useForm({
validationSchema: yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        birthDate: yup.string().required(),
        nationality: yup.string().required(),
        gender: yup.string().required(),
        phone: yup.string().required(),


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


const {data:countries, error} = await useAsyncGql('countries', {
    enableCities: true
});
// console.log('>>>>>>>>>>>>>>coun', countries.value?.countries?.data );

const addUser = async (values) => {
    const { data } = await useAsyncGql({
        operation: 'createUserBoard',
        variables: { input: {
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            birthDate:values.birthDate,
            nationalityId:values.nationality,
            gender:values.gender,
            phone:values.phone
        } 
        },
});

    if (data.value.createUserBoard.success) {
        return data.value.createUserBoard.data;
    } else {
        throw new Error(data.value.createUserBoard.message);
        }
};

const onSubmit = handleSubmit(async (values) => {
try {
    const result = await addUser(values);
    console.log('User added:', result);
    resetForm();

} catch (error) {
    console.error('Error adding user:', error);
}

});


const router = useRouter();

const cancel = () => {
    router.push("/");
};

</script>

<style >

</style>