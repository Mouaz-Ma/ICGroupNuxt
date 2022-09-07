<template>

  <div>
    <div class="row" v-if="allAnalysisData.length != 0">
      <h1>{{$i18n.locale === 'ar' ? allAnalysisData[0].category.ar : allAnalysisData[0].category.type}}</h1>
      <b-card-group>
        <div v-for="analysis in allAnalysisData" :key="analysis._id" class="col-xl-6 col-lg-6 col-md-6">
          <analysis-card style="width:100%;" :analysisId=analysis._id :title=analysis.title author="By: ICGroupsFX"
            :content=analysis.content :imageSrc=analysis.image.url :createdAt=analysis.createdAt
            :selectedCategory=analysis.category />

        </div>
      </b-card-group>
    </div>
    <v-pagination v-model="page" color="#fbcc31" :length="5" @input="handlePageChange"></v-pagination>
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
      page: 1,
      allAnalysisData: [],
      title: '',
      author: '',
    };
  },
  watch: {
    '$route'() {
      Object.assign(this.$data, this.$options.data());
    },
  },
  async fetch() {
    try {
      const allAnalysis = await this.$axios.get('/api/analysis/' + this.$nuxt._route.query.categoryId, {params: {page: this.page}});
      const allAnalysisResponse = await Promise.all([allAnalysis]);
      // console.log(this.$nuxt);
      // console.log(this.$nuxt._route);
      // console.log(this.$nuxt._route.query);
      // console.log(allAnalysisResponse);
      let allAnalysisData = allAnalysisResponse[0].data.analysis.reverse();
      // console.log(allAnalysisData);
      if (this.$i18n.locale === 'en') {
        allAnalysisData = allAnalysisData.filter( (blog) => blog.language === 'en');
      } else if (this.$i18n.locale === 'ar') {
        allAnalysisData = allAnalysisData.filter( (blog) => blog.language === 'ar');
      }
      this.allAnalysisData = allAnalysisData;
      // return {allAnalysisData};
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {
    this.$fetch();
  },
  methods: {
    handlePageChange(value) {
      this.page = value;
      this.$fetch();
    },
  },
  computed: {
    getCount() {
      return this.allAnalysisData.length;
    },
  },
};
</script>

<style>

</style>
