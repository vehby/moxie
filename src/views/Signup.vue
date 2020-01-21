<template>
<v-content>
    <v-container class="mt-5" fluid>
        <v-row align="center" justify="center" class="my-4">
            <v-img src="../assets/zozi-logo-black.png" lazy-src="../assets/zozi-logo.png" aspect-ratio="1"  max-width="300" max-height="29" class="mr-2 float-left"></v-img>
        </v-row>

        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                
                <v-card class="shadow-xl">
                    <v-toolbar color="primary" dark flat>
                        <v-toolbar-title> <span>Sign Up</span></v-toolbar-title>
                        <v-spacer />

                    </v-toolbar>
                    <v-progress-linear
                        v-show="isLoading"
                        indeterminate
                        color="yellow darken-2"
                    ></v-progress-linear>
                    <v-alert
                        v-show="!!errorMessage"
                        text
                        prominent
                        type="error"
                        icon="mdi-alert-circle"
                    >
                        {{errorMessage}}
                    </v-alert>
                    <v-card-text>
                        <v-form ref="form" class="pa-5">
                            <!-- <v-text-field label="Organization Name" v-model="organiztionName" type="text" outlined/> -->
                            <!-- <v-text-field label="First Name" v-model="firsName" type="text" required :rules="firstNameRules" outlined/> -->
                            <!-- <v-text-field label="Last Name" v-model="lastName" type="text" required :rules="lastNameRules" outlined/> -->
                            <v-text-field label="E-Mail" v-model="email" type="text" required :rules="emailRules" outlined/>
                            <v-text-field id="password" label="Password" v-model="password" name="password" prepend-inner-icon="lock" type="password" required :rules="passwordRules" outlined/>
                            <v-text-field id="passwordAgain" label="Password Again" v-model="passwordAgain" name="passwordAgain" prepend-inner-icon="lock" type="password" required :rules="passwordAgainRules" outlined/>
                            
                        </v-form>
                        <p class="text-right">
                            <router-link to="/lostpassword"> Forgot password?</router-link>
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" v-on="on" v-on:click="signin" depressed block>Signup</v-btn>
                    </v-card-actions>
                    <v-card-actions class="text-center">
                        <div class="text-center">
                            <p class="text-center">Already have an account? <router-link to="/"> Log in</router-link>
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
import Api from '../api';
import Auth from '../auth';
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
            ],
            passwordAgainRules:[
                v =>  {
                    return this.password == v || 'Password does not match'
                }
            ],
            isLoading: false,
            errorMessage: ""   
      }
      
    },
     props: {
        source: String,
    },
    methods:{
        async signin(){
            if(this.$refs.form.validate()){
                this.isLoading = true;
                try{
                    let token = await Api.signin({Email: this.email, Password: this.password});
                    Auth.setToken(token);
                    this.$router.push('dashboard');
                }catch(e){
                    this.errorMessage = e.response.data.reason;
                    this.isLoading = false;
                }
                
            }
        }
    }

  }

</script>