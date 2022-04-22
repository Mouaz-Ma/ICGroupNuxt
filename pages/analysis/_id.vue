<template>
<v-app>
    <div id="main-wrapper show" v-if="analysisData.length != 0">

        <single-analysis
        :title="analysisData.title"
        :tags="analysisData.tags"
        :content="analysisData.content"
        :image="analysisData.image"
        :audio="analysisData.audio"
        :reviews="analysisData.reviews"
        :author="analysisData.author"
        :createdAt="analysisData.createdAt"
         />

</div>
</v-app>
</template>
<script>
import singleAnalysis from '@/components/singleAnalysis.vue'
import AudioPlayer from '../../components/audioPlayer.vue'
export default {
    auth: false,
  layout: 'analysis',
  components: {
    singleAnalysis,
    AudioPlayer
  },
    async asyncData({$axios, params}) {
    try {
        // write if blog not found to redirect back to analysis
      const analysis = $axios.get('/api/analysis/single/' + params.id)
      const analysisResponse = await Promise.resolve(analysis)
      const analysisData = analysisResponse.data.analysis
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