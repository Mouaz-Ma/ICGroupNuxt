<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard">
    <div class="header landing headerBorder">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-12">
            <div class="navigation">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="brand-logo">
                  <NuxtLink class="nav-link" to="/" exact>
                    <img src="~/assets/images/logo.png" alt="" class="logo-primary">
                    <img src="~/assets/images/logow.png" alt="" class="logo-white">
                  </NuxtLink>
                </div>

                <b-button class="navbar-toggler" type="button" data-toggle="collapse" v-b-toggle.my-collapse
                  data-target="#my-collapse" aria-controls="my-collapse" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </b-button>

                <b-collapse class="collapse navbar-collapse" id="my-collapse" v-model="showCollapse">
                  <ul class="navbar-nav clearfix flex" id="icg-bootstrap-navbar-override">


                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/" exact>{{ $t('home')}}</NuxtLink>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" :class="$route.path == '/analysis' ? 'nuxt-link-active' : ''" href="#" v-b-toggle.analysisCollapse>{{ $t('Analysis')}}</a>

                      <b-collapse class="dropdown-menu text-center" id="analysisCollapse" v-model="showCollapseaAalysis">
                        <div v-if=" this.$i18n.locale == 'ar'">
                          <div v-for="category in analysisCategory" :key="category._id">
                              <NuxtLink class="dropdown-item" :to="{name: 'analysis',  query: { categoryId: category._id}}" exact>{{category.ar}}</NuxtLink>
                          </div>
                        </div>
                        <div v-else-if="this.$i18n.locale == 'en'">
                          <div v-for="category in analysisCategory" :key="category._id">
                              <NuxtLink class="dropdown-item" :to="{name: 'analysis',  query: { categoryId: category._id}}" exact>{{category.type}}</NuxtLink>
                          </div>
                        </div>
                      </b-collapse>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/analysisTools/" exact>{{$t('Tools')}}</NuxtLink>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/news" exact>{{ $t('News')}}</nuxt-link>
                    </li>

                    <li class="nav-item dropdown">
                      <NuxtLink class="nav-link" to="/aboutUs" exact>{{ $t('Company')}}</NuxtLink>
                      <!-- <b-collapse class="dropdown-menu" id="companyCollapse" v-model="showCollapseaCompany">
                        <NuxtLink class="dropdown-item" to="/aboutUs">{{ $t('about')}}</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/team">Our Team</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/career">Career</NuxtLink>
                      </b-collapse> -->
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" :class="['/contact', '/helpdesk', '/privacy', '/faq'].includes($route.path) ? 'nuxt-link-active' : ''" href="#" v-b-toggle.supportCollapse>{{ $t('Support')}}
                      </a>
                      <b-collapse class="dropdown-menu text-center" id="supportCollapse" v-model="showCollapseaSupport">
                        <NuxtLink class="dropdown-item" to="/contact" exact>{{ $t('contact')}}</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/helpdesk" exact>{{ $t('Help Desk')}}</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/privacy" exact>{{ $t('Privacy')}}</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/faq" exact>{{ $t('FAQ')}}</NuxtLink>
                      </b-collapse>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/blogs/">{{ $t('Blogs')}}</NuxtLink>
                    </li>


                    <li class="nav-item" v-if="$auth.$state.loggedIn">

                    <!-- here we having the username we need to style it  -->
                      <NuxtLink to="/users/profile">
                        <span>{{$auth.$state.user.username}}{{$auth.$state.user.name}}</span></NuxtLink>

                    </li>
                    <li v-else>
                      <div class="signin-btn">
                        <NuxtLink class="btn btn-primary" to="/users/signIn">{{ $t('Sign In')}}</NuxtLink>
                      </div>
                    </li>


                    <li class="nav-item" v-if="$auth.$state.loggedIn">
                      <div class="signin-btn">
                        <a class="btn btn-primary" href="#" @click="onLogout">{{ $t('Sign Out')}}</a>
                      </div>
                    </li>

                      <div id="language-dropdown-wrapper">
                    <li class="nav-item"  id="language-dropdown-wrapper">
                        <a class="nav-link" href="#" @click="toggleLanguageDropdownMenu()">
                          <img :src="require(`@/assets/icons/`+ $i18n.locale +`.svg`)" style="width: 24px; height: auto"
                            alt="" class="mx-1" />
                          <!-- {{$t('lang')}} -->
                        </a>
                        <div id="language-dropdown-menu" v-if="showLanguageMenu">
                          <a class="language-dropdown-menu__item" href="#" v-for="lang in $i18n.locales" :key="lang.code"
                            :value="lang.code" :active="lang.code === activeLang" @click="changeLang(lang.code)">
                            <img :src="require(`@/assets/icons/`+ lang.code +`.svg`)" style="width: 24px; height: auto" />
                            <!-- <span class="m-1 w-50">{{ lang.name }}</span> -->

                            </a>
                        </div>
                    </li>
                      </div>


                  </ul>
                  <!-- language -->
                </b-collapse>


              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Tickertape class="tickerTape" />
    <NewsTicker />
  </div>
