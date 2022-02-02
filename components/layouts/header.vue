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
                        
                        <b-collapse class="collapse navbar-collapse" id="my-collapse">
                            <ul class="navbar-nav">

                                
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/">{{$t('home')}}</NuxtLink>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#"  v-b-toggle.analysisCollapse  data-target="#analysisCollapse">Analysis</a>
                                    
                                    <b-collapse class="dropdown-menu description" id="analysisCollapse" >
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
                                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Company
                                    </a>
                                    <div class="dropdown-menu">
                                        <NuxtLink class="dropdown-item" to="/aboutUs">{{$t('about')}}</NuxtLink>
                                        <a class="dropdown-item" href="./team.html">Team</a>
                                        <a class="dropdown-item" href="./career.html">Career</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Support
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="./contact.html">Contact us</a>
                                        <a class="dropdown-item" href="./helpdesk.html">Help Desk</a>
                                        <a class="dropdown-item" href="./privacy-policy.html">Privacy</a>
                                        <a class="dropdown-item" href="./faq.html">FAQ</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/blogs">Blogs</NuxtLink>
                                </li>
                                <li>
                                    <div class="signin-btn">
                                        <NuxtLink class="btn btn-primary" to="/signIn">Sign in</NuxtLink>
                                    </div>
                                </li>


                            </ul>
                        </b-collapse>


                        <!-- language -->
                        <div class="d-none d-lg-block">
                            <b-dropdown id="my-dropdown-toggle" class="ml-3 mr-3" variant="outline-secondary" no-caret>
                            <template #button-content>
                                <img :src="require(`@/assets/icons/`+ $i18n.locale +`.svg`)" style="width: 24px; height: auto" alt="" class="mr-1" />
                                    <span>{{ $t('lang') }}</span>
                            </template>
                                    <b-dropdown-item
                                    v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code" :active="lang.code === activeLang" @click="changeLang(lang.code)">
                                    <img :src="require(`@/assets/icons/`+ lang.code +`.svg`)" style="width: 24px; height: auto" alt="" class="mr-1" />
                                    <span>{{ lang.name }}</span>
                                </b-dropdown-item>
                            </b-dropdown>
                        </div>
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
        // hoverHandler(isHovered) {
        //   if (isHovered) {
        //     console.log("hoered");
        //     return true;
        //   } else {
        //     // Do something else
        //     console.log("gone");
        //     return false;
        //   }
        // }
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


</style>