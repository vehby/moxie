<template>
    <div>
        <v-container class="grey lighten-5">
            <v-row>

                <v-col cols="12" sm="3" v-for="item in smallWidget" :key="item.swh1">
                    <v-card class="mx-auto shadow-xl">
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="80" color="grey lighten-4">
                                <v-icon large>{{item.swicon}}</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <div class="overline mb-4">{{item.swh1}}</div>
                                <v-list-item-title class="headline mb-1">{{item.swcount}}</v-list-item-title>
                                <v-list-item-subtitle>{{item.swdesc}}</v-list-item-subtitle>
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
          smallWidget: [
            { swicon: 'laptop_mac', swh1: 'Agent', swcount:'21',swdesc :'Greyhound divisely hello coldly' },
            { swicon: 'queue_play_next', swh1: 'SCRIPTS', swcount:'21',swdesc :'Greyhound divisely hello coldly' },
            { swicon: 'playlist_add_check', swh1: 'TASKS', swcount:'21',swdesc :'Greyhound divisely hello coldly' },
            { swicon: 'playlist_play', swh1: 'TRIGGER', swcount:'21',swdesc :'Greyhound divisely hello coldly' },
          ],
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