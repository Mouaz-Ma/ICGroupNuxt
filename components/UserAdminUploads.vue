<template>
  <div class="icg-card" v-if="$auth.$state.user.userType === 'Administrator'">
    <div class="icg-card__header">
      <h4 class="card-title">Uploads</h4>
    </div>
    <div class="card-body">
      <div class="app-link">
        <h5>What would you like to upload</h5>
        <nuxt-link class="btn btn-primary" to="/blogs/uploadBlog">Blog</nuxt-link>
        <br>
        <div class="mt-3"></div>
        <nuxt-link class="btn btn-primary" to="/analysis/uploadAnalysis">Analysis</nuxt-link>
        <br>
        <div class="mt-3"></div>
        <nuxt-link class="btn btn-primary" to="/news/uploadNews">News</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
