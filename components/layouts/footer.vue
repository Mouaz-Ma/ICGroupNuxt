<template>
<div id="footer">
          <div id="whatsAppBtn">
    <a href="https://wa.me/905445355553?text=ICGroup%20%D8%A7%D9%86%D8%A7%20%D9%85%D9%87%D8%AA%D9%85%20%D8%A8%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20" class="btn whatsApp"><img id="whatsAppImage"
        src="https://global-uploads.webflow.com/601befbd3e6c39d9b373aa94/606aecfac9846644d0c6d979_whatsapp.svg"
        alt=""></a>
  </div>
    <div class="bottom section-padding">
    <div class="container">
        <div class="row">
            <p class="registeration">{{$t('registration')}}</p>
            <div class="warningLink">
                <a href="https://drive.google.com/file/d/1iURtCaA6gLt3IFZhKDnGVmrkLFmsmv2t/view" target="_blank"><p>{{$t('warning')}}</p></a>
            </div>
            <div class="col-xl-4 col-md-4">
                <div class="bottom-logo">
                    <img class="pb-3" src="~/assets/images/logow.png" alt="">

                    <a href="https://drive.google.com/file/d/1iURtCaA6gLt3IFZhKDnGVmrkLFmsmv2t/view" target="_blank"><p>{{$t('footerCompanyDescriptio')}}</p></a>
                </div>
            </div>
            <div class="col-xl-2 col-md-2">
                <div class="bottom-widget">
                    <h4 class="widget-title">Company</h4>
                    <ul>
                        <li><NuxtLink to="/aboutUs">{{ $t('about')}}</NuxtLink></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Success Story</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-2 col-md-2">
                <div class="bottom-widget">
                    <h4 class="widget-title">Support</h4>
                    <ul>
                        <li><NuxtLink to="/contact">contact</NuxtLink></li>
                        <li><NuxtLink to="/privacy">Privacy</NuxtLink></li>
                        <li><NuxtLink to="/users/register">Open Account</NuxtLink></li>
                        <li><NuxtLink to="/helpdesk">Help Desk</NuxtLink></li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4 col-md-4">
                <div class="bottom-widget">
                    <h4 class="widget-title">Analysis</h4>
                    <div class="row">
                        <div class="col-xl-6">
                            <ul>
                        <li v-for="category in analysisCategory" :key="category._id">
                            <NuxtLink :to="{name: 'analysis',  query: { categoryId: category._id}}">{{category.type}}</NuxtLink>
                        </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="copyright">
                    <p>© Copyright 2022 <a href="#">ICGroupsFx</a> {{ $t('copy Rights')}}</p>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="footer-social">
                    <ul>
                        <li><a href="https://www.facebook.com/icgroupsfx/"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/icgroupsfx/"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://t.me/icgroupforex"><i class="fab fa-telegram"></i></a></li>
                        <!-- <li><a href="#"><i class="fab fa-twitter"></i></a></li> -->
                        <li><a href="https://www.linkedin.com/in/icgroupsfx/"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCJ-JtUfpKLrnfkhA3Mj0RCQ"><i class="fab fa-youtube"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    computed: {
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
      }
}
</script>
<style>
#footer{
    bottom:0;
    width: 100%;
}


#whatsAppBtn {
  position: fixed;
  bottom: 60px;
  right: 20px; 
  z-index: 1000;
}

#whatsAppImage{
  max-width: 100%;
  height: 75px;
}

.registeration{
    color: rgba(255, 255, 255, 0.8);
    margin-top: -25px;
}

.warningLink a{
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: underline;
}

.warningLink a :hover{
    color: #fbcc31;
}
</style>
