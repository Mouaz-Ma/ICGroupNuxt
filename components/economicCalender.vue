<template>
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container mx-auto" id="economic-calander">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/currencies/economic-calendar/" rel="noopener" target="_blank"><span class="blue-text">Economic Calendar</span></a> by TradingView</div>
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
    const economicCalander = document.getElementById('economic-calander');
    const economicCalanderScript = document.createElement('script');
    economicCalanderScript.type = 'text/javascript';
    economicCalanderScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    if (this.$i18n.locale === 'ar') {
      economicCalanderScript.text = JSON.stringify({
        'colorTheme': 'light',
        'isTransparent': false,
        'width': '510',
        'height': '600',
        'locale': 'ar_AE',
        'importanceFilter': '-1,0,1',
      });
    } else {
      economicCalanderScript.text = JSON.stringify({
        'colorTheme': 'light',
        'isTransparent': false,
        'width': '510',
        'height': '600',
        'locale': 'en',
        'importanceFilter': '-1,0,1',
      });
    }
    economicCalander.appendChild(economicCalanderScript);
  },
};
</script>
