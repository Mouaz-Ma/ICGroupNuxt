<template>
<v-app class="mt-4">
      <div style="overflow-x: hidden; display: flex; flex-flow: column; height: 100vh">
        <div id="header">
          <Header />
        </div>
        <page-banner :title="$t('Tools')"/>
            <div id="main-wrapper show">

          <div class="blog section-padding border-0">
            <div class="container">
              <div class="row">
                <div class="col-12">
                    <Nuxt />
                </div>
              </div>
            </div>
          
        </div>
            </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
</v-app>
</template>
<script>
import Header from '@/components/layouts/header'
import Footer from "@/components/layouts/footer";
import PageBanner from '@/components/pageBanner.vue';
export default {
  name: 'tools',
  components: {
    Header,
    Footer,
    PageBanner
  },
    
}
</script>