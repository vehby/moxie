<template>
<div>
    <v-dialog v-model="dialog_log_details" max-width="800px">
        <template v-slot:activator="{ on }">
            <v-btn text depressed v-on="on">
               <v-icon small color="grey">info</v-icon>
            </v-btn>
        </template>
        <v-card>

            <template>
                <v-card>
                    <v-card-title>
                        Task Name
                        <v-spacer></v-spacer>
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
                    </v-card-title>
                    <template>
                        <v-data-table :headers="headers" :items="logDetials" :search="search">
                            <template v-slot:item.status="{ item }">
                                <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
                            </template>
                            <template v-slot:item.logdetailkibana="{ item }">
                                <a :href="item.logdetailkibana" target="_blank"><v-icon>exit_to_app</v-icon></a>
                            </template>
                        </v-data-table>
                    </template>
                </v-card>
            </template>

        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {
            dialog_log_details:'',
            search: '',
            headers: [{
                    text: 'Agent Name',
                    align: 'left',
                    value: 'agentName',
                },
                  {
                    text: 'Status',
                    value: 'status'
                },
                {
                    text: 'Log ID',
                    value : "logId",
                },
                
                {
                    text: 'Log Detail',
                    value: 'logdetailkibana',
                    sortable: false,
                },
              

            ],
            logDetials: [{
                    agentName: 'Macbook',
                    status: "Not Recived",
                    logdetailkibana: "https://google.com",
                    logId:"345345",
                },
                {
                    agentName: 'Linux',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                {
                    agentName: 'Home Laptop',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                 {
                    agentName: 'Linux',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                {
                    agentName: 'Home Laptop',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                 {
                    agentName: 'Linux',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                {
                    agentName: 'Home Laptop',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                 {
                    agentName: 'Linux',
                    status: "Running",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                {
                    agentName: 'Home Laptop',
                    status: "Succes",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                 {
                    agentName: 'Linux',
                    status: "Succes",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
                {
                    agentName: 'Home Laptop',
                    status: "Succes",
                    logdetailkibana: "https://google.com",
                    logId: "42342"
                },
            ],
        }
    },
     methods: {
      getColor (status) {
        if (status == "Not Recived") return 'red'
        else if (status == "Running") return 'blue'
        else return 'green'
      },
    },
}
</script>


<style>
    a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}
</style>