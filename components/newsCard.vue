<template>

<nuxt-link :to="'/news/'+newsId">
    <b-card :title=title :img-src=imageSrc img-top tag="article" style="max-width: 20rem;" class="m-2">
      <b-card-text>
        <b-card-text>
          <div class="news-description" v-html="getContent">
          </div>
        </b-card-text>
        <div class="meta-info">
          <a href="#" class="text-muted float-right mt-2"><i class="la la-calendar"></i>
            {{ $moment(createdAt).format('MM/DD/YYYY')}}</a>

            <b-button class="bootstrap-btn-override" variant="primary">{{ $t('Go To Article') }}</b-button>

        </div>
      </b-card-text>

    </b-card>
   </nuxt-link>
</template>
<script>
export default {
  props: ['title', 'author', 'content', 'imageSrc', 'createdAt', 'newsId'],
  computed: {
    getContent() {
      const cleanText = this.content.replace(/<\/?[^>]+(>|$)/g, '');
      return cleanText.length < 100 ? cleanText : cleanText.substring(0, 100) + '...';
    },
  },
};
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

.bootstrap-btn-override:hover, .bootstrap-btn-override:focus {
  color: #231f20;
}

.news-description {
  color: #8492A6;
}

#cardImage{
  object-fit: cover;
  height: 500px;
  width: 700px;
  padding: 2px;
}
</style>
