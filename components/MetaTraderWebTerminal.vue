<template>
  <div id="webterminal__container">
    <div id="webterminal" style="width:100%;height:600px;"></div>
  </div>
</template>

<script>
export default {
  name: 'MetaTraderWebTerminal',
  data() {
    return {
      //
    };
  },
  mounted() {
    const webTerminalContainer = document.getElementById('webterminal__container');
    const webTerminalScript = document.createElement('script');
    const webTerminalConfigScript = document.createElement('script');
    webTerminalScript.src = 'https://trade.mql5.com/trade/widget.js';
    webTerminalScript.type = 'text/javascript';
    webTerminalConfigScript.type = 'text/javascript';
    if (this.$i18n.locale == 'ar') {
      webTerminalConfigScript.text = `new MetaTraderWebTerminal( "webterminal", {
        version: 5,
        servers: ["IntCapitalGroups-Server"],
        server: "IntCapitalGroups-Server",
        utmSource: "www.icgroupsfx.com",
        startMode: "login",
        language: "ar",
        colorScheme: "black_on_white"
    } );`;
    } else {
      webTerminalConfigScript.text = `new MetaTraderWebTerminal( "webterminal", {
        version: 5,
        servers: ["IntCapitalGroups-Server"],
        server: "IntCapitalGroups-Server",
        utmSource: "www.icgroupsfx.com",
        startMode: "login",
        language: "en",
        colorScheme: "black_on_white"
    } );`;
    }
    webTerminalContainer.appendChild(webTerminalScript);
    webTerminalContainer.appendChild(webTerminalConfigScript);
  },
  head: {
    script: [
      {
        src: 'https://trade.mql5.com/trade/widget.js',
      },
    ],
  },
};
</script>

<style>

</style>
