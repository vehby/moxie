<template>
  <v-app>
    <NavBar/>
    <DatePicker/>

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

