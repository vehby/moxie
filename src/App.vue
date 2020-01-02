<template>
  <v-app>
    <NavBar/>

  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components : {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

