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
                        <v-toolbar-title> <span>Sign Up</span></v-toolbar-title>
                        <v-spacer />

                    </v-toolbar>
                    <v-card-text>
                        <v-form class="pa-5">
                            <v-text-field label="Organization Name" v-model="organiztionName" type="text" outlined/>
                            <v-text-field label="First Name" v-model="firsName" type="text" required :rules="firstNameRules" outlined/>
                            <v-text-field label="Last Name" v-model="lastName" type="text" required :rules="lastNameRules" outlined/>
                            <v-text-field label="E-Mail" v-model="eMail" type="text" required :rules="emailRules" outlined/>
                            <v-text-field id="password" label="Password" name="password" prepend-icon="lock" type="password" required :rules="passwordRules" outlined/>
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
                            <p class="text-center">Already have an account? <router-link to="/login"> Log in</router-link>
                            </p>
                        </div>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-content>
</template>



<style scoped>
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>


<script>
export default {
    data () {
      return {
            emailRules: [
            v => !!v || 'E-Mail is required',
            ],
            firstNameRules: [
                v => !!v || 'Name is required', 
            ],
            lastNameRules: [
                v => !!v || 'Name is required', 
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ]
      }
    },
     props: {
        source: String,
    }

  }

</script>