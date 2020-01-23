<template>
<div>
<v-skeleton-loader
        v-if="isLoading"
        ref="skeleton"
        type="table"
        class="mx-auto"
      ></v-skeleton-loader>
  <v-data-table
    :headers="headers"
    :items="scripts"
    class="shadow-xl mx-5 my-5"
     :search="search"
     v-else
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <div class="d-none d-sm-flex">
        <v-toolbar-title>Scripts
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
            hide-details>
            </v-text-field>
            </v-col>
          </v-row>
      <new-script-dialog/>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
      <v-icon
        small
        class="ml-2"
      >
        get_app
      </v-icon>
    </template>
    <template v-slot:no-data>
      
    </template>

    <template v-slot:item.status="{ item }">
      <v-chip :color="item.status" dark>{{ item.status }}</v-chip>
    </template>


  </v-data-table>
</div>
</template>


<script>
  import NewScriptDialog from './NewScriptDialog'
import { mapActions, mapState } from 'vuex'
import { FETCH_SCRIPTS } from '../store/modules/script'
  export default {
    components:{
      'new-script-dialog': NewScriptDialog
    },
    data: () => ({
      search: '',
      
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      headers: [
        {text: 'Script Name', align: 'left', sortable: true, value: 'Name'},
        { text: 'Description', value: 'description' },
        { text: 'Created Time', value: 'createdAt' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      
      editedIndex: -1,

      defaultItem: {
       scriptName: '',
        createdtime :'',
        description: '',
        commandLine:'',
        files:''
      },
    }),

    computed: mapState('script',{
      scripts: (state) => state.scripts ,
      isRefreshing: (state) => state.isRefreshing,
      isLoading: (state) => state.isLoading
    }),

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.fetchScripts(false);
    },

    methods: {

      ...mapActions('script',{
        fetchScripts : FETCH_SCRIPTS
      }),

      editItem (item) {
        this.editedIndex = this.scripts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.scripts.indexOf(item)
        confirm('Are you sure you want to delete this Script?') && this.scripts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.scripts[this.editedIndex], this.editedItem)
        } else {
          this.scripts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>
.shadow-xl	{
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.Active{
    background-color: #27ae60!important;
}
.Deactive{
    background-color: #c0392b!important;
}
</style>