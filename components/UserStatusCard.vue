<template>
  <div class="icg-card" v-if="$store.getters.getUserIsVerified === true">
    <div class="icg-card__header">
      <h4 class="card-title">{{$t("VERIFY & UPGRADE")}}</h4>
    </div>
    <div class="card-body">
      <h5>{{$t("Account Status")}}: <span class="text-success">{{$t("Verified")}} <i class="icofont-verification-check"></i></span> </h5>
      <p>{{$t("Your account is verified. Contact our call center to help you enable funding, trading, and withdrawal.")}}</p>
      <NuxtLink class="btn btn-primary" to="/contact">{{$t("Contact Call Center")}}</NuxtLink>
    </div>
  </div>
  <div v-else class="icg-card">
    <div class="icg-card__header">
      <h4 class="card-title">{{$t("VERIFY & UPGRADE")}}</h4>
    </div>
    <div class="card-body">
      <h5>{{$t("Account Status")}}: <span class="text-warning">{{$t("Pending")}} <i class="icofont-warning"></i></span> </h5>
      <p>{{$t("Your account is not verified. Please verify your account to enable funding, trading, and withdrawal.")}}
      </p>
      <a class="btn btn-primary" @click="getVerified()">{{$t("Verify your account")}}</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async getVerified() {
      try {
        const userId = this.$auth.$state.user._id;
        const response = await this.$axios.get('/api/users/varifyById/' + userId);
        if (response.data.success) {
          this.verifyAlertMessage = 'true';
        } else {
          this.verifyAlertMessage = 'false';
        }
      } catch (err) {
        this.verifyAlertMessage = 'false';
      }
    },
  },
};
</script>

<style>

</style>
