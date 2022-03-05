<template>
<div>
    <div id="main-wrapper show">
      <div class="row">
              <b-card-group deck>
              <div v-for="blog in allBlogsData" :key="blog._id">
                <div class="col-12" >

                  <blog-card
                  :title= blog.title
                  :author=blog.author.username />
                </div>

              </div>
            </b-card-group>
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
  }
</script>