<template>
  <div>
    <UserNavbarVue />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import UserNavbarVue from '@/components/UserNavbar.vue';
export default {
  name: 'users',
  components: {
    UserNavbarVue,
  },
  mounted() {
    if (this.$i18n.locale == 'ar') {
      const htmlEl = document.querySelector('html');
      htmlEl.setAttribute('dir', 'rtl');
      htmlEl.setAttribute('lang', 'ar');
      $nuxt.$vuetify.rtl = true;
    }
  },
};
</script>

<style>

</style>
