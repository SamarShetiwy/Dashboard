<template lang="pug">
.min-h-screen.bg-gray-100.py-6.flex.flex-col.justify-center(class="sm:py-12")
        Form(class="relative py-3 sm:max-w-xl sm:mx-auto " @submit="onSubmit")
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
                                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Email address"
                                )
                                label(
                                    for="email"
                                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                ) Email Address
                                div(v-if="errors.email " class="text-red-500 text-sm mt-1") {{ errors.email}}
                            .relative
                                input(
                                    v-model="password"
                                    type="password"
                                    v-bind="passwordAttrs"
                                    autocomplete="off"
                                    id="password"
                                    name="password"
                                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Password"
                                )
                                label(
                                    for="password"
                                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                ) Password
                                div(v-if="errors.password" class="text-red-500 text-sm mt-1") {{ errors.password }}
                            .relative
                                button.bg-yellow-700.text-white.rounded-md.px-2.py-1 Submit
                                div(v-if="errorMessage" class="text-red-400") {{ errorMessage }}
          .w-full.flex.justify-center
                button.flex.items-center.bg-white.border.border-gray-300.rounded-lg.shadow-md.px-6.py-2.text-sm.font-medium.text-gray-800(class="hover:bg-gray-200.focus:outline-none.focus:ring-2.focus:ring-offset-2.focus:ring-gray-500")
                    svg.h-6.w-6.mr-2(
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="800px"
                        height="800px"
                        viewBox="-0.5 0 48 48"
                        version="1.1"
                    )
                        title Google-color
                        desc Created with Sketch.
                        defs
                        g#Icons(stroke="none" stroke-width="1" fill="none" fill-rule="evenodd")
                            g#Color-(transform="translate(-401.000000, -860.000000)")
                                g#Google(transform="translate(401.000000, 860.000000)")
                                    path#Fill-1(d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" fill="#FBBC05")
                                    path#Fill-2(d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" fill="#EB4335")
                                    path#Fill-3(d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" fill="#34A853")
                                    path#Fill-4(d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4")
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
