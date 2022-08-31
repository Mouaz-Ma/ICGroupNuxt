<template>
    <div id="main-wrapper show">
        <single-blog 
        :title="blogData.title"
        :tags="blogData.tags"
        :content="blogData.content"
        :image="blogData.image"
        :reviews="blogData.reviews"
        author="By: ICGroupsFX"
        :createdAt="blogData.createdAt"
        />
        <latest-blogs></latest-blogs>
</div>
</template>
<script>
import SingleBlog from '@/components/singleBlog.vue'
import LatestBlogs from '@/components/LatestBlogs.vue'
export default {
    auth: false,
  layout: 'blogs',
  components: {
    SingleBlog,
    LatestBlogs,
  },
    async asyncData({$axios, params}) {
    try {
        // write if blog not found to redirect back to blogs 
      const blog = $axios.get('/api/blogs/' + params.id)
      const blogResponse = await Promise.resolve(blog)
      const blogData = blogResponse.data.blog
      return {blogData}
    } catch(err){
      console.log(err);
    }
  },
    data() {
    return {
      blogData : null,
    }
  },
}
</script>