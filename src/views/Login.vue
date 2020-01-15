<template>
<v-content>
    <v-container fluid mt-5>
        <v-row align="center" justify="center" class="my-4">
            <v-img src="../assets/zozi-logo-black.png" lazy-src="../assets/zozi-logo.png" aspect-ratio="1"  max-width="300" max-height="30" class="mr-2 float-left"></v-img>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">

                <v-card class="shadow-xl">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title> <span>Login</span></v-toolbar-title>
                        <v-spacer />

                    </v-toolbar>
                    <v-card-text>
                        <v-form class="pa-5">
                            <v-text-field label="E-Mail" name="email" prepend-inner-icon="mail" type="text" outlined required :rules="emailRules"/>

                            <v-text-field id="password" label="Password" name="password" prepend-inner-icon="lock" type="password" outlined required :rules="passwordRules"/>
                        </v-form>
                        <p class="text-right">
                            <router-link to="/lostpassword"> Forgot password?</router-link>
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
     data() {
        return {
            emailRules: [
                v => !!v || 'E-Mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ]
        }
    },
    
    
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
