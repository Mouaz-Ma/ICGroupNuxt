<template>

          <div class="blog-grid">
            <div class="card m-1">
              <img id="cardImage" class="card-img-top" :src=imageSrc alt="">
              <div class="card-body">
                <a href="blog-single.html">
                  <h4 class="card-title">{{title}}</h4>
                </a>
                <b-card-text v-if="content.length<100">{{content}}</b-card-text>
                <b-card-text v-else>{{content.substring(0,100)+".."}}</b-card-text>
              </div>
              <div class="card-footer">
                <div class="meta-info">
                  <a href="#" class="author"><img id="authorImage" src="~/assets/images/avatar/5.jpg"
                      alt="">{{author}}</a>
                  <a href="#" class="text-muted float-right"><i class="la la-calendar"></i>
                    {{ $moment(createdAt).format('MM/DD/YYYY')}}</a>
                </div>
              </div>
            </div>
          </div>

</template>
<script>
export default {
    props: ['title', 'author', 'content', 'imageSrc', 'createdAt']
}
</script>

<style>
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
  height: 10rem;
  width: 20rem;
  padding: 5px;
}
</style>