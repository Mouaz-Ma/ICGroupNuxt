<template>
  <div>
    <MetaTraderWebTerminal />
  </div>
</template>

<script>
import MetaTraderWebTerminal from '../components/MetaTraderWebTerminal.vue';
export default {
  auth: true,
  layout: 'index',
  components: {
    MetaTraderWebTerminal,
  },
};
</script>

<style>

</style>
