<template>
  <!-- ///////////////// blogs //////////////// -->
  <div class="blog section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6">
          <div class="section-title text-center">
            <h2>{{  $t('Blog')  }}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <b-card-group class="overflow-auto d-flex flex-row flex-nowrap">
          <div v-for="blog in allBlogsData.slice(-3)" :key="blog._id" class="">
            <blog-card :blogId=blog._id :title=blog.title author="By: ICGroupsFX" :content=blog.content
              :imageSrc=blog.image.url :createdAt=blog.createdAt />
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allBlogsData: [],
    };
  },
  async fetch() {
    try {
      const allBlogs = this.$axios.get('/api/blogs/');
      const allBlogsResponse = await Promise.all([allBlogs]);
      let allBlogsData = allBlogsResponse[0].data.blogs.reverse();
      if (this.$i18n.locale === 'en') {
        allBlogsData = allBlogsData.filter( (blog) => blog.language === 'en');
      } else if (this.$i18n.locale === 'ar') {
        allBlogsData = allBlogsData.filter( (blog) => blog.language === 'ar');
      }
      this.allBlogsData = allBlogsData;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>

</style>
