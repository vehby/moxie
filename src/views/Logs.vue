<template>
<div>
    <v-card class="shadow-xl mx-5 my-5 pa-2">
        <v-card-title>How do i see logs details?</v-card-title>
        <v-card-subtitle>You can view the log details from kibana.</v-card-subtitle>
        <v-card-text>Kibana is an open source data visualization dashboard for Elasticsearch. It provides visualization capabilities on top of the content indexed on an Elasticsearch cluster. Users can create bar, line and scatter plots, or pie charts and maps on top of large volumes of data.</v-card-text>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12">
                    <v-img src="../assets/logs-img.png" lazy-src="../assets/logs-img.png" max-width="600"></v-img>
                </v-col>
            </v-row>
        </v-container>
        <v-card-actions>
            <a href="https://www.elastic.co/kibana" target="_blank"><v-btn color="primary" class="text-capitalize" depressed>View Log Details <v-icon left>keyboard_arrow_right</v-icon> </v-btn>
        </a>
        </v-card-actions>
    </v-card>


</div>
</template>

<script>
export default {
    data: () => ({
       
    }),

}
</script>

<style>
.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
