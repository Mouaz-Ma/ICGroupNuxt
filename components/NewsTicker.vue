<template>
  <div class="ticker-container" v-if="isVisible">
    <div class="rtl-ticker-wrap">
      <div class="rtl-ticker">
        <div v-for="item in GET_ALL_NEWS" :key="item.link" class="rtl-ticker__item">
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
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes rtl-ticker {
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.ticker-container {
  height: 44px;
  line-height: 44px;
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
  -webkit-animation-duration: 120s;
  animation-duration: 120s;
}

.ticker-wrap .ticker:hover {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}

.ticker-wrap .ticker__item {
  display: inline-block;
  padding: 0 4rem;
  font-size: 1rem;
  color: black;
}

.ticker-wrap .ticker__item:hover {
  text-decoration: underline;
}

.rtl-ticker-wrap {
  width: 100%;
  overflow: hidden;
  height: 44px;
  padding-left: 100%;
  box-sizing: content-box;
}

.rtl-ticker-wrap .rtl-ticker {
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
  padding: 0 4rem;
  font-size: 1rem;
  color: black;
}

.rtl-ticker-wrap .rtl-ticker__item a {
  display: inline-block;
  padding: 0 4rem;
  font-size: 1rem;
  color: black;
}

.rtl-ticker-wrap .rtl-ticker__item:hover {
  text-decoration: underline;
}
</style>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    ...mapActions('news', [
      'FETCH_ALL_NEWS',
      'FETCH_COMMIDITIES_NEWS',
      'FETCH_CRYPTO_CURRENCY_NEWS',
      'FETCH_ECONOMIC_INDICATOR_NEWS',
      'FETCH_ECONOMY_NEWS',
      'FETCH_FOREX_NEWS',
      'FETCH_STOCK_MARKET_NEWS',
    ]),
    ...mapMutations('news', [
      'SET_ALL_NEWS',
      'SET_COMMIDITIES_NEWS',
      'SET_CRYPTO_CURRENCY_NEWS',
      'SET_ECONOMIC_INDICATOR_NEWS',
      'SET_ECONOMY_NEWS',
      'SET_FOREX_NEWS',
      'SET_STOCK_MARKET_NEWS',
      'UNSET_ALL_NEWS',
      'UNSET_COMMIDITIES_NEWS',
      'UNSET_CRYPTO_CURRENCY_NEWS',
      'UNSET_ECONOMIC_INDICATOR_NEWS',
      'UNSET_ECONOMY_NEWS',
      'UNSET_FOREX_NEWS',
      'UNSET_STOCK_MARKET_NEWS',
    ]),
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
  },
  computed: {
    ...mapGetters('news', [
      'GET_ALL_NEWS',
      'GET_COMMIDITIES_NEWS',
      'GET_CRYPTO_CURRENCY_NEWS',
      'GET_ECONOMIC_INDICATOR_NEWS',
      'GET_ECONOMY_NEWS',
      'GET_FOREX_NEWS',
      'GET_STOCK_MARKET_NEWS',
    ]),
  },
};
</script>
