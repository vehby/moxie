<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item v-for="item in items" :key="item.text" router :to="item.route" link>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-action>
                        <v-icon color="grey darken-1">mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-title class="grey--text text--darken-1">Settings</v-list-item-title>
                </v-list-item>


                <!-- If you need sub menu list you can use  -->
                <!-- <v-list-group :value="false">
                    <template #prependIcon>
                        <v-icon>mdi-star</v-icon>
                    </template>
                    <template #activator>
                        Sub Menu
                    </template>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>queue_play_next</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>Sub Menu</v-list-item-content>
                    </v-list-item>
                </v-list-group> -->
                <!-- / If you need sub menu list you can use  -->

            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="red" :elevation="2" dense class="white--text" height="65">
            <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" />
            <v-img src="../assets/moxie-logo.png" lazy-src="../assets/moxie-logo.png" aspect-ratio="1" max-width="24" max-height="24" class="mr-2"></v-img>
            <v-toolbar-title class="mr-12 align-center">
                <span class="title font-weight-light">MOXIE </span>STUDIO
            </v-toolbar-title>
            <v-spacer />
            <v-btn dark icon>
                <v-icon left>notifications_none</v-icon>
            </v-btn>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" text class="white--text text-capitalize font-weight-light">
                        <v-icon left>account_circle</v-icon>
                        <span>Hi, John Doe</span>
                        <v-icon>keyboard_arrow_down</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-subheader>My Account</v-subheader>
                    <v-list-item @click="method" link>
                        <v-list-item-title>Log Out</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-title>
                            Settings
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </v-app>
</template>


<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'dashboard', text: 'Dashboard', route:'/dashboard' },
        { icon: 'laptop_mac', text: 'Agent', route:'/team'},
        { icon: 'queue_play_next', text: 'Script', route:'/dashboard'},
        { icon: 'playlist_add_check', text: 'Tasks', route:'/dashboard'},
        { icon: 'playlist_play', text: 'Trigger', route:'/dashboard'},
        { icon: 'supervisor_account', text: 'User Manager', route:'/dashboard'},
      ],
 
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
  }
</script>
