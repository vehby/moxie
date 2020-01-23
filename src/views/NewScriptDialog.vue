<template>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" v-on="on" depressed>
                <v-icon left>add</v-icon>
                New Script</v-btn>
          </template>
          
          <v-card>
              <v-form
              ref="form"
              v-model="valid">
            <v-card-title>
              <span class="headline">Create Script </span>
            </v-card-title>
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
            <v-card-text>
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
                     
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.Name" :disabled="!!success" name="Name" autofocus label="Script Name" required :rules="scriptNameRules"></v-text-field>
                  </v-col>
                  <!-- <v-col cols="12" sm="6" md="6">
                    <v-text-field disabled v-model="editedItem.createdtime" label="Created Time"></v-text-field>
                  </v-col> -->
                  <v-col cols="12" sm="6" md="12">
                    <v-textarea v-model="editedItem.Script" :disabled="!!success" name="Script" label="Command Line" required :rules="commandLineRules"></v-textarea>
                  </v-col>
                  <!-- <v-col cols="12" sm="6" md="12">
                    <v-text-field v-model="editedItem.Description" :disabled="!!success" name="Description" label="Description" required :rules="descriptionRules"></v-text-field>
                  </v-col> -->
                  <v-col cols="12" sm="6" md="12">
                    <v-file-input accept="application/zip" :disabled="!!success" name="File" show-size counter label="File input" required :rules="filesRules"></v-file-input>
                  </v-col>


                </v-row>
                
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn depressed color="primary" @click="save">Save</v-btn>
              <v-btn color="grey darken-1"  text @click="closeDialog">Cancel</v-btn>
              
            
            </v-card-actions>
             </v-form>
          </v-card>
        </v-dialog>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import {OPEN_CREATE_DIALOG , CLOSE_CREATE_DIALOG, CREATE_SCRIPT} from '../store/modules/script';
export default {
    computed: {
        dialog: {
            get(){ return this.$store.state.script.createDialogOpen},
            set(val){
                if(val){
                    this.openDialog()  
                }else{
                    this.closeDialog()
                }
            }
        },
        ...mapState('script',{
            loading: (state) => state.createLoading,
            error: (state) => state.createError,
            success: (state) => state.createSuccess
        })
    },
    watch: {
        dialog(val){
            if(val){
                this.editedItem = {
                    Name: '',
                    Description: '',
                    Script:'',
                    File:''
                }
            }
        }
    },
    methods: {
        save(){
            if(!this.$refs.form.validate()){return;}
            let elem = this.$refs.form.$el;
            let data= new FormData(elem);
            this.createScript(data);
        },

        ...mapActions('script',{
            openDialog: OPEN_CREATE_DIALOG,
            closeDialog: CLOSE_CREATE_DIALOG,
            createScript: CREATE_SCRIPT
        })
    },
    data: () => ({
        valid: false,
        scriptNameRules: [
            v => !!v || 'Script name is required',
        ],
        descriptionRules: [
            v => !!v || 'Description is required',
        ],
        filesRules: [
            v => !!v || 'File is required',
        ],
        commandLineRules: [
            v => !!v || 'Command line is required',
        ],
        editedItem: {
            Name: '',
            Description: '',
            Script:'',
            File:''
        },
    })
}
</script>