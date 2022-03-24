<template>


    <b-card :title=title :img-src=imageSrc img-top tag="article" style="max-width: 20rem;" class="m-2">
      <b-card-text>
        <b-card-text v-if="content.length<100">
          <div v-html="content">
          </div>
        </b-card-text>
        <b-card-text v-else>
          <div v-html="content.substring(0,100)+'..'">
          </div>
        </b-card-text>
        <div class="meta-info">
          <a href="#" class="text-muted float-right mt-2"><i class="la la-calendar"></i>
            {{ $moment(createdAt).format('MM/DD/YYYY')}}</a>
          <nuxt-link :to="'/news/'+newsId">
            <b-button variant="primary">Go To Article</b-button>
          </nuxt-link>
        </div>
      </b-card-text>

    </b-card>
  
</template>
<script>
export default {
    props: ['title', 'author', 'content', 'imageSrc', 'createdAt', 'newsId']
}
</script>

<style scoped>
#authorImage{
    max-width: 30px;
        border-radius: 50px;
        margin-right: 7px;
}
a {
    color: #fbcc31;
    text-decoration: none;
    outline: none;
}

#cardImage{
  object-fit: cover;
  height: 500px;
  width: 700px;
  padding: 2px;
}
</style>