<template>
  <q-page class="row items-center justify-evenly">
    <div class="row">
      <div class="q-pa-md">
        <div class="text-center">
          <q-img class="logo" src="~/src/assets/draga.png" />
        </div>
        <div class="text-h4 text-bold q-mt-lg">Email Express</div>
        <div class="text-grey-7">Por favor, faça login na sua conta abaixo</div>
        <div class="column">
          <q-input
            class="q-mt-sm"
            label="E-mail *"
            outline
            v-model="form.email"
            :error="form.emailError"
            :error-message="form.emailErrorMessage"
          >
            <template v-slot:prepend>
              <q-icon name="email"> </q-icon>
            </template>
          </q-input>
          <q-input
            class="q-mt-sm"
            label="Senha *"
            outline
            v-model="form.password"
            :error="form.passwordError"
            :error-message="form.passwordErrorMessage"
          >
            <template v-slot:prepend>
              <q-icon name="lock"> </q-icon>
            </template>
            <template v-slot:append>
              <q-icon name="visibility_off"> </q-icon>
            </template>
          </q-input>
        </div>
        <div class="column">
          <q-btn
            flat
            style="color: #ff0080"
            label="Entrar"
            @click="submitLogin"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script src="./IndexPage.ts"></script>
<style>
.logo {
  width: 100%;
}
</style>
