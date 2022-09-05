<template>

<nuxt-link :to="'/blogs/'+blogId" >
  <div class="blog-grid">
    <div class="card m-1 h-100b w-100">
      <img id="cardImage" class="img-fluid card-img-top" :src=imageSrc alt="">
      <div class="card-body">
          <h4 class="card-title">{{title}}</h4>

        <!-- <b-card-text v-if="content.length<100">{{content}}</b-card-text>
        <b-card-text v-else>{{content.substring(0,100)+".."}}</b-card-text> -->
      </div>
      <div class="card-footer">
        <div class="">
          <div class="row">
            <a href="#" class="author">By: ICGroupsFX</a>
          </div>
          <!-- <img id="authorImage" src="~/assets/images/avatar/5.jpg" alt=""> -->
          <div class="row">
            <a href="#" class="text-muted"><i class="la la-calendar"></i>
              {{ $moment(createdAt).format('MM/DD/YYYY')}}</a>
          </div>
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
