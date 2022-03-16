<template>
    <div id="main-wrapper show">
        <single-blog 
        :title="blogData.title"
        :tags="blogData.tags"
        :content="blogData.content"
        :image="blogData.image"
        :reviews="blogData.reviews"
        :author="blogData.author"
        :createdAt="blogData.createdAt"
        />
</div>
</template>
<script>
import SingleBlog from '@/components/singleBlog.vue'
export default {
  layout: 'blogs',
  components: {
    SingleBlog
  },
    async asyncData({$axios, params}) {
    try {
        console.log(params.id)
      const blog = $axios.get('/api/blogs/' + params.id)
      const blogResponse = await Promise.resolve(blog)
      const blogData = blogResponse.data.blog
      console.log(blogData.tags)
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