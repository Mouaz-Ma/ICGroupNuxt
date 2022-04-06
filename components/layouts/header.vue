<template>
  <div class="dashboard">
    <div class="header landing headerBorder">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="navigation">
              <nav class="navbar navbar-expand-lg navbar-light">
                <div class="brand-logo">
                  <NuxtLink class="nav-link" to="/">
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
                  <ul class="navbar-nav clearfix flex">


                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/">{{$t('home')}}</NuxtLink>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" v-b-toggle.analysisCollapse>Analysis</a>

                      <b-collapse class="dropdown-menu" id="analysisCollapse" v-model="showCollapseaAalysis">
                        <div v-for="category in analysisCategory" :key="category._id">
                            <NuxtLink class="dropdown-item" :to="{name: 'analysis',  query: { categoryId: category._id}}">{{category.type}}</NuxtLink>
                        </div>
                      </b-collapse>
                    </li>
                    <li class="nav-item">
                      <nuxt-link class="nav-link" to="/news">News</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" v-b-toggle.companyCollapse>Company</a>
                      <b-collapse class="dropdown-menu" id="companyCollapse" v-model="showCollapseaCompany">
                        <NuxtLink class="dropdown-item" to="/aboutUs">{{$t('about')}}</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/team">Our Team</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/career">Career</NuxtLink>
                      </b-collapse>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" v-b-toggle.supportCollapse>Support
                      </a>
                      <b-collapse class="dropdown-menu" id="supportCollapse" v-model="showCollapseaSupport">
                        <NuxtLink class="dropdown-item" to="/contact">contact</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/helpdesk">Help Desk</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/privacy">Privacy</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/faq">FAQ</NuxtLink>
                      </b-collapse>
                    </li>
                    <li class="nav-item">
                      <NuxtLink class="nav-link" to="/blogs/">Blogs</NuxtLink>
                    </li>
                    
                  
                    <li class="nav-item" v-if="$auth.$state.loggedIn">

                    <!-- here we having the username we need to style it  -->
                      <NuxtLink to="/users/profile">
                        <span>{{$auth.$state.user.username}}{{$auth.$state.user.name}}</span></NuxtLink>

                    </li>
                    <li v-else>
                      <div class="signin-btn">
                        <NuxtLink class="btn btn-primary" to="/users/signIn">Sign in</NuxtLink>
                      </div>
                    </li>


                    <li class="nav-item" v-if="$auth.$state.loggedIn">
                      <div class="signin-btn">
                        <a class="btn btn-primary" href="#" @click="onLogout">Log Out</a>
                      </div>
                    </li>

                    <li class="nav-item dropdown d-flex justify-content-center" id="language">
                      <a class="nav-link" href="#" v-b-toggle.languageCollapse>
                        <img :src="require(`@/assets/icons/`+ $i18n.locale +`.svg`)" style="width: 24px; height: auto"
                          alt="" class="mr-1 ml-1" />
                        {{ $t('lang') }}
                      </a>
                      <b-collapse class="dropdown-menu " id="languageCollapse" v-model="showCollapseaLanguage">
                        <a class="d-flex" href="#" v-for="lang in $i18n.locales" :key="lang.code"
                          :value="lang.code" :active="lang.code === activeLang" @click="changeLang(lang.code)">
                          <img :src="require(`@/assets/icons/`+ lang.code +`.svg`)" style="width: 24px; height: auto" />
                          <span class="m-1 w-50">{{ lang.name }}</span></a>
                      </b-collapse>
                    </li>

                    
                  </ul>
                  <!-- language -->
                </b-collapse>



              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
export default {
  scrollToTop: true,
      data() {
            return {
            showCollapse: false,
            showCollapseaAalysis : false,
            showCollapseaCompany : false,
            showCollapseaSupport : false,
            showCollapseaLanguage: false,
            }
        },
        watch: {
            '$route' () {
            this.showCollapse = false
            this.showCollapseaAalysis = false
            this.showCollapseaCompany = false
            this.showCollapseaSupport = false
            this.showCollapseaLanguage= false
            }
        },
      components: {
        BIcon,
        BIconArrowUp,
        BIconArrowDown
      },
      mounted() {
        if (this.$i18n.locale == "ar") {
          let htmlEl = document.querySelector("html");
          htmlEl.setAttribute('dir', 'rtl');
          htmlEl.setAttribute('lang', 'ar');
        }
      },
      computed: {
        languages() {
          return this.$i18n.locales
        },
        activeLang() {
          return this.$i18n.locale
        },
        analysisCategory(){
          return this.$store.getters.getAnalysisCategories
        },
      },
      created() {
        this.getAnalysisCategories()
      },
      methods: {
        getAnalysisCategories() {
          this.$store.dispatch('getAnalysisCategories');
        },
        changeLang: function (language) {
          this.$i18n.setLocale(language);
          this.restartServices();
          this.$router.push('/')
        },
        restartServices: function() {
          console.log("language changed");
          window.location.reload(true)
          this.socket.emit('change lang', this.$i18n.locale)
        },
        async onLogout() {
          await this.$auth.logout()
        }
      }
    }
</script>

<style>

#my-dropdown-toggle span{
  color: rgba(255, 255, 255, 0.85);
}
#my-dropdown-toggle span :hover{
  color: #231f20;
}

  @media (min-width: 1200px) {
    #analysisCollapse {
      display: block; } 
}

</style>