<template>

<div>

      <b-card-group class="d-flex" columns>
          <div v-for="news in allNewsData" :key="news._id">
            <news-card 
            style="width:100%;"
            :newsId=news._id
            :title=news.title 
            :author=news.author.username 
            :content=news.content 
            :imageSrc=news.image.url 
            :createdAt=news.createdAt
            />
                    
          </div>
      </b-card-group>
    
</div>
</template>
<script>
import NewsCard from '@/components/newsCard.vue';

export default {
  layout: 'news',
  components: {
    NewsCard,
  },
  async asyncData({$axios}) {
    try {
      const allNews = $axios.get('/api/news/')
      const allNewsResponse = await Promise.all([allNews])
      const allNewsData = allNewsResponse[0].data.news
      console.log(allNewsData[0])
      return {allNewsData}
    } catch(err){
      console.log(err);
    }
  },
    data() {
    return {
      allNewsData : [],
      title: "",
      author: ""
    }
  },
  }
</script>

<style>

</style>