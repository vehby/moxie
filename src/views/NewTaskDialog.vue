<template>
    <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" depressed v-on="on">
                        <v-icon left>add</v-icon>
                        New Task
                    </v-btn>
                </template>
                <v-card>
                    <v-form ref="form" >
                        <v-card-title>
                            <span class="headline">Create Task</span>
                        </v-card-title>

                        <v-card-text>
                            <v-alert
                                v-show="!!error"
                                text
                                prominent
                                type="error"
                                icon="mdi-alert-circle"
                            >
                                {{error}}
                            </v-alert>
                            <v-alert
                                v-show="!!success"
                                text
                                prominent
                                type="success"
                                icon="mdi-cloud-check"
                            >
                                Succesfully Created
                            </v-alert>
                            <v-container class="text-center" v-if="loading">
                                <v-progress-circular
                                    :size="70"
                                    :width="7"
                                    color="purple"
                                    indeterminate
                                ></v-progress-circular>
                            </v-container>
                            <v-container v-else>

                                <v-row>

                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.Name" label="Name" required :rules="nameRules" :disabled="success"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="12">
                                        <v-text-field v-model="editedItem.CronDefinition" label="Cron Definition"  :disabled="success"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-autocomplete v-model="editedItem.agents" :items="agents" item-text="Name" item-value="Id" dense multiple label="Select Agents" :loading="agentsLoading" :disabled="success || agentsLoading"></v-autocomplete>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-autocomplete v-model="editedItem.ScriptId" :items="scripts" item-text="Name" item-value="Id" dense label="Select Script" :loading="scriptsLoading" :disabled="success || scriptsLoading"></v-autocomplete>
                                    </v-col>

                                </v-row>

                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn depressed color="primary" v-show="!success && !loading" @click="save">Save</v-btn>
                            <v-btn color="grey darken-1" text @click="closeCreateDialog">Cancel</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-dialog>
</template>

<script>
import { mapActions, mapState} from 'vuex';
import {CLOSE_CREATE_TASK_DIALOG , OPEN_CREATE_TASK_DIALOG,CREATE_TASK} from '../store/modules/task'; 
export default {
    computed: {
        dialog: {
            get(){return this.$store.state.task.createDialog},
            set(val){ if(val){ this.openCreateDialog() }else{this.closeCreateDialog() }}
        },
        ...mapState('script',{
            scripts: (state ) => state.scripts,
            scriptsLoading: (state) => state.isLoading,

        }),
        ...mapState('agent', {
            agents: (state ) => state.agents,
            agentsLoading: (state) => state.listLoading
        }),
        ...mapState('task', {
            loading: (state) => state.createLoading,
            error: (state) => state.createError,
            success: (state) => state.createSuccess
        })
    },
    watch:{
        dialog(val){
            if(val){
                Object.assign(this.editedItem, {
                    agents: [],
                    ScriptId: '',
                    CronDefinition: '',
                    Name:''
                })
            }
        }
    },
    methods: {
        ...mapActions('task', {
            openCreateDialog: OPEN_CREATE_TASK_DIALOG,
            closeCreateDialog: CLOSE_CREATE_TASK_DIALOG,
            createTask: CREATE_TASK
        }),

        save(){
            if(!this.$refs.form.validate()){return;}

            if(this.editedItem.CronDefinition && this.editedItem.CronDefinition.trim() == ''){
                delete this.editedItem.CronDefinition
            }

            this.createTask(this.editedItem);
        },
    },
    data: () => ({
        nameRules: [
            v => !!v || 'Task Name is required',
        ],
        editedItem: {
            agents: [],
            ScriptId: '',
            CronDefinition: '',
            Name:''
        }
    }),
    
}
</script>