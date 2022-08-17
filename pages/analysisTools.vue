<template>
  <div>
    <v-tabs grow>
      <v-tab>
        <h4>Advanced Chart</h4>
      </v-tab>
      <v-tab>
        <h4>Economic Calendar</h4>
      </v-tab>
      <v-tab>
        <h4>Exchange Prices</h4>
      </v-tab>


      <v-tab-item>
        <v-card>
          <v-card-text>
            <AdvancedChart />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!-- calender -->
      <v-tab-item>
        <v-card class="text-center">
          <v-card-text>
            <EconomicCalender />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <!-- prices -->
      <v-tab-item>
        <v-card class="text-center">
          <v-card-text>
            <ExchangePrices />
          </v-card-text>
        </v-card>
        </v-tab-item> 


    </v-tabs>
  </div>
</template>
<script>
export default {
  layout: 'tools',
  auth: false,
  data() {
    return {
    };
  },
};
</script>
