<template>
    <div class="container-fluid section-margin pt-5" id="pageBanner">
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
    background: url(~/assets/images/banner_1.png);
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
}

</style>