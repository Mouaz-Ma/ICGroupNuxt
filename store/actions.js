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
  this.$axios.get(
      '/api/news/ticker',
      {params: {languageOption: lang}},
  ).then((res) => {
    context.commit('setNews', {lang: lang, data: res.data.tickerNews});
  }).catch((err) => {
    console.log(err);
  });
};

