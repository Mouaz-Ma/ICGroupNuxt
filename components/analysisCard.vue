<template>

<nuxt-link :to="'/analysis/'+analysisId" >
<div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img id="cardImage" :src=imageSrc alt="Image" class="rounded-0 img-fluid card-img-top"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title=title>
          <b-card-text>
           <!-- <h4 class="card-title">{{title}}</h4> -->
           <p class="mt-2 mb-5" v-html="content.substring(0,100)+'..'"></p>
                 <div class="card-footer">
            <div class="meta-info">
              <a href="#" class="author"><img id="authorImage" src="~/assets/images/avatar/5.jpg" alt="">{{author}}</a>
              <a href="#" class="text-muted float-right"><i class="la la-calendar"></i>
                {{ $moment(createdAt).format('MM/DD/YYYY')}}</a>
            </div>
          </div>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
  </nuxt-link>
</template>
<script>
export default {
    props: ['title', 'author', 'content', 'imageSrc', 'createdAt', 'analysisId']
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
  height: 100%;
  width: 100%;
  padding: 2px;
}

.card-footer{
  bottom: 0;
  position: absolute;
}
</style>