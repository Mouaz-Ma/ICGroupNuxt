export const getAnalysisCategories = (state) => state.analysisCategories;
export const getNews = (state) => (lang) => {
  return state.news[lang];
};
