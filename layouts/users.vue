<template>
  <div class="icg-light-theme">
    <UserNavbarVue />
    <div class="container" style="margin-top: 6rem;">
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
:root {
  --icg-light-theme-background-color: white;
  --icg-light-theme-component-background-color: white;
  --icg-light-theme-border-color: #ddd;
  --icg-light-theme-color: #231f20;
}

.icg-light-theme {
  color: var(--icg-light-theme-color);
  background-color: var(--icg-light-theme-background-color);
}
</style>
