<template>
<v-content>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" class="my-4">
            <v-img src="../assets/moxie-logo.png" lazy-src="../assets/moxie-logo.png" aspect-ratio="1" max-width="38" max-height="38" class="mr-2 float-left"></v-img>
            <span class="display-1 font-weight-light">MOXIE <span class="font-weight-regular"> STUDIO </span></span>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">

                <v-card class="shadow-xl">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title> <span>Login</span></v-toolbar-title>
                        <v-spacer />

                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Login" name="login" prepend-icon="person" type="text" outlined/>

                            <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password" outlined/>
                        </v-form>
                        <p class="text-right">
                            <router-link to="/lost-password"> Forgot password?</router-link>
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" v-on="on" depressed block>Login</v-btn>
                    </v-card-actions>
                    <v-card-actions class="text-center">
                        <div class="text-center">
                            <p class="text-center">Don’t have an account? <router-link to="/signup">Sign up</router-link>
                            </p>
                        </div>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-content>
</template>

<script>
export default {
    props: {
        source: String,
    },
}
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
