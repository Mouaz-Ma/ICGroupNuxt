<template>
    <div id="main-wrapper show">
        <single-news 
        :title="newsData.title"
        :tags="newsData.tags"
        :content="newsData.content"
        :image="newsData.image"
        :reviews="newsData.reviews"
        author="By: ICGroupsFX"
        :createdAt="newsData.createdAt"
        />
</div>
</template>
<script>
import SingleNews from '@/components/singleNews.vue'
export default {
      auth: false,
  layout: 'news',
  components: {
    SingleNews,
  },
    async asyncData({$axios, params}) {
    try {
        // write if news not found to redirect back to newss 
      const news = $axios.get('/api/news/' + params.id)
      const newsResponse = await Promise.resolve(news)
      const newsData = newsResponse.data.news
      return {newsData}
    } catch(err){
      console.log(err);
    }
  },
    data() {
    return {
      newsData : null,
    }
  },
}
</script>