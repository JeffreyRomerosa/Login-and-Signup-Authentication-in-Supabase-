<template>
  <v-app>
    <v-main>
      <AuthPage/>
    </v-main>
  </v-app>
</template>

<script>
import AuthPage from './views/AuthPage.vue'

export default {
  name: 'App',

  components: {
    AuthPage,
  },

  data: () => ({
    //
  }),
}
</script>