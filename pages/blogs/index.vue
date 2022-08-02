<template>

<div class="row">

      <b-card-group>
          <div v-for="blog in allBlogsData" :key="blog._id" class="col-xl-6 col-lg-6 col-md-6">
            <blog-card 
            style="width:100%;"
            :blogId=blog._id
            :title=blog.title 
            author="By: ICGroupsFX" 
            :content=blog.content 
            :imageSrc=blog.image.url 
            :createdAt=blog.createdAt
            />
                    
          </div>
      </b-card-group>
    
</div>
</template>
<script>
import BlogCard from '@/components/blogCard.vue';

export default {
  auth: false,
  layout: 'blogs',
  components: {
    BlogCard,
  },
  async asyncData({$axios, i18n}) {
    try {
      const allBlogs = $axios.get('/api/blogs/')
      const allBlogsResponse = await Promise.all([allBlogs])
      let allBlogsData = allBlogsResponse[0].data.blogs
      // console.log(i18n.locale)
      if(i18n.locale === 'en'){
        allBlogsData = allBlogsData.filter( blog => blog.language === 'en')
        } else if(i18n.locale === 'ar') {
        allBlogsData = allBlogsData.filter( blog => blog.language === 'ar')
      }
      return {allBlogsData}
    } catch(err){
      console.log(err);
    }
  },
    data() {
    return {
      allBlogsData : [],
      title: "",
      author: ""
    }
  },
  }
</script>

<style>

</style>