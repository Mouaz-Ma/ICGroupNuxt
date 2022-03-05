<template>
  <div>

      <b-card :title=title img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
        <b-card-text>
        </b-card-text>
        <template #footer>
          <a href="#" class="author"><img id="authorImage" src="~/assets/images/avatar/5.jpg" alt="">{{author}}</a>
          <a href="#" class="text-muted float-right"><i class="la la-calendar"></i> 31 July,
            2019</a>
        </template>
      </b-card>

  </div>
</template>
<script>
export default {
    props: ['title', 'author']
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
</style>