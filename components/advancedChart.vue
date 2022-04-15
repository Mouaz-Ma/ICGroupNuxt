<template>
                  <script type="text/javascript">
                new TradingView.widget({
                  "width": 820,
                  "height": 500,
                  "symbol": "NASDAQ:AAPL",
                  "interval": "D",
                  "timezone": "Etc/UTC",
                  "theme": "light",
                  "style": "1",
                  "locale": "ar_AE",
                  "toolbar_bg": "#f1f3f6",
                  "enable_publishing": false,
                  "hide_legend": true,
                  "withdateranges": true,
                  "hide_side_toolbar": false,
                  "allow_symbol_change": true,
                  "show_popup_button": true,
                  "popup_width": "1200",
                  "popup_height": "750",
                  "container_id": "tradingview_ba8b2"
                });
              </script>
</template>
<script>
export default {
     data() {
        return {
        }
    },
    head () {
        return {
            script: [
                {
                    hid: 's3',
                    src: 'https://s3.tradingview.com/tv.js',
                    defer: true,
                    callback: () => {this.isS3Loaded = true }
                },
            ]
        }
    },
}
</script>