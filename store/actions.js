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

export function fetchNews(context, lang) {
  const data = new FormData();
  data.append('languageOption', this.lang);
  this.$axios.get(
      '/api/news/ticker',
      data,
  ).then((res) => {
    console.log(res);
    context.commit('setNews', lang, res.data);
  }).catch((err) => {
    console.log(err);
  });
};

