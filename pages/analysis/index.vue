<template>

<div class="row">

      <b-card-group>
          <div v-for="analysis in allAnalysisData" :key="analysis._id" class="col-xl-6 col-lg-6 col-md-6">
              <analysis-card 
              style="width:100%;"
              :analysisId=analysis._id
              :title=analysis.title 
              :author=analysis.author.username 
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
  watchQuery: true,
  async asyncData({$axios, query}) {
    try {
        console.log(query.categoryId)
      const allAnalysis = await $axios.get('/api/analysis/' + query.categoryId)
      const allAnalysisResponse = await Promise.all([allAnalysis])
      const allAnalysisData = allAnalysisResponse[0].data.analysis
      console.log(allAnalysisData)
      return {allAnalysisData}
    } catch(err){
      console.log(err);
    }
  },
  }
</script>

<style>

</style>