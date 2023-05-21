import { defineComponent, ref } from 'vue';

interface Form {
  email: {
    value: string;
    error: boolean;
    msg: string;
  };
  password: {
    value: string;
    error: boolean;
    msg: string;
  };
}

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const form = ref<Form>({
      email: {
        value: '',
        error: false,
        msg: '',
      },
      password: {
        value: '',
        error: false,
        msg: '',
      },
    });

    const submitLogin = () => {
      console.log('login');
    };

    return { form, submitLogin };
  },
});
