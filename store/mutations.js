export const setAnalysisCategories = (state, data) => {
  state.analysisCategories = data;
};

export const setNews = (state, payload) => {
  state.news[payload.lang] = payload.data;
};

export const setUserAvatar = (state, {imgUrl, obj}) => {
  obj.$auth.user.image.url = imgUrl;
};
