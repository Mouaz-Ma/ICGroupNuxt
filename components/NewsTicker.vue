<template>
  <div class="ticker-container" v-if="getActiveLanguage == 'ar'">
    <div class="rtl-ticker-wrap">
      <div class="rtl-ticker">
        <div v-for="item in this.$store.state.news.allNewsArray" :key="item.link" class="rtl-ticker__item">
          <img src="~/assets/images/favicon.png" />
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
  <div class="ticker-container" v-else>
    <div class="ticker-wrap">
      <div class="ticker">
        <div v-for="item in this.$store.state.news.allNewsArray" :key="item.link" class="ticker__item">
          <img src="~/assets/images/favicon.png" />
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@-webkit-keyframes rtl-ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes rtl-ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

.ticker-container {
  height: 3rem;
  line-height: 3rem;
  background-color: rgba(245, 245, 245, 1);
}

.ticker-toggler {
  color: white;
  padding: 0 0.5rem;
}

.ticker-toggler:hover {
  cursor: pointer;
}

.ticker-wrap {
  width: 100%;
  overflow: hidden;
  height: 44px;
  padding-left: 100%;
  box-sizing: content-box;
}

.ticker-wrap .ticker {
  display: inline-block;
  height: 44px;
  line-height: 44px;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 240s;
  animation-duration: 240s;
}

.ticker-wrap .ticker:hover {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}

.ticker-wrap .ticker__item {
  display: inline-block;
  /* padding: 0 4rem; */
  font-size: 1rem;
  color: black;
}

.ticker-wrap .ticker__item a {
  display: inline-block;
  padding: 0 4rem;
  font-size: 1rem;
  color: black;
}

.ticker-wrap .ticker__item a:hover {
    text-decoration: underline;
}

.ticker-wrap .ticker__item img {
  display: inline-block;
  padding: 0 4rem;
}

/* .ticker-wrap .ticker__item:hover {
  text-decoration: underline;
} */

.rtl-ticker-wrap {
  width: 100%;
  overflow: hidden;
  height: 3rem;
  padding-left: 100%;
  box-sizing: content-box;
}

.rtl-ticker-wrap .rtl-ticker {
  display: inline-block;
  height: 3rem;
  line-height: 3rem;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: rtl-ticker;
  animation-name: rtl-ticker;
  -webkit-animation-duration: 240s;
  animation-duration: 240s;
}

.rtl-ticker-wrap .rtl-ticker:hover {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}

.rtl-ticker-wrap .rtl-ticker__item {
  display: inline-block;
  font-size: 1rem;
  color: black;
}

.rtl-ticker-wrap .rtl-ticker__item a {
  display: inline-block;
  padding: 0 4rem;
  font-size: 1rem;
  color: black;
}

.rtl-ticker-wrap .rtl-ticker__item a:hover {
    text-decoration: underline;
}

.rtl-ticker-wrap .rtl-ticker__item img {
  display: inline-block;
  padding: 0 4rem;
}

/* .rtl-ticker-wrap .rtl-ticker__item:hover {
  text-decoration: underline;
} */
</style>

<script>
export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      this.$store.dispatch('fetchNews', this.getActiveLanguage);
    },
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    getActiveLanguage() {
      return this.$i18n.locale;
    },
    getNews() {
      console.log(this.$store.getters.getNews(this.getActiveLanguage))
      return this.$store.getters.getNews(this.getActiveLanguage);
    },
  },
};
</script>
