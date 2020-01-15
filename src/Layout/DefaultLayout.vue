<template>
    <v-app id="inspire">
        <SideBar/>
        <AppBar/>
        <Content/>
    </v-app>
</template>

<style scoped>
.moxielogo a {
    text-decoration: none;
    color: #fff;
}

.shadow-md {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
}
</style>


<script>
import SideBar from "./Sidebar";
import AppBar from "./Appbar";
import Content from "./Content";
export default {
  components: {
    SideBar,
    AppBar,
    Content
  }
};
</script>