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
                "style": "1",
                "locale": "ar_AE",
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
        <!-- TradingView Widget BEGIN -->
        <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright">‎<a href="https://ar.tradingview.com/markets/currencies/economic-calendar/" rel="noopener" target="_blank"><span class="blue-text">‎ المفكرة الاقتصادية ‎</span></a>‎ بواسطة TradingView</div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" async>
        {
        "width": "100%",
        "height": "859px",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "ar_AE",
        "importanceFilter": "-1,0,1"
        }
        </script>
        </div>
        <!-- TradingView Widget END -->
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
  <div class="tradingview-widget-copyright">‎<a href="https://ar.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">‎الأسواق المالية‎</span></a>‎ من TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
  {
  "colorTheme": "dark",
  "dateRange": "12M",
  "showChart": true,
  "locale": "ar_AE",
  "width": "100%",
  "height": "100%",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": true,
  "showFloatingTooltip": false,
  "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
  "plotLineColorFalling": "rgba(41, 98, 255, 1)",
  "gridLineColor": "rgba(240, 243, 250, 0)",
  "scaleFontColor": "rgba(120, 123, 134, 1)",
  "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
  "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
  "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
  "tabs": [
    {
      "title": "Indices",
      "symbols": [
        {
          "s": "FOREXCOM:SPXUSD",
          "d": "S&P 500"
        },
        {
          "s": "FOREXCOM:NSXUSD",
          "d": "US 100"
        },
        {
          "s": "FOREXCOM:DJI",
          "d": "Dow 30"
        },
        {
          "s": "INDEX:NKY",
          "d": "Nikkei 225"
        },
        {
          "s": "INDEX:DEU40",
          "d": "DAX Index"
        },
        {
          "s": "FOREXCOM:UKXGBP",
          "d": "UK 100"
        }
      ],
      "originalTitle": "Indices"
    },
    {
      "title": "Futures",
      "symbols": [
        {
          "s": "CME_MINI:ES1!",
          "d": "S&P 500"
        },
        {
          "s": "CME:6E1!",
          "d": "Euro"
        },
        {
          "s": "COMEX:GC1!",
          "d": "Gold"
        },
        {
          "s": "NYMEX:CL1!",
          "d": "Crude Oil"
        },
        {
          "s": "NYMEX:NG1!",
          "d": "Natural Gas"
        },
        {
          "s": "CBOT:ZC1!",
          "d": "Corn"
        }
      ],
      "originalTitle": "Futures"
    },
    {
      "title": "Bonds",
      "symbols": [
        {
          "s": "CME:GE1!",
          "d": "Eurodollar"
        },
        {
          "s": "CBOT:ZB1!",
          "d": "T-Bond"
        },
        {
          "s": "CBOT:UB1!",
          "d": "Ultra T-Bond"
        },
        {
          "s": "EUREX:FGBL1!",
          "d": "Euro Bund"
        },
        {
          "s": "EUREX:FBTP1!",
          "d": "Euro BTP"
        },
        {
          "s": "EUREX:FGBM1!",
          "d": "Euro BOBL"
        }
      ],
      "originalTitle": "Bonds"
    },
    {
      "title": "Forex",
      "symbols": [
        {
          "s": "FX:EURUSD",
          "d": "EUR/USD"
        },
        {
          "s": "FX:GBPUSD",
          "d": "GBP/USD"
        },
        {
          "s": "FX:USDJPY",
          "d": "USD/JPY"
        },
        {
          "s": "FX:USDCHF",
          "d": "USD/CHF"
        },
        {
          "s": "FX:AUDUSD",
          "d": "AUD/USD"
        },
        {
          "s": "FX:USDCAD",
          "d": "USD/CAD"
        }
      ],
      "originalTitle": "Forex"
    }
  ]
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
            openTab: false,
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
                    src: '"https://s3.tradingview.com/external-embedding/embed-widget-events.js',
                    async: true,
                    callback: () => {this.isS3Loaded2 = true }
                },
                                {
                    hid: 's33',
                    src: 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js',
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