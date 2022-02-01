<template>
    <div class="container-fluid section-margin" id="pageBanner">
        <div class="container">
        <h1 class="titleBnner">{{ title }}</h1>
        </div>
        </div>
</template>
<script>
export default {
    props: ['title'],
}
</script>
<style>
.titleBnner{
    padding: 0px 0px 0px 20px;
}

#pageBanner{
    padding: 20px;
    height: 100%;
    width: 100%;
    background: rgba(251, 204, 49, 100)
}
</style>