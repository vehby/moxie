<template>
<div>
    <v-container  class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col  cols="12" sm="8" md="4" class="mx-auto">
                <v-card class="shadow-xl pa-5">
                    <v-card-text>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-divider class="my-5"></v-divider>

                        <v-form>
                            <v-text-field label="Organization Name" v-model="organiztionName" type="text" outlined />
                            <v-text-field label="First Name" v-model="firstName" type="text" required :rules="firstNameRules" outlined />
                            <v-text-field label="Last Name" v-model="lastName" type="text" required :rules="lastNameRules" outlined />
                            <v-text-field label="E-Mail" v-model="eMail" type="text" required :rules="emailRules" outlined />
                            <v-text-field id="password" v-model="password" label="Password" name="password" prepend-icon="lock" type="password" required :rules="passwordRules" outlined />
                        </v-form>

                    </v-card-text>

                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" v-on="on" depressed block>Login</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {

        return {
            organiztionName: 'deneme',
            firstName: 'Vehbi',
            lastName:'Kurtcebe',
            eMail:'kurtcebevehbi@gmail.com',
            password: '1234567',
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

}
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
