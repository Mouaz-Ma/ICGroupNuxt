<template>
<div class="@@dashboard">
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
                        
                        <b-collapse class="collapse navbar-collapse" id="my-collapse"  v-model="showCollapse">
                            <ul class="navbar-nav">

                                
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/">{{$t('home')}}</NuxtLink>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" v-b-toggle.analysisCollapse>Analysis</a>
                                    
                                    <b-collapse class="dropdown-menu" id="analysisCollapse"  v-model="showCollapseaAalysis">
                                        <a class="dropdown-item" href="#">Currencies</a>
                                        <a class="dropdown-item" href="#">Materials</a>
                                        <a class="dropdown-item" href="#">Stocks</a>
                                        <a class="dropdown-item" href="#">Cryptocurrencies</a>
                                    </b-collapse>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#">News</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" v-b-toggle.companyCollapse>Company</a>
                                    <b-collapse class="dropdown-menu" id="companyCollapse" v-model="showCollapseaCompany">
                                        <NuxtLink class="dropdown-item" to="/aboutUs">{{$t('about')}}</NuxtLink>
                                        <a class="dropdown-item" href="./team.html">Team</a>
                                        <a class="dropdown-item" href="./career.html">Career</a>
                                    </b-collapse>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" v-b-toggle.supportCollapse>Support
                                    </a>
                                    <b-collapse class="dropdown-menu" id="supportCollapse" v-model="showCollapseaSupport">
                                        <a class="dropdown-item" href="./contact.html">Contact us</a>
                                        <a class="dropdown-item" href="./helpdesk.html">Help Desk</a>
                                        <a class="dropdown-item" href="./privacy-policy.html">Privacy</a>
                                        <a class="dropdown-item" href="./faq.html">FAQ</a>
                                    </b-collapse>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/blogs">Blogs</NuxtLink>
                                </li>
                                <li>
                                    <div class="signin-btn">
                                        <NuxtLink class="btn btn-primary" to="/signIn">Sign in</NuxtLink>
                                    </div>
                                </li>

                        <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" v-b-toggle.languageCollapse>
                                        <img :src="require(`@/assets/icons/`+ $i18n.locale +`.svg`)" style="width: 24px; height: auto" alt="" class="mr-1 ml-1" />
                                        {{ $t('lang') }}
                                    </a>
                                    <b-collapse class="dropdown-menu" id="languageCollapse" v-model="showCollapseaLanguage">
                                        <a class="dropdown-item" href="#" v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code" :active="lang.code === activeLang" @click="changeLang(lang.code)">
                                        <img :src="require(`@/assets/icons/`+ lang.code +`.svg`)" style="width: 24px; height: auto" alt="" class="mr-1" />
                                        <span>{{ lang.name }}</span></a>
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
      data() {
            return {
            showCollapse: false,
            showCollapseaAalysis : false,
            showCollapseaCompany : false,
            showCollapseaSupport : false,

            }
        },
        watch: {
            '$route' () {
            this.showCollapse = false
            this.showCollapseaAalysis = false
            this.showCollapseaCompany = false
            this.showCollapseaSupport = false
            }
        },

      components: {
        BIcon,
        BIconArrowUp,
        BIconArrowDown
      },
      mounted() {
        console.log(this.$dir()); // logs your direction 'ltr' or 'rtl'
        console.log(this.$i18n.locale);
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
      },
      methods: {
        changeLang: function (language) {
          this.$i18n.setLocale(language);
          this.restartServices();
          this.$router.push('/')
        },
        restartServices() {
          console.log("language changed");
          window.location.reload(true)
          this.socket.emit('change lang', this.$i18n.locale)
        },
        hoverHandler(isHovered) {
          if (isHovered) {
            console.log("hoered");
            return true;
          } else {
            // Do something else
            console.log("gone");
            return false;
          }
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
      display: block; } }


</style>