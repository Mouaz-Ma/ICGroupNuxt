<template>
  <div class="icg-card" v-if="$auth.$state.user.userType === 'Administrator'">
    <div class="icg-card__header">
      <h4 class="card-title">{{$t("Uploads")}}</h4>
    </div>
    <div class="card-body">
      <div class="app-link">
        <h5>{{$t("What would you like to upload?")}}</h5>
        <div class="d-flex flex-row justify-content-between align-items-center">
          <nuxt-link class="btn btn-primary" to="/blogs/uploadBlog">{{$t("Blog")}}</nuxt-link>
          <nuxt-link class="btn btn-primary" to="/analysis/uploadAnalysis">{{$t("Analysis")}}</nuxt-link>
          <nuxt-link class="btn btn-primary" to="/news/uploadNews">{{$t("News")}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
