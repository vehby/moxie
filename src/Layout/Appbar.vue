<template>
    <div>
            <v-app-bar app clipped-left color="primary" dense class="white--text shadow-md" height="65">
        <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" />
       <router-link to="/"> <v-img src="../assets/zozi-logo.png" lazy-src="../assets/zozi-logo.png" aspect-ratio="1" max-width="207" max-height="20" class="mr-2"></v-img></router-link>
   
        <v-spacer />

        <v-menu>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-on="on" dark icon class="pr-4">
                    <v-badge color="white red--text">
                        <template v-slot:badge>5</template>
                        <v-icon>notifications_none</v-icon>
                    </v-badge>
                </v-btn>

            </template>
            <v-card class="mx-auto" min-width="320" tile>
                <v-list>

                    <v-subheader>Notification</v-subheader>
                    <v-list-item @click="method">
                        <v-list-item-title>
                            <p>Task One is failled</p>
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>
                            Task One is succes
                        </v-list-item-title>
                    </v-list-item>

                </v-list>
            </v-card>

        </v-menu>

        <v-menu>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-on="on" text class="white--text text-capitalize font-weight-light">
                    <v-icon left>account_circle</v-icon>
                    <span class="d-none d-sm-flex">Hi, John Doe</span>
                    <v-icon left>keyboard_arrow_down</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-subheader>My Account</v-subheader>
                <v-list-item @click="logout" link>
                    <v-list-item-title>Log Out</v-list-item-title>
                </v-list-item>

                <router-link to="/settings">
                    <v-list-item link>
                        <v-list-item-title>
                            Settings
                        </v-list-item-title>
                    </v-list-item>
                </router-link>

            </v-list>
        </v-menu>

    </v-app-bar>
    </div>
</template>

<script>
import Auth from '../auth';
export default {
    methods:{
        logout(){
             Auth.logout();
             this.$router.push('/');   
        }    
    }
}
</script>