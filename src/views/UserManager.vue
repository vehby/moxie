<template>
<v-data-table :headers="headers" :items="users" class="shadow-xl mx-5 my-5"  :search="search">
    <template v-slot:top>
        <v-toolbar flat color="white">
            <div class="d-none d-sm-flex"><v-toolbar-title>Users</v-toolbar-title></div>
            <v-spacer></v-spacer>
            <v-row>
             <v-col cols="10" sm="3" md="4" offset-md="8" class="px-5">
                 <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details>
            </v-text-field>
            </v-col>
            </v-row>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on" depressed>
                        <v-icon left>add</v-icon>
                        New User
                    </v-btn>
                </template>
                <v-card>
                    <v-form ref="form" v-model="valid">
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>

                                <v-row>

                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="editedItem.userName" autofocus label="User Name" required :rules="userNameRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.email" label="Email" required :rules="emailRules"></v-text-field>
                                    </v-col>

                                </v-row>

                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn depressed color="primary" @click="save">Save</v-btn>
                            <v-btn color="grey darken-1" text @click="close">Cancel</v-btn>

                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>
        </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
            edit
        </v-icon>
        <v-icon small @click="deleteItem(item)">
            delete
        </v-icon>
    </template>
    <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

    <template v-slot:item.status="{ item }">
        <v-chip :color="item.status" dark>{{ item.status }}</v-chip>
    </template>

</v-data-table>
</template>

<script>
export default {
    data: () => ({
        search: '',
        dialog: false,
        valid: false,
        userNameRules: [
            v => !!v || 'User name is required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
        ],

        date: new Date().toISOString().substr(0, 7),
        menu: false,
        modal: false,
        headers: [{
                text: 'User Name',
                align: 'left',
                sortable: true,
                value: 'userName'
            },
            {
                text: 'E-Mail',
                value: 'email'
            },
            {
                text: 'Last Active',
                value: 'lastactive'
            },
            {
                text: 'Actions',
                value: 'action',
                sortable: false
            },
        ],
        users: [],
        editedIndex: -1,
        editedItem: {
            userName: '',
            lastactive: '',
            email: '',

        },
        defaultItem: {
            userName: '',
            lastactive: '',
            email: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New User' : 'Edit User'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.users = [{
                    userName: 'vehby',
                    lastactive: "2019.01.17",
                    email: "kurtcebevehbi@gmail.com",
                },
                {
                    userName: 'Vehbikurtcebe',
                    lastactive: "2019.01.15",
                    email: "vehbi.kurtcebe@generalmobile.com",
                },
                {
                    userName: 'loremipsum',
                    lastactive: "2019.01.14",
                    email: "loremsitemat@ipsum.com",
                },
                {
                    userName: 'WorkPC',
                    lastactive: "2019.01.13",
                    email: "johndoe@doe.com",
                },
                {
                    userName: 'MyWindows',
                    lastactive: "2019.01.12",
                    email: "john@doe.com",
                },
                {
                    userName: 'Jelly PC',
                    lastactive: "2019.01.11",
                    email: "john@doe.com",
                },
                {
                    userName: 'PC Lolli',
                    lastactive: "2019.02.17",
                    email: "john@doe.com",
                },
                {
                    userName: 'HoneyPC',
                    lastactive: "2020.01.17",
                    email: "john@doe.com",
                },
                {
                    userName: 'MAC OS ',
                    lastactive: "2017.01.17",
                    email: "john@doe.com",
                },
                {
                    userName: 'Other PC',
                    lastactive: "2018.01.17",
                    email: "john@doe.com",
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.users.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.users.indexOf(item)
            confirm('Are you sure you want to delete this User?') && this.users.splice(index, 1)
        },

        close() {
            this.dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.users[this.editedIndex], this.editedItem)
            } else {
                this.users.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.Active {
    background-color: #27ae60 !important;
}

.Deactive {
    background-color: #c0392b !important;
}
</style>
