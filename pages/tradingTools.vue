<template>
        <Banner :title="$t('Trading Tools')" />
</template>
<script>
import Banner from "@/components/pageBanner";
export default {
        scrollToTop: true,
          auth: false,
          layout: 'index',
          components: {
            Banner
          },
}
</script>