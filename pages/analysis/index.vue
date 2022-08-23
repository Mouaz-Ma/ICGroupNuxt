<template>

<div class="row" v-if="allAnalysisData.length != 0">
<h1>{{$i18n.locale === 'ar' ? allAnalysisData[0].category.ar : allAnalysisData[0].category.type}}</h1>
      <b-card-group>
          <div v-for="analysis in allAnalysisData" :key="analysis._id" class="col-xl-6 col-lg-6 col-md-6">
              <analysis-card 
              style="width:100%;"
              :analysisId=analysis._id
              :title=analysis.title 
              author="By: ICGroupsFX" 
              :content=analysis.content 
              :imageSrc=analysis.image.url
              :createdAt=analysis.createdAt
              :selectedCategory=analysis.category
              />
                    
          </div>
      </b-card-group>
    
</div>
</template>
<script>
import AnalysisCard from '@/components/analysisCard.vue';

export default {
  watchQuery: true,
    auth: false,
  layout: 'analysis',
  components: {
    AnalysisCard,
  },
      data() {
    return {
      allAnalysisData : [],
      title: "",
      author: ""
    }
  },
    watch: {
    '$route' () {
      Object.assign(this.$data, this.$options.data())
    }
  },
  async asyncData({$axios, query}) {
    try {
      const allAnalysis = await $axios.get('/api/analysis/' + query.categoryId)
      const allAnalysisResponse = await Promise.all([allAnalysis])
      const allAnalysisData = allAnalysisResponse[0].data.analysis.reverse()
      return {allAnalysisData}
    } catch(err){
      console.log(err);
    }
  },
  }
</script>

<style>

</style>