<template>
    <div>
  <b-card-group deck>
    <div class="row">
    <analysis />
    <analysis />
    <analysis />
    </div>
  </b-card-group>
</div>
</template>
<script>
import analysis from '@/components/analysis.vue'
export default {
  components: { analysis },
      layout: 'blogs',
}
</script>