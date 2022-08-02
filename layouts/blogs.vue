<template>
      <div style="overflow-x: hidden; display: flex; flex-flow: column; height: 100vh">
        <div id="header">
          <Header />
        </div>
        <page-banner :title="$t('Blogs')"/>
            <div id="main-wrapper show">

          <div class="blog section-padding border-0">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 col-lg-9">
                    <Nuxt />
                </div>
                <div class="col-xl-3 col-lg-3">
                  <blog-side-bar />
                </div>
              </div>
            </div>
          
        </div>
            </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
</template>
<script>
import Header from '@/components/layouts/header'
import Footer from "@/components/layouts/footer";
import BlogSideBar from '@/components/blogSideBar.vue';
import PageBanner from '@/components/pageBanner.vue';
export default {
  name: 'blogs',
  components: {
    Header,
    Footer,
    BlogSideBar,
    PageBanner
  },
    
}
</script>