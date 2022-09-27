export const getAnalysisCategories = (state) => state.analysisCategories;
export const getNews = (state) => {
  return state.news;
};
export const getUserImageUrl = (state, commit, rootState) => {
  if (rootState.auth.strategy == 'local') {
    return rootState.auth.state.user.image !== undefined ? rootState.auth.state.user.image.url : '~/assets/images/profile/2.png';
  } else if (rootState.auth.strategy == 'facebook') {
    return rootState.auth.user.picture.data.url;
  } else if (rootState.auth.strategy == 'google') {
    return rootState.auth.user.picture;
  }
};

export const getUserIsVerified = (state, commit, rootState) => {
  if (rootState.auth.strategy == 'local') {
    return rootState.auth.user.isVerified;
  } else if (rootState.auth.strategy == 'facebook') {
    return true;
  } else if (rootState.auth.strategy == 'google') {
    return rootState.auth.user.email_verified;
  }
};

export const getUserName = (state, commit, rootState) => {
  if (rootState.auth.strategy == 'local') {
    return rootState.auth.user.username;
  } else if (rootState.auth.strategy == 'facebook') {
    return rootState.auth.user.username;
  } else if (rootState.auth.strategy == 'google') {
    return rootState.auth.user.name;
  }
};

