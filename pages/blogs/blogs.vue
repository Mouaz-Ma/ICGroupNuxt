<template>
  <div>
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6" v-for="blog in allBlogsData" :key="blog._id">
        <blog-card 

        :title=blog.title 
        :author=blog.author.username 
        :content=blog.content 
        :imageSrc=blog.image.url 
        :createdAt=blog.createdAt
        />
      </div>
    </div>
    </div>
</template>
<script>
import BlogCard from '@/components/blogCard.vue';

export default {
  layout: 'blogs',
  components: {
    BlogCard,
  },
  async asyncData({$axios}) {
    try {
      const allBlogs = $axios.get('/api/blogs/')
      const allBlogsResponse = await Promise.all([allBlogs])
      const allBlogsData = allBlogsResponse[0].data.blogs
      console.log(allBlogsData)
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
  methods:{

  },
  }
</script>

<style>

</style>