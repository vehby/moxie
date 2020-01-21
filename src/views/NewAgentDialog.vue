<template>
    <v-dialog v-model="dialogNewAgent" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on" depressed>
                        <v-icon left>add</v-icon>
                        New Agent
                    </v-btn>
                </template>
                <v-card>
                    <v-form ref="form" lazy-validation="true">
                        
                        <v-card-title>
                            <span class="headline">Save</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container v-if="!isSaving">
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
                                    Succesfully Created
                                </v-alert>
                                <v-row >
                                    <v-col cols="12" sm="12" md="12">
                                        <v-text-field v-model="createdItem.name"  label="Agent Name" required :rules="nameRules" :disabled="isSuccess"></v-text-field>
                                         <v-text-field v-model="createdItem.hostKey"  label="Host Key" required :rules="hostKeyRules" :disabled="isSuccess"></v-text-field>
                                         <v-text-field v-model="createdItem.agentId"  label="AgentId" :loading='isLoading' disabled>
                                            
                                         </v-text-field>

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

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn v-show="!isSuccess && !isSaving" depressed color="primary" @click="save">Save</v-btn>
                            <v-btn color="grey darken-1" text @click="close">Cancel</v-btn>
                        </v-card-actions>
                    </v-form>

                </v-card>
            </v-dialog>
</template>

<script>
import Api from '../api';
    export default {
        data: () => ({
            isSuccess:false,
            isSaving: false,
            isLoading: true,
            dialogNewAgent: false,
            createdItem:{
                name:'',
                hostKey: '',
                agentId: ''
            },
            nameRules: [
                v => !!v || 'Name is required',
            ],
            hostKeyRules: [
                v => !!v || 'Key is required',
            ],
            errorMessage: ''
        }),
        watch:{
            dialogNewAgent(value){
                if(value){
                    this.onOpened();
                }else{
                    this.onClosed();
                }
            }
        },
        methods:{
            async onOpened(){
                this.isLoading = true;    
                let {Id}  = await Api.createAgent();
                this.createdItem.agentId = Id;
                this.isLoading = false;
            },
            async save(){
                if(!this.$refs.form.validate()){return;}
                this.errorMessage = '';
                this.isSaving = true;
                try{
                    await Api.registerAgent({
                        Id: this.createdItem.agentId ,
                        Name: this.createdItem.name, 
                        HostKey: this.createdItem.hostKey
                    });
                    this.isSuccess = true;
                }catch(e){
                    this.errorMessage = e.response.data.reason;
                }
                this.isSaving = false;
                
            },
            close(){
                this.dialogNewAgent = false;
            },
            onClosed(){
                this.clear();
            },
            clear(){
                this.createdItem.name  = '';
                this.createdItem.hostKey ='';
                this.createdItem.agentId = '';
                this.isSuccess = false;
                this.isSaving = false;
            }
        }
    }
</script>