</template>
<script>
import Tickertape from '@/components/tickertape.vue';
import NewsTicker from '@/components/NewsTicker.vue';
// import {BIcon, BIconArrowUp, BIconArrowDown} from 'bootstrap-vue';
export default {
  scrollToTop: true,
  data() {
    return {
      showCollapse: false,
      showCollapseaAalysis: false,
      showCollapseaCompany: false,
      showCollapseaSupport: false,
      showCollapseaLanguage: false,
      showLanguageMenu: false,
    };
  },
  watch: {
    '$route'() {
      this.showCollapse = false;
      this.showCollapseaAalysis = false;
      this.showCollapseaCompany = false;
      this.showCollapseaSupport = false;
      this.showCollapseaLanguage = false;
      this.showLanguageMenu = false;
    },
  },
  components: {
    // BIcon,
    // BIconArrowUp,
    // BIconArrowDown,
    Tickertape,
    NewsTicker,
  },
  mounted() {
    if (this.$i18n.locale == 'ar') {
      const htmlEl = document.querySelector('html');
      htmlEl.setAttribute('dir', 'rtl');
      htmlEl.setAttribute('lang', 'ar');
    }
    const path = this.$route.path;
    const pathArray = path.split('/');
    console.log(path);
    console.log(pathArray);
  },
  computed: {
    languages() {
      return this.$i18n.locales;
    },
    activeLang() {
      return this.$i18n.locale;
    },
    analysisCategory() {
      return this.$store.getters.getAnalysisCategories;
    },
  },
  created() {
    this.getAnalysisCategories();
  },
  methods: {
    getAnalysisCategories() {
      this.$store.dispatch('getAnalysisCategories');
    },
    changeLang: function(language) {
      this.$i18n.setLocale(language);
      this.restartServices();
      this.$router.push('/');
    },
    restartServices: function() {
      window.location.reload(true);
    },
    toggleLanguageDropdownMenu() {
      this.showLanguageMenu = !this.showLanguageMenu;
    },
    async onLogout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style>

span.navbar-toggler-icon{
  /* stroke: rgba(255, 255, 255, 0.85);
  fill: rgba(255, 255, 255, 0.85);
  color: rgba(255, 255, 255, 0.85); */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255, 255, 255, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !important;
}
.navbar-toggler:hover .navbar-toggler-icon{
  /* stroke: #231f20;
  fill: #231f20;
  color: #231f20; */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(35, 31, 32, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !important;
}

.navbar-toggler:focus .navbar-toggler-icon{
  /* stroke: #231f20;
  fill: #231f20;
  color: #231f20; */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(35, 31, 32, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !important;
}

@media (min-width: 1200px) {
  #analysisCollapse {
    display: block;
  }
}

#languageCollapse{
  margin-left: 50px;
}

#icg-bootstrap-navbar-override .dropdown-menu {
  color: white;
  background-color: #231f20;
}

#language-dropdown-wrapper {
  position: relative;
  margin: 0.5rem 0;
  display: inline-flex;
  flex-direction: row;
  align-content: center;
}

#language-dropdown-menu {
  position: static;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border: 1px solid #2b2627;
  background-color: #231f20;
  z-index: 4444;
  border-radius: 0.5rem;
}

.language-dropdown-menu__item {
  padding: 0.5rem;
  /* border: 0.3px solid #2b2627; */
  background-color: #231f20;
}

.dropdown-menu > a:hover {
    background-image: none;
    background-color: rgb(251, 204, 49);
    color: #231f20 !important;
}

.dropdown-menu > div > div > a:hover {
    background-image: none;
    background-color: rgb(251, 204, 49);
    color: #231f20 !important;
}

.dropdown-menu > a:focus {
    background-image: none;
    background-color: rgb(251, 204, 49);
    color: #231f20 !important;
}

.dropdown-menu > div > div > a:focus {
    background-image: none;
    background-color: rgb(251, 204, 49);
    color: #231f20 !important;
}

#language-dropdown-menu a:hover {
    background-color: rgba(251, 204, 49, 1);
}

@media (min-width: 1200px) {
  #language-dropdown-wrapper {
    margin: 0;
    flex-direction: column;
  }

  #language-dropdown-menu {
    position: absolute;
    top: 100%;
    right: 7%;
    flex-direction: column;
  }
}

.tickerTape{
  margin-top: 5.5rem;
}


.nuxt-link-active {
  color: rgba(251, 204, 49, 1) !important;
}

.nuxt-link-exact-active {
  color: rgba(251, 204, 49, 1) !important;
}

.dropdown-menu > .nuxt-link-exact-active:hover {
  color: #231f20 !important;
}

.dropdown-menu > div > div > .nuxt-link-exact-active:hover {
    color: #231f20 !important;
}


</style>
