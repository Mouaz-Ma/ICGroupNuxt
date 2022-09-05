<template>

  <nuxt-link :to="'/blogs/' + blogId">
    <div class="icg-blog-card">
      <div class="icg-blog-card__image-container">
        <img class="icg-blog-card__image" :src=imageSrc alt=""></img>
      </div>
      <div class="icg-blog-card__body">
        <h4 class="card-title">{{ title }}</h4>

        <!-- <b-card-text v-if="content.length<100">{{content}}</b-card-text>
        <b-card-text v-else>{{content.substring(0,100)+".."}}</b-card-text> -->
      </div>

      <div class="icg-blog-card__footer">
        <div class="">
          <a href="#" class="author">By: ICGroupsFX</a>
        </div>
        <!-- <img id="authorImage" src="~/assets/images/avatar/5.jpg" alt=""> -->
        <div class="">
          <a href="#" class="text-muted"><i class="la la-calendar"></i>
            {{ $moment(createdAt).format('MM/DD/YYYY') }}</a>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
    props: ['title', 'author', 'content', 'imageSrc', 'createdAt', 'blogId']
}
</script>

<style scoped>

.icg-blog-card {
  width: 350px;
  max-width: 350px;
  border: solid 1px #ddd;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  margin: 0.5rem;
}

.icg-blog-card__image-container {
  width: 100%;
  height: 200px;
}

.icg-blog-card__image {
  width: 100%;
  height: 100%;
}

.icg-blog-card__body {
  padding: 1rem 1.5rem;
}

.icg-blog-card__footer {
  padding: 1rem 1.5rem;
}


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
  height: 300px;
  width: 600px;
  padding: 2px;
}

@media(max-width: 786px) {
  #cardImage {
    height: 200px;
  }
}
</style>
