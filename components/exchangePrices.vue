<template>
<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container mx-auto" id="exchange-prices">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/currencies/forex-cross-rates/" rel="noopener" target="_blank"><span class="blue-text">Exchange Rates</span></a> by TradingView</div>
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
    const exchangePrices = document.getElementById('exchange-prices');
    const exchangePricesScript = document.createElement('script');
    exchangePricesScript.type = 'text/javascript';
    exchangePricesScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js';
    if (this.$i18n.locale === 'ar') {
      exchangePricesScript.text = JSON.stringify({
        'width': '770',
        'height': '400',
        'currencies': [
          'EUR',
          'USD',
          'JPY',
          'GBP',
          'CHF',
          'AUD',
          'CAD',
          'NZD',
          'CNY',
          'TRY',
        ],
        'isTransparent': false,
        'colorTheme': 'light',
        'locale': 'ar_AE',
      });
    } else {
      exchangePricesScript.text = JSON.stringify({
        'width': '770',
        'height': '400',
        'currencies': [
          'EUR',
          'USD',
          'JPY',
          'GBP',
          'CHF',
          'AUD',
          'CAD',
          'NZD',
          'CNY',
          'TRY',
        ],
        'isTransparent': false,
        'colorTheme': 'light',
        'locale': 'en',
      });
    }
    exchangePrices.appendChild(exchangePricesScript);
  },
};
</script>
