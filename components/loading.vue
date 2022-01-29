<template>
    <div id="preloader"><i>.</i><i>.</i><i>.</i></div>
</template>
<script>
export default {
name: 'loading',
  computed: {
    loading: {
      get() {
        return this.$store.getters.getSiteLoading;
      }
    }
  }
} 

</script>