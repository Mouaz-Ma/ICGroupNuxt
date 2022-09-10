<template>
  <div class="icg-card" v-if="$auth.$state.user.isVerified === true">
    <div class="icg-card__header">
      <h4 class="card-title">VERIFY & UPGRADE </h4>
    </div>
    <div class="card-body">
      <h5>Account Status : <span class="text-success">Verified <i class="icofont-verification-check"></i></span> </h5>
      <p>Your account is verified. Contact our call center to help you enable funding, trading, and
        withdrawal.
      </p>
      <NuxtLink class="btn btn-primary" to="/contact">Contact Call Center</NuxtLink>
    </div>
  </div>
  <div v-else class="icg-card">
    <div class="icg-card__header">
      <h4 class="card-title">VERIFY & UPGRADE </h4>
    </div>
    <div class="card-body">
      <h5>Account Status : <span class="text-warning">Pending <i class="icofont-warning"></i></span> </h5>
      <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
      </p>
      <a class="btn btn-primary" @click="getVerified()"> Get Verified</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
