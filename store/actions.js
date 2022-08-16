export async function getAnalysisCategories(context, data) {
  this.$axios.get('/api/analysis/analysisCategory')
      .then((res) => {
        const catData = res.data.categories;
        this.commit('setAnalysisCategories', catData);
      })
      .catch((error) => {
        console.log(error);
      });
}


// TODO: refactor fetchNewsEnglish and fetchNewsArabic into one function.
export async function fetchNewsEnglish(context) {
  this.$axios.get('api/news/ticker', {params: {languageOption: 'english'}}).then((res) => {
    context.commit('setNewsArrayEnglish', res.data);
  }).catch((err) => {
    console.log(err);
  });
};

export async function fetchNewsArabic(context) {
  this.$axios.get('api/news/ticker', {params: {languageOption: 'arabic'}}).then((res) => {
    context.commit('setNewsArrayArabic', res.data);
  }).catch((err) => {
    console.log(err);
  });
}
