<template>
        <Banner :title="$t('Trading Tools')" />
</template>
<script>
import Banner from "@/components/pageBanner";
export default {
    auth: false,
        scrollToTop: true,
          layout: 'index',
          components: {
            Banner
          },
}
</script>