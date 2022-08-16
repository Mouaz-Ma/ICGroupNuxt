export const setAnalysisCategories = (state, data) => {
  state.analysisCategories = data;
};

export const setNews = (state, lang, data) => {
  state.news[lang] = data;
};
