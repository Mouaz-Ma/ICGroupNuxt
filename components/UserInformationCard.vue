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
            <span>{{$t("USER ID")}}</span>
            <h4>{{$auth.$state.user._id}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>{{$t("EMAIL ADDRESS")}}</span>
            <h4>{{$auth.$state.user.email}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>{{$t("TELEPHONE")}}</span>
            <h4>{{$auth.$state.user.telephone}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>{{$t("USER TYPE")}}</span>
            <h4>{{userType}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>{{$t("ACCOUNT STATUS")}}</span>
            <h4>{{isVerified}}</h4>
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
