<template>
  <div class="icg-card">
    <div class="icg-card__header">
      <h4 class="card-title">{{$t("Information")}}</h4>
      <nuxt-link to="/users/profileUpdate" class="btn btn-primary">{{$t("Edit")}}</nuxt-link>
    </div>
    <div class="card-body">
      <form class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <h4>{{$t("USER ID")}}</h4>
            <span>{{$auth.$state.user._id}}</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <h4>{{$t("EMAIL ADDRESS")}}</h4>
            <span>{{$auth.$state.user.email}}</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <h4>{{$t("TELEPHONE")}}</h4>
            <span>{{$auth.$state.user.telephone}}</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <h4>{{$t("USER TYPE")}}</h4>
            <span>{{userType}}</span>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <h4>{{$t("ACCOUNT STATUS")}}</h4>
            <span>{{isVerified}}</span>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isVerified() {
      return this.$auth.$state.user.isVerified ? this.$i18n.t('Verified') : this.$i18n.t('Not verified');
    },
    userType() {
      return this.$i18n.t(this.$auth.$state.user.userType);
    },
  },
};
</script>

<style>

</style>
