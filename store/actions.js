export async function getAnalysisCategories (context, data) {
    this.$axios.get('/api/analysis/analysisCategory')
      .then(res => {
        let catData = res.data.categories
        this.commit('setAnalysisCategories', catData);
      })
      .catch(error => {
          console.log(error)
      });
  }