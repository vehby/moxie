<template>
  <v-data-table
    :headers="headers"
    :items="agents"
    class="shadow-xl mx-5 my-5"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Agents</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn outlined color="red" v-on="on">
                <v-icon left>add</v-icon>
                New Agent</v-btn>
          </template>
          <v-card>
              <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                   
                <v-row>
                     
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Agent Name" required :rules="nameRules"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field v-model="editedItem.key" label="Key" required :rules="keyRules"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.createdtime" label="Created Time"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.platform" label="Platform"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.createduser" label="Created User"></v-text-field>
                  </v-col>
                 
                </v-row>
                
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save" >Save</v-btn>
            </v-card-actions>
             </v-form>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      
      <v-icon
        small
        class="mr-2"
      >
        play_arrow
      </v-icon>
      <v-icon
        small
        class="mr-2"
      >
        pause
      </v-icon>

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
      dialog: false,
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      keyRules: [
        v => !!v || 'Key is required',
        v => v.length >= 10 || 'Key must be less than 10 characters',
      ],
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      headers: [
        {
          text: 'Agent Name', align: 'left', sortable: true, value: 'name'},
        { text: 'Key', value: 'key' },
        { text: 'Created Time', value: 'createdtime' },
        { text: 'Platform', value: 'platform' },
        { text: 'Created User', value: 'createduser' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      agents: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        key: '',
        createdtime :"",
        platform: '',
        createduser: '',
        status:'Deactive'
      },
      defaultItem: {
        name: '',
        key: '',
        createdtime :'',
        platform: '',
        createduser: ''
        
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Agent' : 'Edit Agent'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.agents = [
          {
            name: 'MyWindows',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2019.01.17",
            platform: "Windows",
            createduser: "Murat Çim",
            status: "Active",
          },
          {
            name: 'MyPC',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime:"2019.01.15",
            platform: "Mac",
            createduser: "Vehbi Kurtcebe",
            status: "Active",
          },
          {
            name: 'HomePC',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2019.01.14",
            platform: "Windows",
            createduser: "Lorem Ipsum",
            status: "Active",
          },
          {
            name: 'WorkPC',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2019.01.13",
            platform: "Windows",
            createduser: "John Doe",
            status: "Deactive",
          },
          {
            name: 'MyWindows',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2019.01.12",
            platform: "Mac",
            createduser: "Salamanya Doruk",
            status: "Active",
          },
          {
            name: 'Jelly PC',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2019.01.11",
            platform: "Windows",
            createduser: "Ahmet Ozbey",
            status: "Deactive",
          },
          {
            name: 'PC Lolli',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2019.02.17",
            platform: "Mac",
            createduser: "John Doe",
            status: "Active",
          },
          {
            name: 'HoneyPC',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2020.01.17",
            platform: "Linux",
            createduser: "John Doe",
            status: "Active",
          },
          {
            name: 'MAC OS ',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2017.01.17",
            platform: "Windows",
            createduser: "John Doe",
            status: "Active",
          },
          {
            name: 'Other PC',
            key: "K`^p%8<EsIZWv~X0aI}+q9LABz7yZg",
            createdtime: "2018.01.17",
            platform: "Windows",
            createduser: "John Doe",
            status: "Active",
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.agents.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.agents.indexOf(item)
        confirm('Are you sure you want to delete this Agent?') && this.agents.splice(index, 1)
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
          Object.assign(this.agents[this.editedIndex], this.editedItem)
        } else {
          this.agents.push(this.editedItem)
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