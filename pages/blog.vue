<template>
    <div id="main-wrapper show">
        <single-blog />
</div>
</template>
<script>
import SingleBlog from '@/components/singleBlog.vue'
export default {
  layout: 'blogs',
  components: {
    SingleBlog
  },
}
</script>