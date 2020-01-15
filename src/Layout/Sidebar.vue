<template>
    <div>
            <v-navigation-drawer v-model="drawer" app clipped class="py-5">
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
            <v-divider></v-divider>

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
    </div>
</template>

<script>
export default {
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
        items: [

            {
                icon: 'dashboard',
                text: 'Dashboard',
                route: '/dashboard'
            },
            {
                icon: 'laptop_mac',
                text: 'Agent',
                route: '/agent'
            },
            {
                icon: 'queue_play_next',
                text: 'Scripts',
                route: '/scripts'
            },
            {
                icon: 'playlist_add_check',
                text: 'Tasks',
                route: '/tasks'
            },
            {
                icon: 'playlist_play',
                text: 'Trigger',
                route: '/trigger'
            },
            {
                icon: 'reorder',
                text: 'Logs',
                route: '/logs'
            },
            {
                icon: 'supervisor_account',
                text: 'User Manager',
                route: '/usermanager'
            },
            {
                icon: 'mdi-settings',
                text: 'Settings',
                route: '/settings'
            },
        ],

    }),

}
</script>