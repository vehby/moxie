<template>
    <div>
        <v-container class="grey lighten-5">
            <v-row>
                <v-col cols="12" sm="3">
                     <v-card
                        class="mx-auto shadow-xl"
                    >
                        <v-list-item three-line>
                            <v-list-item-avatar
                            tile
                            size="80"
                            color="grey lighten-4">
                            <v-icon large>laptop_mac</v-icon>
                            </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="overline mb-4">AGENT</div>
                            <v-list-item-title class="headline mb-1">12</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        
                        </v-list-item>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="3">
                     <v-card
                        class="mx-auto shadow-xl"
                    >
                    
                        <v-list-item three-line>
                            <v-list-item-avatar
                            tile
                            size="80"
                            color="grey lighten-4">
                            <v-icon large>queue_play_next</v-icon>
                            </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="overline mb-4">SCRIPTS</div>
                            <v-list-item-title class="headline mb-1">21</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        
                        </v-list-item>
                    </v-card>
                </v-col>

                <v-col cols="12" sm="3">
                     <v-card
                        class="mx-auto shadow-xl"
                    >
                    
                        <v-list-item three-line>
                            <v-list-item-avatar
                            tile
                            size="80"
                            color="grey lighten-4">
                            <v-icon large>playlist_add_check</v-icon>
                            </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="overline mb-4">TASKS</div>
                            <v-list-item-title class="headline mb-1">9</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        
                        </v-list-item>
                    </v-card>
                </v-col>

                 <v-col cols="12" sm="3">
                    <v-card
                        class="mx-auto shadow-xl"
                    >
                    
                        <v-list-item three-line>
                            <v-list-item-avatar
                            tile
                            size="80"
                            color="grey lighten-4">
                            <v-icon large>playlist_play</v-icon>
                            </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="overline mb-4">TRIGGER</div>
                            <v-list-item-title class="headline mb-1">9</v-list-item-title>
                            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                        </v-list-item-content>

                        
                        </v-list-item>
                    </v-card>    
                </v-col>
            </v-row>
        </v-container>

        <v-container >
            <v-row >
                <v-col cols="12" sm="6" class="gcharts-d">
                    <v-card class="shadow-xl">
                     <h5 class="py-4 px-4">SCRIPTS</h5>
                    <GChart
                        type="PieChart"
                        :data="chartData"
                        :options="chartOptions"
                    />
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" class="gcharts-d">
                    <v-card class="shadow-xl">
                     <h5 class="py-4 px-4">JOBS</h5>
                    <GChart
                        type="PieChart"
                        :data="chartData2"
                        :options="chartOptions2"
                    />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    
    </div>
</template>

<script>
export default {
    data () {
      return {
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
          ['Status', 'Per'],
          ['Unresponsive', 2],
          ['Disconnected',  2],
          ['Busy',      2],
          ['Aviable',     11]
        ],
        chartData2: [
          ['Status', 'Per'],
          ['Succesful',     20],
          ['Faulted',      2],
          ['Canceled',  2],
        ],
        chartOptions: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          height: 400,
        },
        chartOptions2: {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          height: 400
        }
      }
    }
  }

</script>

<style scoped>
.shadow-xl	{
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>