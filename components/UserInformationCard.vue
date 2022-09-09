<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Information</h4>
      <a href="./settings-profile.html" class="btn btn-primary">Edit</a>
    </div>
    <div class="card-body">
      <form class="row">
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="user-info">
            <span>USER ID</span>
            <h4>{{$auth.$state.user._id}}</h4>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="user-info">
            <span>EMAIL ADDRESS</span>
            <h4>{{$auth.$state.user.email}}</h4>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="user-info">
            <span>TELEPHONE</span>
            <h4>{{$auth.$state.user.telephone}}</h4>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
          <div class="user-info">
            <span>USER TYPE</span>
            <h4>{{$auth.$state.user.userType}}</h4>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
