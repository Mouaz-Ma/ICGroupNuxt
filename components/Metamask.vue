<template>
    <div
        @click="$emit('connect')"
        class="btn-primary metBtn">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamask"
            class="h-5 mr-2 metaImage">
        Connect to Metamask
    </div>
</template>
<style scoped>
.metaImage{
    height: 50px;
}
.metBtn{
    width: 300px;
}

</style>