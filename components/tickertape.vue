<template>

<div class="tradingview-widget-container" id="tradingview-ticker">
  <div class="tradingview-widget-container__widget"></div>
</div>
    
</template>

<script>
export default {
  data() {
    return {
      //
    }
  },
  mounted() {
    const tradingWidgetContainer = document.getElementById("tradingview-ticker");
    const tradingWidgetScript = document.createElement("script");
    tradingWidgetContainer.innerHTML = '';
    tradingWidgetScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    tradingWidgetScript.type = "text/javascript";
    tradingWidgetScript.text = JSON.stringify({
    "symbols": [
      {
        "proName": "BITSTAMP:BTCUSD",
        "title": "Bitcoin"
      },
      {
        "proName": "BITSTAMP:ETHUSD",
        "title": "Ethereum"
      },
      {
        "description": "GOLD",
        "proName": "CURRENCYCOM:GOLD"
      },
      {
        "description": "USD/TRY",
        "proName": "CURRENCYCOM:USDTRY"
      },
      {
        "description": "EUR/TRY",
        "proName": "CURRENCYCOM:EURTRY"
      },
      {
        "description": "GBP/TRY",
        "proName": "CURRENCYCOM:GBPTRY"
      },
      {
        "description": "JPY/TRY",
        "proName": "FX_IDC:JPYTRY"
      },
      {
        "description": "USD/SYP",
        "proName": "FX_IDC:USDSYP"
      },
      {
        "description": "USD/EUR",
        "proName": "FX_IDC:USDEUR"
      },
      {
        "description": "USD/EUR",
        "proName": "FX_IDC:USDEUR"
      },
    ],
    "showSymbolLogo": true,
    "colorTheme": "light",
    "isTransparent": true,
    "displayMode": "regular",
    "locale": "en"
});
    tradingWidgetContainer.appendChild(tradingWidgetScript);
  }
}
</script>