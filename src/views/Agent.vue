<template>
<div>
<v-skeleton-loader
        v-show="isLoading"
        ref="skeleton"
        type="table"
        class="mx-auto"
      ></v-skeleton-loader>
<v-data-table v-if="!isLoading" :headers="headers" :items="agents" class="shadow-xl mx-5 my-5"  :search="search">
    <template v-slot:top>
        <v-toolbar flat color="white">
            <div class="d-none d-sm-flex">
            <v-toolbar-title>Agents
                <v-progress-circular
                    v-show="isRefreshing"
                    indeterminate
                    color="primary"
                ></v-progress-circular> 
            </v-toolbar-title>

            </div>
            <v-spacer></v-spacer>
            <v-row>
             
             <v-col cols="10" sm="3" md="4" offset-md="8" class="px-5">
                 <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                >
                </v-text-field>
                
            
            </v-col>
            </v-row>
            
            <new-agent-dialog ></new-agent-dialog>
            <edit-agent-dialog />

        </v-toolbar>
    </template>
 
    <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="() => openEditDialog(item)">
            edit
        </v-icon>
        <v-icon small @click="() => deleteItem(item)">
            delete
        </v-icon>
    </template>
    <template v-slot:no-data>
        <!-- <v-btn color="primary" @click="() => fetchAgents()">Reset</v-btn> -->
    </template>

    <template v-slot:item.Status="{ item }">
        <v-chip :color="item.Status" dark>{{ item.Status }}</v-chip>
    </template>

    <template v-slot:item.OS="{ item }">
        {{ item.OS || "not received" }}
    </template>

</v-data-table>
</div>
</template>

<script>
import NewAgentDialog from './NewAgentDialog';
import EditAgentDialog from './EditAgentDialog';
import {mapState , mapActions} from 'vuex';
import {FETCH_AGENTS ,  OPEN_EDIT_DIALOG, CLOSE_EDIT_DIALOG } from '../store/modules/agent';
export default {
    computed: mapState('agent',{
        agents: (state ) => state.agents,
        isRefreshing: (state) => state.listRefreshing,
        isLoading: (state) => state.listLoading
    }),
    components: {
        'new-agent-dialog': NewAgentDialog,
        'edit-agent-dialog': EditAgentDialog
    },
    data: () => ({
        testingCode: "1234",
        search: '',
        valid: false,
        nameRules: [
            v => !!v || 'Name is required',
        ],
        keyRules: [
            v => !!v || 'Key is required',
        ],
        menu: false,
        modal: false,
        headers: [
            {
                text: 'Agent Name',
                align: 'left',
                sortable: true,
                value: 'Name'
            },
            {
                text: 'HookId',
                value: 'HookId'
            },
            {
                text: 'HostKey',
                value: 'HostKey'
            },
            {
                text: 'Created Time',
                value: 'createdAt'
            },
            {
                text: 'Platform',
                value: 'OS'
            },
            {
                text: 'Status',
                value: 'Status'
            },
            {
                text: 'Actions',
                value: 'action',
                sortable: false
            },
        ],
        defaultItem: {
            name: '',
            key: '',
            createdtime: '',
            platform: '',
            createduser: ''

        },
    }),

    created() {
        
        this.fetchAgents(false);
    },

    methods: {

        deleteItem(item) {
            const index = this.agents.indexOf(item)
            confirm('Are you sure you want to delete this Agent?') && this.agents.splice(index, 1)
        },

        ...mapActions('agent', {
            fetchAgents: FETCH_AGENTS,
            openEditDialog: OPEN_EDIT_DIALOG,
            closeEditDialog: CLOSE_EDIT_DIALOG
        })

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
