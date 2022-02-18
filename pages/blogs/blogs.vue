<template>
<div>
    <div id="main-wrapper show">
            <div class="row">
            <blog-card />
            <blog-card />
            <blog-card />
            <blog-card />
            </div>
    </div>
</div>
</template>
<script>
import BlogCard from '@/components/blogCard.vue';

export default {
  layout: 'blogs',
  components: {
    BlogCard,
  },
  }
</script>