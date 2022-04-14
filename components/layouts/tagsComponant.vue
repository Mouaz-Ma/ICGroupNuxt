<template>
            <div class="widget-tag">
            <h3 class="widget-title">Tags</h3>
            <div class="tag-group">
                <a href="#" v-for="tag,index in tags" :key=index>{{tag}}</a>
            </div>
        </div>
</template>
<script>
export default {
    props: {
        tags: {
            type: Array,
            default: () => []
        }
    }
}
</script>