<template>

<nuxt-link :to="'/blogs/'+blogId" >
  <div class="blog-grid">
    <div class="card m-1">
      <img id="cardImage" class="img-fluid card-img-top" :src=imageSrc alt="">
      <div class="card-body">
          <h4 class="card-title">{{title}}</h4>

        <!-- <b-card-text v-if="content.length<100">{{content}}</b-card-text>
        <b-card-text v-else>{{content.substring(0,100)+".."}}</b-card-text> -->
      </div>
      <div class="card-footer">
        <div class="meta-info">
          <a href="#" class="author"><img id="authorImage" src="~/assets/images/avatar/5.jpg" alt="">{{author}}</a>
          <a href="#" class="text-muted float-right"><i class="la la-calendar"></i>
            {{ $moment(createdAt).format('MM/DD/YYYY')}}</a>
        </div>
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