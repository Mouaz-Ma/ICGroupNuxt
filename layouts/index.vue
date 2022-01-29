<template>
  <div style="overflow-x: hidden; display: flex; flex-flow: column; height: 100vh">
    <div id="header">
      <Header  />
    </div>
    <div class="mt-n2">
      <Nuxt />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>

import Header from '@/components/layouts/header'
import Footer from "@/components/layouts/footer";

export default {
  name: 'defaultLayout',
  components: {
    Header,
    Footer,
  },
}

</script>