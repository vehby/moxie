<template>
<v-data-table :headers="headers" :items="tasks" class="shadow-xl mx-5 my-5" :search="search">
    <template v-slot:top>
        <v-toolbar flat color="white">
            <div class="d-none d-sm-flex">
                <v-toolbar-title>Tasks</v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
            <v-row>
                <v-col cols="10" sm="3" md="4" offset-md="8" class="px-5">
                    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-dialog v-model="dialog_new_task" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" depressed v-on="on">
                        <v-icon left>add</v-icon>
                        New Task
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

                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.scheduleName" label="Schedule Name" required :rules="nameRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.cronJob" label="Cron Job" required :rules="cronJob"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-autocomplete v-model="editedItem.agents" :items="agentName" dense multiple label="Select Agent"></v-autocomplete>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-autocomplete v-model="editedItem.scripts" :items="scriptName" dense label="Script"></v-autocomplete>
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

            <v-dialog v-model="dialog_edit_task" max-width="500px">

                <v-card>
                    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>

                                <v-row>

                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.scheduleName" label="Schedule Name" required :rules="nameRules"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.cronJob" label="Cron Job" required :rules="cronJob"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-autocomplete v-model="editedItem.agents" :items="agentName" dense multiple label="Select Agent"></v-autocomplete>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-autocomplete v-model="editedItem.scripts" :items="scriptName" dense label="Script"></v-autocomplete>
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

        <v-icon small class="mr-2">
            play_arrow
        </v-icon>

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

    <template v-slot:item.lastRunResult="{ item }">
        <v-icon :class="item.lastRunResult" small left>check</v-icon>
        <v-p :class="item.lastRunResult" dark>{{ item.lastRunResult }}</v-p>
    </template>

    <template v-slot:item.status="{ item }">
        <v-chip :color="item.status" dark>{{ item.status }}</v-chip>
    </template>

</v-data-table>
</template>

<script>
export default {

    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        search: '',
        textFieldProps: {
            appendIcon: 'event'
        },

        agents: [],
        agentName: [
            'Ahmet', 'Mehmet', 'Ali', 'John', 'Doe', 'Ayşe', 'Meltem'
        ],
        scripts: [],
        scriptName: [
            'MyWindows', 'Home PC', 'Other PC', 'Mac Book', 'Lorem', 'Ipsum'
        ],

        menu2: false,
        dialog_new_task: false,
        dialog_edit_task: false,
        valid: false,
        nameRules: [
            v => !!v || 'Schedule Name is required',
        ],
        menu: false,
        modal: false,
        headers: [{
                text: 'Schedule Name',
                align: 'left',
                sortable: true,
                value: 'scheduleName'
            },
            {
                text: 'Created Time',
                value: 'createdtime'
            },
            {
                text: 'Next Run Time',
                value: 'nextRunTime'
            },
            {
                text: 'Last Run Time',
                value: 'lastRunTime'
            },
            {
                text: 'Last Run Result',
                value: 'lastRunResult'
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
        tasks: [],
        editedIndex: -1,
        editedItem: {
            agents: '',
            scripts: '',
            cronJob: '',
            scheduleName: '',
            createdtime: '',
            nextRunTime: '',
            lastRunTime: '',
            lastRunResult: '',
            status: 'Deactive'
        },
        defaultItem: {
            agents: '',
            scripts: '',
            cronJob: '',
            scheduleName: '',
            createdtime: '',
            nextRunTime: '',
            lastRunTime: '',
            lastRunResult: '',
            status: 'Deactive'
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Task' : 'Edit Task'
        },
    },

    watch: {
        dialog_new_task(val) {
            val || this.close()
        },
        dialog_edit_task(val) {
            val || this.close2()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.tasks = [{

                    scheduleName: 'Urgent Tasks',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.01.17",
                    lastRunTime: "2019.01.17",
                    lastRunResult: "Succes",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'Routine Tasks',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.01.15",
                    lastRunTime: "2016.04.05",
                    lastRunResult: "Succes",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'Lorem Taks',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.01.14",
                    lastRunTime: "2019.01.17",
                    lastRunResult: "Fail",
                    status: "Suspended",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'Urgent Tasks',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.01.13",
                    lastRunTime: "2019.01.17",
                    lastRunResult: "Succes",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                    
                },
                {
                    scheduleName: 'My2019.01.17',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.01.12",
                    lastRunTime: "2015.01.21",
                    lastRunResult: "Succes",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'Jelly PC',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.01.11",
                    lastRunTime: "2019.01.17",
                    lastRunResult: "Succes",
                    status: "Suspended",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'PC Lolli',
                    nextRunTime: "2019.01.17",
                    createdtime: "2019.02.17",
                    lastRunTime: "2016.04.05",
                    lastRunResult: "Fail",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'HoneyPC',
                    nextRunTime: "2019.01.17",
                    createdtime: "2020.01.17",
                    lastRunTime: "2019.04.12",
                    lastRunResult: "Fail",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'MAC OS ',
                    nextRunTime: "2019.01.17",
                    createdtime: "2017.01.17",
                    lastRunTime: "2019.01.17",
                    lastRunResult: "Succes",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
                {
                    scheduleName: 'Other PC',
                    nextRunTime: "2019.01.17",
                    createdtime: "2018.01.17",
                    lastRunTime: "2019.02.03",
                    lastRunResult: "Succes",
                    status: "Runing",
                    agents: ['Ahmet', 'Mehmet'],
                    scripts:'Lorem',
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.tasks.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog_edit_task = true
        },

        deleteItem(item) {
            const index = this.tasks.indexOf(item)
            confirm('Are you sure you want to delete this Task?') && this.tasks.splice(index, 1)
        },

        close() {
            this.dialog_new_task = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.tasks[this.editedIndex], this.editedItem)
            } else {
                this.tasks.push(this.editedItem)
            }
            this.close()
        },

        close2() {
            this.dialog_edit_task = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save2() {
            if (this.editedIndex > -1) {

                Object.assign(this.tasks[this.editedIndex], this.editedItem)
            } else {
                this.tasks.push(this.editedItem)
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

.Runing {
    background-color: #27ae60 !important;
}

.Suspended {
    background-color: #c0392b !important;
}

.Succes {
    color: #27ae60 !important;
}

.Fail {
    color: #c0392b !important;
}
</style>
