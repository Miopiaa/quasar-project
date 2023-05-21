<template>
  <q-page class="row items-center justify-evenly">
    <div class="row">
      <div>
        <div class="text-h4 text-bold">View Moto</div>
        <div class="text-grey-7">Please login to your account below</div>
        <div class="column">
          <q-input
            v-model="form.email.value"
            :error="form.email.error"
            :error-message="form.email.msg"
          >
            <template v-slot:append>
              <q-icon name="email"> </q-icon>
            </template>
          </q-input>
          <q-input
            v-model="form.password.value"
            :error="form.password.error"
            :error-message="form.password.msg"
          >
            <template v-slot:append>
              <q-icon name="password"> </q-icon>
            </template>
          </q-input>
        </div>
        <div class="column">
          <q-btn color="indigo" @click="submitLogin">Login</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script src="./IndexPage.ts"></script>
