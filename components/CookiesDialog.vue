<template>
  <div id="cookies-dialog">
      <h2 class="cookies-dialog__heading">{{$t("cookies dialog heading")}}</h2>
      <p>{{$t("cookies dialog body")}}</p>
      <div class="row">
        <div class="col-6">
          <button class="btn btn-primary w-100" @click="acceptAllCookies()">{{$t("cookies accept all")}}</button>
        </div>
        <div class="col-6">
          <button class="btn btn-primary w-100" @click="acceptEssentialCookies()">{{$t("cookies accept essential")}}</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    acceptEssentialCookies() {
      const dialog = document.getElementById('cookies-dialog');
      // leave essential cookies only.
      // this.$cookies.remove('datr', {domain: '.facebook.com'});
      // this.$cookies.remove('sb', {domain: '.facebook.com'});
      // this.$cookies.remove('fr', {domain: '.facebook.com'});
      // this.$cookies.remove('wd', {domain: '.facebook.com'});
      this.$cookies.set('cookies_preference', 'essential');
      this.$destroy();
      dialog.classList.add('d-none');
    },
    acceptAllCookies() {
      const dialog = document.getElementById('cookies-dialog');
      this.$cookies.set('cookies_preference', 'all');
      this.$destroy();
      dialog.classList.add('d-none');
    },
  },
};
</script>

<style>
.cookies-dialog__heading {
  color: #fff;
}

#cookies-dialog {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  color: #fff;
  background-color: #231f20;
  /* border-radius: 1rem; */
  padding: 2rem;
  /* margin: 0.5rem; */
}
</style>
