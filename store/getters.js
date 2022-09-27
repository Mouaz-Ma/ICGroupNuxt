export const getAnalysisCategories = (state) => state.analysisCategories;
export const getNews = (state) => {
  return state.news;
};
export const getUserId = (state, commit, rootState) => {
  if (rootState.auth.strategy == 'local') {
    return rootState.auth.user._id;
  } else if (rootState.auth.strategy == 'facebook') {
    return rootState.auth.user.id;
  } else if (rootState.auth.strategy == 'google') {
    return rootState.auth.user.sub;
  }
};


/*
  Usage in a component:
  define a method in a component, for example:
  userType() {
    return this.$store.getters.getUserType(this);
  }
  Notice the use of `this` as an arguemnt of getUserType function.
  You can now use `userType` in template as expected.
*/
export const getUserType = (state, commit, rootState) => (app) => {
  return app.$i18n.t(rootState.auth.user.userType) || app.$i18n.t('Normal');
};

export const getUserImageUrl = (state, commit, rootState) => {
  if (rootState.auth.strategy == 'local') {
    return rootState.auth.user.image ? rootState.auth.user.image.url : false;
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
    return rootState.auth.user.name;
  } else if (rootState.auth.strategy == 'google') {
    return rootState.auth.user.name;
  }
};

