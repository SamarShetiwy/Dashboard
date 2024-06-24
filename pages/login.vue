<template lang="pug">
Form.relative.mt-20.px-6.py-10.flex.flex-col.justify-center(class="sm:py-12")(class="relative py-3 sm:max-w-xl sm:mx-auto " @submit="onSubmit")
    .relative.px-4.py-10.shadow-lg(class="sm:rounded-3xl.sm:p-20 bg-[#312e81] rounded-xl" )
      .max-w-md.mx-auto
      h1.text-2xl.font-semibold.text-white Login
      .divide-y.divide-gray-200
        .py-8.text-base.leading-6.space-y-4.text-gray-700(class="sm:text-lg.sm:leading-7")
          .relative
            input(
              v-model="email"
              type="email"
              v-bind="emailAttrs"
              autocomplete="off"
              id="email"
              name="email"
              class="peer  rounded-xl placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="Email address"
            )
            label(class="absolute.left-0.-top-3.5.text-gray-600.text-sm.peer-placeholder-shown:text-base.peer-placeholder-shown:text-gray-440.peer-placeholder-shown:top-2.transition-all.peer-focus:-top-3.5.peer-focus:text-gray-600.peer-focus:text-sm(for='email') Email Address")
            div.text-red-500.text-sm.mt-1(v-if="errors.email") {{ errors.email }}
          .relative
            input(
              v-model="password"
              type="password"
              v-bind="passwordAttrs"
              autocomplete="off"
              id="password"
              name="password"
              class="peer   rounded-xl placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="Password"
            )
            label(class=" absolute.left-0.-top-3.5.text-gray-600.text-sm.peer-placeholder-shown:text-base.peer-placeholder-shown:text-gray-440.peer-placeholder-shown:top-2.transition-all.peer-focus:-top-3.5.peer-focus:text-gray-600.peer-focus:text-sm(for='password') Password")
            div.text-red-500.text-sm.mt-1(v-if="errors.password") {{ errors.password }}
          .relative
            button.font-semibold.text-xl.rounded-md.px-2.py-1(class="text-[#312e81] bg-white hover:bg-[#8b8bcc] ")(@click="handleSubmit") Submit
            div.text-red-400(v-if="errorMessage") {{ errorMessage }}
      
</template>


<script setup>
import { useForm  } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from '~/stores/auth';


const router = useRouter();
const errorMessage = ref('');
const authStore = useAuthStore();


definePageMeta({
  layout:"login" 
  
})
const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});


const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');


const onSubmit = handleSubmit(async (values) => {
  try {
    await authStore.login(values.email, values.password);
    router.push('/');
  } catch (error) {
    console.error('Error logging in:', error);
    errorMessage.value = 'Login failed. Please try again.';
  }
});


</script>


<style lang="scss" scoped>
.card {
    &-title {
        &-label {
            &.red {
                .date {}
            }
        }
    }
}
</style>
