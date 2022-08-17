<template>
  <div>
    <v-tabs grow v-if="this.$i18n.locale === 'en'">
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
      <v-tab-item class="text-center">
         <object data="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&importance=1,2,3&features=datepicker,timezone,timeselector,filters&countries=25,54,32,6,37,107,24,59,72,22,17,39,14,10,35,21,43,170,56,52,36,110,11,26,9,12,63,143,4,5&calType=day&timeZone=63&lang=1" width="650" height="900px"></object>
        <div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif;"><span
            style="font-size: 11px;color: #333333;text-decoration: none;">Real Time Economic Calendar provided by <a
              href="https://www.investing.com/" rel="nofollow" target="_blank"
              style="font-size: 11px;color: #06529D; font-weight: bold;"
              class="underline_link">Investing.com</a>.</span>
        </div>
      </v-tab-item>
      <!-- prices -->
      <v-tab-item class="text-center">

        <object data="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,2,4,7,5,8,6,1525,1538,66,97,10254,10290,2126,18" width="100%" height="800px" ></object>
        <div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif;">Powered by <a
            href="https://www.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
            target="_blank" rel="nofollow">Investing.com</a></div>
      </v-tab-item>


    </v-tabs>
    <v-tabs grow v-if="this.$i18n.locale === 'ar'">
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
      <v-tab-item class="text-center">
          <object data="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&importance=1,2,3&features=datepicker,timezone,timeselector,filters&countries=25,54,32,6,37,107,24,59,72,22,17,39,14,10,35,21,43,170,56,52,36,110,11,26,9,12,63,143,4,5&calType=day&timeZone=63&lang=3" width="650" height="900px"></object>
        <div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif;"><span
            style="font-size: 11px;color: #333333;text-decoration: none;">Real Time Economic Calendar provided by <a
              href="https://www.investing.com/" rel="nofollow" target="_blank"
              style="font-size: 11px;color: #06529D; font-weight: bold;"
              class="underline_link">Investing.com</a>.</span>
        </div>
      </v-tab-item>
      <v-tab-item class="text-center">
        <v-card>
        <object data="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=1,3,2,4,7,5,8,6,1525,1538,66,97,10254,10290,2126,18" width="100%" height="800px" ></object>
          <div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif;">Powered by <a
              href="https://www.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
              target="_blank" rel="nofollow">Investing.com</a></div>
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
  head() {
    return {
      script: [],
    };
  },
};
</script>
