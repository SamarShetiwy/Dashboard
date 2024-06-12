<template lang="pug">
div.p-4.pt-10.shadow-xl.bg-gray-300.rounded-xl.w-50
    form(@submit.prevent="onSubmit")
        div.mb-4
            label(for="firstName").text-gray-700.block.p-2 FirstName
            input(id="firstName"  v-model="firstName" type="text" class="border mt-1 block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1 {{ firstNameError }} 
        div.mb-4
            label(for="enLastName").text-gray-700.block.p-2 LastName
            input(id="enLastName"  v-model="enLastName"   type="text" class=" border mt-1 block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1 {{enLastNameError }} 
        div.mb-4
            label(for="email").text-gray-700.block.p-2 Email
            input(id="email" v-model="email"    type="email" class="border mt-1 block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1 {{ emailError }} 
        div.mb-4
            label(for="birthDate").text-gray-700.block.p-2 BirthDate
            DatePicker(id="birthDate" v-model="birthDate"  type="text" class=" border mt-1 block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1 {{ birthDateError }} 
        div.mb-4
            label(for="nationality").text-gray-700.block.p-2 Nationality
            select(id="nationality" v-model="nationality"  class="border mt-1 block w-full p-1 rounded-full")
                option(v-for="country in countries?.countries?.data" :value="country.enName" :key="country.id") {{ country.enName }}
            div.text-red-500.text-sm.mt-1 {{ nationalityError }} 
        div.mb-4
            label(for="gender").text-gray-700.block.p-2 Gender
            select(id="gender" v-model="gender"  class=" border mt-1 block w-full p-1 rounded-full")
                option(value="MALE") Male
                option(value="FEMALE") Female
            div.text-red-500.text-sm.mt-1 {{ genderError }} 
        div.mb-4
            label(for="phone").text-gray-700.block.p-2 Phone
            VueTelInputVuetify(id="phone" v-model="phone" type="text" class="border mt-1 block w-full p-1 rounded-full")
            div.text-red-500.text-sm.mt-1 {{ phoneError }}

        div.mb-4.flex.gap-5.mt-10.justify-end.pr-5
            button(type="submit" class="px-5 py-2 text-semibold bg-white rounded-full") Update
            button(type="button" @click="cancel"  class="px-4 py-2 text-semibold bg-white rounded-full") Cancel 
</template>

<script setup>

import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { defineEmits } from 'vue';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import VueTelInputVuetify from 'vue-tel-input-vuetify';
import 'vue-tel-input-vuetify/dist/vue-tel-input-vuetify.css';

const date = ref(null);
const phoneNumber = ref('');
const router=useRouter();
// const toast=useTost();
// const loading=ref(false)

const props = defineProps({
    data: {
        type: Object,
    }
})


const initialValues = {
    userId:'',
    firstName: '',
    enLastName: '',
    email: '',
    birthDate: '',
    nationality: '',
    gender: '',
    phone:''
}

const { errors, handleSubmit, defineField, resetForm,setFieldValue  } = useForm({
    validationSchema: yup.object({
        firstName: yup.string().required().matches(/^[a-zA-Z\s]*$/, 'error ').label('First name').required(),
        enLastName: yup.string().matches(/^[a-zA-Z\s]*$/, 'error').label('last name').required(),
        email: yup.string().email().required(),
        birthDate: yup.date().required(),
        nationality: yup.string().required(),
        gender: yup.string().matches(/^(MALE|FEMALE)$/, 'error').label('gender name').required(),
        phone: yup.string().label('phone name').required(),
    }),
    initialValues: initialValues
});

watch((errors), (curr) => {
    console.log(curr, "errors")
})

const { value: firstName, errorMessage: firstNameError } = useField('firstName');
const { value: enLastName, errorMessage: enLastNameError  } = useField('enLastName');
const { value: email, errorMessage: emailError  } = useField('email');
const { value: birthDate, errorMessage: birthDateError  } = useField('birthDate');
const { value: nationality, errorMessage: nationalityError  } = useField('nationality');
const { value: gender, errorMessage: genderError  } = useField('gender');
const { value: phone, errorMessage: phoneError  } = useField('phone');




console.log('>>>>>>>>>>>>>>.', props.data);
if (props.data) {
    initialValues.userId= props.data?.id,
    firstName.value = props.data?.firstName;
    enLastName.value = props.data?.nickname;
    email.value = props.data?.email;
    birthDate.value = useDateFormat(props.data?.birthDate);
    nationality.value = props.data?.nationality;
    gender.value = props.data?.gender;
    phone.value = props.data?.phone;
}

console.log( initialValues.userId);

const { data: countries, error } = await useAsyncGql('countries', {
    enableCities: true
});

const updateUserGraph = async (values) => {
    const birthDateTimestamp = new Date(values.birthDate).valueOf();
    const { data } = await useAsyncGql({
        operation: 'updateUserBoard',
        variables: {
            input: {
                userId: initialValues.userId,
                firstName: values.firstName,
                enLastName: values.enLastName,
                email: values.email,
                birthDate: birthDateTimestamp,
                nationalityId: values.nationality,
                gender: values.gender,
                phone: values.phone
            }
        },
    });
    if (data.value.updateUserBoard.success) {
        return data.value.updateUserBoard.data;
    } else {
        throw new Error(data.value.updateUserBoard.message);
    }
};


const onSubmit = handleSubmit(async (values) => {
    alert(JSON.stringify(values))
    try {
        const result = await updateUserGraph(values);
        console.log('User added:', result);
    
    } catch (error) {
        console.error('Error adding user:', error);
    }

});

const emit = defineEmits(['updateSuccessful']);

const updateUser = async () => {
  const response = await UpdateFunction();
  if (response.success) {
    emit('updateSuccessful');
  }
};



const cancel = () => {
    // if(loading.value){
    //     router.push({ path: "/user/all-user" });
    //     toast.success('تم تحديث البيانات بنجاح')  
    // }else{
    //     toast.error(' يوجد خطا ')   
    // }
    router.push({ path: "/" });

  

};

</script>

<style></style>