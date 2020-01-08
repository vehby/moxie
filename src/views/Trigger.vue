<template>
<v-data-table :headers="headers" :items="triggers" class="shadow-xl mx-5 my-5"  :search="search">
    <template v-slot:top>
        <v-toolbar flat color="white">
            <div class="d-none d-sm-flex"><v-toolbar-title>Trigger</v-toolbar-title></div>
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
                        New Trigger
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
                                        <v-text-field v-model="editedItem.triggerName" autofocus label="Trigger Name" required :rules="triggerNameRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.description" label="Description" required :rules="descriptionRules"></v-text-field>
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
        triggerNameRules: [
            v => !!v || 'Trigger name is required',
        ],
        descriptionRules: [
            v => !!v || 'Description is required',
        ],

        date: new Date().toISOString().substr(0, 7),
        menu: false,
        modal: false,
        headers: [{
                text: 'Trigger Name',
                align: 'left',
                sortable: true,
                value: 'triggerName'
            },
            {
                text: 'Description',
                value: 'description'
            },
            {
                text: 'Created Time',
                value: 'createdtime'
            },
            {
                text: 'Actions',
                value: 'action',
                sortable: false
            },
        ],
        triggers: [],
        editedIndex: -1,
        editedItem: {
            triggerName: '',
            createdtime: '',
            description: '',

        },
        defaultItem: {
            triggerName: '',
            createdtime: '',
            description: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Trigger' : 'Edit Trigger'
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
            this.triggers = [{
                    triggerName: 'MyWindows',
                    createdtime: "2019.01.17",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'MyPC',
                    createdtime: "2019.01.15",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'HomePC',
                    createdtime: "2019.01.14",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'WorkPC',
                    createdtime: "2019.01.13",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'MyWindows',
                    createdtime: "2019.01.12",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'Jelly PC',
                    createdtime: "2019.01.11",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'PC Lolli',
                    createdtime: "2019.02.17",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'HoneyPC',
                    createdtime: "2020.01.17",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'MAC OS ',
                    createdtime: "2017.01.17",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    triggerName: 'Other PC',
                    createdtime: "2018.01.17",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.triggers.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.triggers.indexOf(item)
            confirm('Are you sure you want to delete this Trigger?') && this.triggers.splice(index, 1)
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
                Object.assign(this.triggers[this.editedIndex], this.editedItem)
            } else {
                this.triggers.push(this.editedItem)
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
