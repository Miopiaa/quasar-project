import { defineComponent } from 'vue';

interface Form {
  email: string;
  emailError: boolean;
  emailErrorMessage: string;
  password: string;
  passwordError: boolean;
  passwordErrorMessage: string;
}

export default defineComponent({
  name: 'IndexPage',
  data() {
    const form: Form = {
      email: '',
      emailError: false,
      emailErrorMessage: '',
      password: '',
      passwordError: false,
      passwordErrorMessage: '',
    };

    return {
      form,
    };
  },
  methods: {
    submitLogin() {
      console.log('login');
    },
  },
});
