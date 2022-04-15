<template>
<div>
  <v-tabs grow background-color="grey darken-3">
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
          <div v-if="isS3Loaded1">
            <span v-if="openTab">
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                <div id="tradingview_3fcb3"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
                <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                <script type="text/javascript">
                new TradingView.widget(
                {
                "width": "100%",
                "height": "850",
                "symbol": "NASDAQ:AAPL",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "0",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "withdateranges": true,
                "allow_symbol_change": true,
                "details": true,
                "hotlist": true,
                "calendar": true,
                "container_id": "tradingview_3fcb3"
                });
                </script>
                </div>
                <!-- TradingView Widget END -->

            </span>
          </div>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card>
        <div v-if="isS3Loaded2">
        <v-card-text class="d-flex justify-content-center">
            <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" async>
            {
            "colorTheme": "dark",
            "isTransparent": false,
                "width": "100%",
                "height": "850",
            "locale": "ar_AE",
            "importanceFilter": "-1,0,1"
            }
            </script>
        </v-card-text>
          </div>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card>
        <div v-if="isS3Loaded3">
          <span v-if="openTab" class="d-flex justify-content-center">
              <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/forex-screener/" rel="noopener" target="_blank"><span class="blue-text">Forex Screener</span></a> by TradingView</div>
                <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" async>
                {
                "width": "100%",
                "height": "850",
                "defaultColumn": "overview",
                "defaultScreen": "general",
                "market": "forex",
                "showToolbar": true,
                "colorTheme": "dark",
                "locale": "en"
                }
                </script>
                </div>
                <!-- TradingView Widget END -->

          </span>
        </div>
      </v-card>
    </v-tab-item>

  </v-tabs>
</div>
</template>
<script>
export default {
    layout: 'analysis',
    auth:false,
    data() {
        return {
            isS3Loaded1: false,
            isS3Loaded2: false,
            isS3Loaded3: false,
        }
    },
    head () {
        return {
            script: [
                {
                    hid: 's31',
                    src: 'https://s3.tradingview.com/tv.js',
                    async: true,
                    defer: true,
                    callback: () => {this.isS3Loaded1 = true }
                },
                {
                    hid: 's32',
                    src: 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
                    async: true,
                    callback: () => {this.isS3Loaded2 = true }
                },
                                {
                    hid: 's33',
                    src: 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
                    async: true,
                    callback: () => {this.isS3Loaded3 = true }
                },
            ]
        }
    },
    async mounted() {
        this.openTab = true
    },
}
</script>