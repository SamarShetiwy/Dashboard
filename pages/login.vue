<template lang="pug">
.min-h-screen.bg-gray-100.py-6.flex.flex-col.justify-center(class="sm:py-12")
  Form.relative.py-3(class="relative py-3 sm:max-w-xl sm:mx-auto " @submit="onSubmit")
    .absolute.inset-0.bg-gradient-to-r.from-yellow-600.to-yellow-700.shadow-lg.transform.-skew-y-6("sm:skew-y-0.sm:-rotate-6.sm:rounded-3xl")
    .relative.px-4.py-10.bg-white.shadow-lg(class="sm:rounded-3xl.sm:p-20")
      .max-w-md.mx-auto
      h1.text-2xl.font-semibold Login
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
              class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
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
              class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
              placeholder="Password"
            )
            label(class="absolute.left-0.-top-3.5.text-gray-600.text-sm.peer-placeholder-shown:text-base.peer-placeholder-shown:text-gray-440.peer-placeholder-shown:top-2.transition-all.peer-focus:-top-3.5.peer-focus:text-gray-600.peer-focus:text-sm(for='password') Password")
            div.text-red-500.text-sm.mt-1(v-if="errors.password") {{ errors.password }}
          .relative
            button.bg-yellow-700.text-white.rounded-md.px-2.py-1 Submit
            div.text-red-400(v-if="errorMessage") {{ errorMessage }}
      .w-full.flex.justify-center
      button(class="flex.items-center.bg-white.border.border-gray-300.rounded-lg.shadow-md.px-6.py-2.text-sm.font-medium.text-gray-800.hover:bg-gray-200.focus:outline-none.focus:ring-2.focus:ring-offset-2.focus:ring-gray-500")
        svg.h-6.w-6.mr-2(
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="800px"
          height="800px"
          viewBox="-0.5 0 48 48"
          version="1.1"
        )
        span Continue with Google
</template>


<script setup>
import { useForm  } from 'vee-validate';
import * as yup from 'yup';
import { ref } from 'vue';
const router = useRouter();
const errorMessage = ref('');

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});


const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');


const getToken = async (values) => {
  const { data } = await useAsyncGql({
    operation: 'EmailAndPasswordLoginBoard',
    variables: { input: { email: values.email, password: values.password ,device:"DESKTOP"} },
  });


  if (data.value.emailAndPasswordLoginBoard.success) {
    return data.value.emailAndPasswordLoginBoard.data.token;
  } else {
    throw new Error(data.value.emailAndPasswordLoginBoard.message);
  }
};

// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit(async (values) => {
  try {
    const token = await getToken(values);
    localStorage.setItem('token', token);
    alert(JSON.stringify(values, null, 2));
    console.log(token);
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed. Please try again.');
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
