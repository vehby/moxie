<template>
    <v-dialog  v-model="openEdit" max-width="500px">
                <v-card>
                    <v-form ref="form" v-model="valid" :lazy-validation="false">
                        <v-card-title>
                            <span class="headline">Edit Agent</span>
                        </v-card-title>
                        <v-alert
                            v-show="!!errorMessage"
                            text
                            prominent
                            type="error"
                            icon="mdi-alert-circle"
                        >
                            {{errorMessage}}
                        </v-alert>
                        <v-alert
                            v-show="!!isSuccess"
                            text
                            prominent
                            type="success"
                            icon="mdi-cloud-check"
                        >
                            Succesfully Updated
                        </v-alert>
                        <v-card-text>
                            <v-container v-if="!isSaving">
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="editedItem.Name" label="Agent Name" :disabled="!!isSuccess" required :rules="nameRules"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-container class="text-center" v-else>
                                <v-progress-circular
                                    :size="70"
                                    :width="7"
                                    color="purple"
                                    indeterminate
                                ></v-progress-circular>
                            </v-container>
                        </v-card-text>
                        
                        <v-card-actions v-if="!isSaving">
                            <v-spacer></v-spacer>
                            <v-btn v-show="!isSuccess" depressed color="primary" @click="save">Save</v-btn>
                            <v-btn color="grey darken-1" text @click="close">{{isSuccess ? "Close" : "Cancel"}}</v-btn>
                        </v-card-actions>
                    </v-form>

                </v-card>
            </v-dialog>
</template>

<script>
import Api from '../api';
import {mapState, mapActions} from 'vuex';
import {CLOSE_EDIT_DIALOG , OPEN_EDIT_DIALOG ,FETCH_AGENTS} from '../store/modules/agent';

export default {
    data: () => ({
        isSuccess:false,
        valid: false,
        nameRules: [
            v => !!v || 'Name is required',
        ],
        isSaving: false,
        errorMessage: '',
        
    }),
    computed: {
        ...mapState('agent', {
            editedItem: (state) => state.editedAgent,
        }),
        openEdit: {
            get(){ return this.$store.state.agent.openEditDialog},
            set(val){ 
                if(val)
                    this.openEditDialog()
                else
                    this.closeEditDialog()
            }
        }
    },
    watch: {
        openEdit(val) {
            if(val){
                //this.onOpened();
            }else{
                this.onClosed();
            }
        },
    },
    
    methods: {
        onClosed(){
            this.clear();
        },
        clear(){
            //Object.assign(this.editedItem , {Name: '' , Id: ''})
            this.isSuccess = false;
            this.errorMessage = "";
            this.isSaving = false;
            this.closeEditDialog();
            
        },
        close() {
            this.closeEditDialog();
        },
        async save() {
            if(!this.$refs.form.validate()){return;}
            this.isSaving = true;
            this.errorMessage = "";
            this.isSuccess = false;
            try{
                await Api.updateAgent({
                    Name: this.editedItem.Name,
                    Id: this.editedItem.Id
                });
                this.isSuccess = true;
            }catch(e){
                this.errorMessage = e.response.data.reason
            }
            this.isSaving = false;
            this.refreshAgents();
        },
        ...mapActions('agent' , {
            closeEditDialog: CLOSE_EDIT_DIALOG,
            openEditDialog: OPEN_EDIT_DIALOG,
            refreshAgents: FETCH_AGENTS
        }),
        
    }
}
</script>