<template>
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container" id="advanced-chart">
  <div id="tradingview_4263a"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
</div>
<!-- TradingView Widget END -->
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    const advancedChartContainer = document.getElementById('advanced-chart');
    const tvScript = document.createElement('script');
    tvScript.type = 'text/javascript';
    tvScript.src = 'https://s3.tradingview.com/tv.js';
    // tvScript.async = false;
    const advancedChartScript = document.createElement('script');
    advancedChartScript.type = 'text/javascript';
    // advancedChartScript.async = false;
    if (this.$i18n.locale === 'en') {
      advancedChartScript.text = `new TradingView.widget(
        {
          "width": "100%",
          "height": "900px",
          "symbol": "CURRENCYCOM:GOLD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": true,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": true,
          "container_id": "tradingview_4263a",
        })`;
    } else {
      advancedChartScript.text = `new TradingView.widget(
        {
          "width": "100%",
          "height": "900px",
          "symbol": "CURRENCYCOM:GOLD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "ar_AE",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": true,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": true,
          "calendar": true,
          "container_id": "tradingview_4263a",
        })`;
    }
    advancedChartContainer.appendChild(tvScript);
    tvScript.onload = function() {
      advancedChartContainer.appendChild(advancedChartScript);
    };
    // window.setTimeout(() => {
    //   advancedChartContainer.appendChild(advancedChartScript);
    // }, 100);
    // window.onload = function() {
    //   console.log('mounted child');
    // };
  },
  head: {
    script: [
      {
        src: 'https://s3.tradingview.com/tv.js',
      },
    ],
  },
};
</script>
