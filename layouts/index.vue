<template>
  <div class="mainLayout">
<v-app class="mt-4">
    <div id="header">
      <Header  />
    </div>
    <div class="mt-n2">
      <Nuxt />
    </div>
    <div id="footer">
      <Footer />
    </div>
</v-app>
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
<style>
.mainLayout{
  overflow-x: hidden;
  display: flex;
  flex-flow: column;
  height: 100vh;
}

</style>