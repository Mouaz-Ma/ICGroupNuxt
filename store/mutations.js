export const setAnalysisCategories = (state, data) => {
  state.analysisCategories = data;
};


// TODO: refactor news mutations into one: setNews(state, lang, data).
export const setNewsArrayEnglish = (state, data) => {
  state.newsArrayEnglish = data;
};

export const setNewsArrayArabic = (state, data) => {
  state.newsArrayArabic = data;
};
