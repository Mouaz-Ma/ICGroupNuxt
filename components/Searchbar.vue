<template>
  <!-- SEARCH BAR BEGIN -->
  <div class="search" dir="ltr">
    <form action="#">
      <div class="input-group">
        <input type="text" class="form-control" :placeholder="placeholder">
        <span class="input-group-text"><i class="icofont-search"></i></span>
      </div>
    </form>
  </div>
  <!-- SEARCH BAR END -->
</template>

<script>
export default {
  computed: {
    placeholder() {
      return this.$i18n.locale === 'ar' ? 'البحث' : 'Search';
    },
  },
};
</script>
