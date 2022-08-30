<template>
  <div class="row">
    <b-card-group class="">
      <div v-for="news in allNewsData" :key="news._id" class="col-12 col-sm-6 col-md-4">
        <news-card style="width:100%;" :newsId=news._id :title=news.title author="By: ICGroupsFX" :content=news.content
          :imageSrc=news.image.url :createdAt=news.createdAt />
      </div>
    </b-card-group>
  </div>
</template>
<script>
import NewsCard from '@/components/newsCard.vue';

export default {
  auth: false,
  layout: 'news',
  components: {
    NewsCard,
  },
  async asyncData({$axios, i18n}) {
    try {
      const allNews = $axios.get('/api/news/');
      const allNewsResponse = await Promise.all([allNews]);
      let allNewsData = allNewsResponse[0].data.news.reverse();
      if(i18n.locale === 'en'){
        allNewsData = allNewsData.filter( news => news.language === 'en')
      } else if(i18n.locale === 'ar') {
        allNewsData = allNewsData.filter( news => news.language === 'ar')
      }
      return {allNewsData};
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      allNewsData: [],
      title: '',
      author: '',
    };
  },
};
</script>

<style>

</style>
