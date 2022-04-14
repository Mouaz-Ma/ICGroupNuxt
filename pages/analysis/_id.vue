<template>
    <div id="main-wrapper show">
        <single-analysis
        :title="analysisData.title"
        :tags="analysisData.tags"
        :content="analysisData.content"
        :image="analysisData.image"
        :reviews="analysisData.reviews"
        :author="analysisData.author"
        :createdAt="analysisData.createdAt"
         />
</div>
</template>
<script>
import singleAnalysis from '@/components/singleAnalysis.vue'
export default {
    auth: false,
  layout: 'analysis',
  components: {
    singleAnalysis
  },
    async asyncData({$axios, params}) {
    try {
        // write if blog not found to redirect back to analysis
        console.log(params.id)
      const analysis = $axios.get('/api/analysis/single/' + params.id)
      const analysisResponse = await Promise.resolve(analysis)
      const analysisData = analysisResponse.data.analysis
      console.log(analysisData.tags)
      return {analysisData}
    } catch(err){
      console.log(err);
    }
  },
    data() {
    return {
      analysisData : null,
    }
  },
}
</script>