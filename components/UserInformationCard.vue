<template>
  <div class="icg-card">
    <div class="icg-card__header">
      <h4 class="card-title">Information</h4>
      <nuxt-link to="/users/profileUpdate" class="btn btn-primary">Edit</nuxt-link>
    </div>
    <div class="card-body">
      <form class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>USER ID</span>
            <h4>{{$auth.$state.user._id}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>EMAIL ADDRESS</span>
            <h4>{{$auth.$state.user.email}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>TELEPHONE</span>
            <h4>{{$auth.$state.user.telephone}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>USER TYPE</span>
            <h4>{{$auth.$state.user.userType}}</h4>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="user-info">
            <span>ACCOUNT STATUS</span>
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
      return this.$auth.$state.user.isVerified ? 'Verified' : 'Not verified';
    },
  },
};
</script>

<style>

</style>
