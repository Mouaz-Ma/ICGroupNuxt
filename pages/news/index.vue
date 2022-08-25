<template>
  <div class="row">
    <b-card-group class="d-flex">
      <div v-for="news in allNewsData" :key="news._id" class="col-xl-4 col-lg-4 col-md-4">
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
  async asyncData({$axios}) {
    try {
      const allNews = $axios.get('/api/news/');
      const allNewsResponse = await Promise.all([allNews]);
      const allNewsData = allNewsResponse[0].data.news.reverse();
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
