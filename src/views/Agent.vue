<template>
<v-data-table :headers="headers" :items="agents" class="shadow-xl mx-5 my-5"  :search="search">
    <template v-slot:top>
        <v-toolbar flat color="white">
            <div class="d-none d-sm-flex">
            <v-toolbar-title>Agents</v-toolbar-title>

            </div>
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
            <v-dialog v-model="dialogNewAgent" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on" depressed>
                        <v-icon left>add</v-icon>
                        New Agent
                    </v-btn>
                </template>
                <v-card>
                    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>

                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="editedItem.name" autofocus label="Agent Name" required :rules="nameRules"></v-text-field>
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

            <v-dialog v-model="dialogEditAgent" max-width="500px">

                <v-card>
                    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>

                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="editedItem.name" label="Agent Name" required :rules="nameRules"></v-text-field>
                                    </v-col>
                                    
                                </v-row>

                            </v-container>
                        </v-card-text>

                        

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn depressed color="primary" @click="save2">Save</v-btn>
                            <v-btn color="grey darken-1" text @click="close2">Cancel</v-btn>
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
        testingCode: "1234",
        search: '',
        dialogNewAgent: false,
        dialogEditAgent: false,
        valid: false,
        nameRules: [
            v => !!v || 'Name is required',
        ],
        keyRules: [
            v => !!v || 'Key is required',
        ],
        menu: false,
        modal: false,
        headers: [{
                text: 'Agent Name',
                align: 'left',
                sortable: true,
                value: 'name'
            },
            {
                text: 'Key',
                value: 'key'
            },
            {
                text: 'Created Time',
                value: 'createdtime'
            },
            {
                text: 'Platform',
                value: 'platform'
            },
            {
                text: 'Created User',
                value: 'createduser'
            },
            {
                text: 'Status',
                value: 'status'
            },
            {
                text: 'Actions',
                value: 'action',
                sortable: false
            },
        ],
        agents: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            key: '',
            createdtime: "",
            platform: '',
            createduser: '',
            status: 'Disconnected'
        },
        defaultItem: {
            name: '',
            key: '',
            createdtime: '',
            platform: '',
            createduser: ''

        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Agent' : 'Edit Agent'
        },
    },

    watch: {
        dialogNewAgent(val) {
            val || this.close()
        },
        dialogEditAgent(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.agents = [{
                    name: 'MyWindows',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.01.17",
                    platform: "Windows",
                    createduser: "Murat Çim",
                    status: "Connected",
                },
                {
                    name: 'MyPC',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.01.15",
                    platform: "Mac",
                    createduser: "Vehbi Kurtcebe",
                    status: "Connected",
                },
                {
                    name: 'HomePC',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.01.14",
                    platform: "Windows",
                    createduser: "Lorem Ipsum",
                    status: "Connected",
                },
                {
                    name: 'WorkPC',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.01.13",
                    platform: "Windows",
                    createduser: "John Doe",
                    status: "Disconnected",
                },
                {
                    name: 'MyWindows',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.01.12",
                    platform: "Mac",
                    createduser: "Salamanya Doruk",
                    status: "Connected",
                },
                {
                    name: 'Jelly PC',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.01.11",
                    platform: "Windows",
                    createduser: "Ahmet Ozbey",
                    status: "Disconnected",
                },
                {
                    name: 'PC Lolli',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2019.02.17",
                    platform: "Mac",
                    createduser: "John Doe",
                    status: "Connected",
                },
                {
                    name: 'HoneyPC',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2020.01.17",
                    platform: "Linux",
                    createduser: "John Doe",
                    status: "Connected",
                },
                {
                    name: 'MAC OS ',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2017.01.17",
                    platform: "Windows",
                    createduser: "John Doe",
                    status: "Connected",
                },
                {
                    name: 'Other PC',
                    key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
                    createdtime: "2018.01.17",
                    platform: "Windows",
                    createduser: "John Doe",
                    status: "Connected",
                },
            ]
        },


        editItem(item) {
            this.editedIndex = this.agents.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogEditAgent = true
        },

        deleteItem(item) {
            const index = this.agents.indexOf(item)
            confirm('Are you sure you want to delete this Agent?') && this.agents.splice(index, 1)
        },

        close() {
            this.dialogNewAgent = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        close2() {
            this.dialogEditAgent = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.agents[this.editedIndex], this.editedItem)
            } else {
                this.agents.push(this.editedItem)
            }
            this.close()
        },

        save2() {
            if (this.editedIndex > -1) {
                Object.assign(this.agents[this.editedIndex], this.editedItem)
            } else {
                this.agents.push(this.editedItem)
            }
            this.close2()
        },

    },

}
</script>

<style scoped>
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.Connected {
    background-color: #27ae60 !important;
}

.Disconnected {
    background-color: #c0392b !important;
}
</style>
