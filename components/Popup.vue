<template lang="pug">
div(v-if="show" class="popup" @click.self="closePopup" class= "flex justify-center items-center mb-0")
    div.popup-content(class=" items-center h-screen")
        .header
            .flex.justify-between.align-center
                div
                Icon(name="ri:close-circle-line" @click="closePopup" size="30px"  color="red" class=" icon ")
        div.p-4.pt-10.shadow-xl.rounded-xl(class="bg-[#c7d2fe] w-[30rem] h-[50rem] rounded-3xl shadow-xl")
            form(@submit.prevent="onSubmit")
                div.mb-4
                    label(for="firstName"  class="text-[#312e81]").text-gray-700.block.p-2 FirstName
                    input(id="firstName"  v-model="firstName" type="text" class="border mt-1  text-[#6366f1] block w-full p-1 rounded-full")
                    div.text-red-500.text-sm.mt-1 {{ firstNameError }} 
                div.mb-4
                    label(for="lastName" class="text-[#312e81]").text-gray-700.block.p-2 LastName
                    input(id="lastName"  v-model="lastName"   type="text" class=" border mt-1  text-[#6366f1] block w-full p-1 rounded-full")
                    iv.text-red-500.text-sm.mt-1 {{lastNameError }} 
                div.mb-4
                    label(for="email" class="text-[#312e81]").text-gray-700.block.p-2 Email
                    input(id="email" v-model="email"    type="email" class="border mt-1 block  text-[#6366f1] w-full p-1 rounded-full")
                    div.text-red-500.text-sm.mt-1 {{ emailError }} 
                div.mb-4
                    label(for="birthDate" class="text-[#312e81]").text-gray-700.block.p-2 BirthDate
                    DatePicker(id="birthDate" v-model="birthDate"  @update:modelValue="updateBirthDate" type="text" class=" border  text-[#6366f1] mt-1 block w-full p-1 rounded-full")
                    div.text-red-500.text-sm.mt-1 {{ birthDateError }} 
                div.mb-4
                    label(for="nationality" class="text-[#312e81]").text-gray-700.block.p-2 Nationality
                    select(id="nationality" v-model="nationality"  class="border  text-[#6366f1] mt-1 block w-full p-1 rounded-full")
                        option(v-for="country in countries?.countries?.data" :value="country.id" :key="country.id") {{ country.enName }}
                    div.text-red-500.text-sm.mt-1 {{ nationalityError }} 
                div.mb-4
                    label(for="gender" class="text-[#312e81]").text-gray-700.block.p-2 Gender
                    select(id="gender" v-model="gender"  class=" border mt-1 block text-[#6366f1]  w-full p-1 rounded-full")
                        option(value="MALE") Male
                        option(value="FEMALE") Female
                    div.text-red-500.text-sm.mt-1 {{ genderError }} 
                div.mb-4
                    label(for="phone" class="text-[#312e81]").text-gray-700.block.p-2 Phone
                    input(id="phone" v-model="phone" type="text" class="border mt-1  text-[#6366f1] block w-full p-1 rounded-full")
                    div.text-red-500.text-sm.mt-1 {{ phoneError }}
                div.mb-4.flex.gap-5.mt-10.justify-end.pr-5
                    button(type="submit"  class="px-5 py-2 text-semibold text-white  bg-[#312e81] rounded-full") Update
                    button(type="button" @click="closePopup"  class="px-4 py-2 text-semibold text-white bg-[#312e81]  rounded-full") Cancel  

    
</template>

<script setup>

import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { defineEmits } from 'vue';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// import VueTelInputVuetify from 'vue-tel-input-vuetify';
// import 'vue-tel-input-vuetify/dist/vue-tel-input-vuetify.css';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useToast } from 'vue-toast-notification';

  const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  data: {
        type: Object,
    }
})

const emit = defineEmits(['update:show', 'updateSuccessful']);

const closePopup = () => {
  emit('update:show', false)
}

const toast = useToast();


const router=useRouter();

const initialValues = {
    userId:'',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    nationality: '',
    gender: '',
    phone:''
}

const { errors, handleSubmit, defineField, resetForm,setFieldValue } = useForm({
    validationSchema: yup.object({
        firstName: yup.string().required().matches(/^[a-zA-Z\s]*$/, 'error ').label('First name').required(),
        lastName: yup.string().matches(/^[a-zA-Z\s]*$/, 'error').label('last name').required(),
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
const { value: lastName, errorMessage: lastNameError  } = useField('lastName');
const { value: email, errorMessage: emailError  } = useField('email');
const { value: birthDate, errorMessage: birthDateError  } = useField('birthDate');
const { value: nationality, errorMessage: nationalityError  } = useField('nationality');
const { value: gender, errorMessage: genderError  } = useField('gender');
const { value: phone, errorMessage: phoneError  } = useField('phone');

const updateBirthDate = (newValue) => {
    birthDate.value = newValue;
};

console.log('>>>>>>>>>>>>>>.', props.data);

watch(() => props.data, (newData) => {
if (newData) {
  initialValues.userId = newData.id;
  firstName.value = newData.firstName;
  lastName.value = newData.enLastName;
  email.value = newData.email;
  birthDate.value = useDateFormat(newData.birthDate);
  nationality.value = newData.nationality?.id;
  gender.value = newData.gender;
  phone.value = newData.phone;
}
});
console.log( initialValues.userId);


const { data: countries, error } = await useAsyncGql('countries', {
    enableCities: true
});


const isUpdating  = ref(false);
const onSubmit = handleSubmit(async (values) => {
    // if (isUpdating.value) return;
    // isUpdating.value = true;
    const birthDateTimestamp = new Date(values.birthDate).valueOf();
    const { data } = await useAsyncGql({
        operation: 'updateUserBoard',
        variables: {
            input: {
                userId: initialValues.userId,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                birthDate: birthDateTimestamp,
                nationalityId: values.nationality,
                gender: values.gender,
                phone: values.phone
            }
        },
    });

    const res = data.value.updateUserBoard;
    if (res?.success) {
    toast.success(res?.message,{
        duration: 5000,
        position: 'top-right'
        });
        emit('updateSuccessful')
      } else {
    toast.error(res?.message,{
        duration: 5000,
        position: 'top-right'
  });
}

});



const cancel = () => {
    router.push({ path: "/" });


};



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
    margin-top:10rem ;
    z-index: 1000;
    border-radius: 10px;

  
  }

  }




</style>