<template>
        <div class="blog-sidebar">
        <div class="widget-search">
        <NuxtLink v-if="!$auth.$state.user" to="/users/register" class="btn btn-primary mb-1 w-100">Real Account</NuxtLink>
        </div>
        <div class="widget-recent-post">
            <h3 class="post-title">Recent News</h3>
            <ul class="list-unstyled">
                <li v-for="news in allNews.slice(-3)" :key="news._id" class="d-flex media">
                    <img id="sideBarImage" :src="news.image.url" class="mr-3" alt="...">
                    <div class="media-body">
                    <nuxt-link :to="'/news/'+news._id">
                        <h5 class="mt-0 mb-1">{{news.title}}</h5>
                    </nuxt-link>
                        <div class="meta-info">
                            <a href="#"><i class="la la-user"></i> {{news.author.username}}</a><br>
                            <a href="#"><i class="la la-calendar"></i> {{ $moment(news.createdAt).format('MM/DD/YYYY')}}</a>
                    <hr>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="widget-category">
            <h3 class="widget-title">Analysis Categories</h3>
            <ul class="list-group">
                <li v-for="item in items" :key="item" class="list-group-item d-flex justify-content-between align-items-center">
                    <nuxt-link class="linkAnalysis" :to="{name: 'analysis',  query: { categoryId: item._id}}">
                    {{item.type}}
                    </nuxt-link>
                    <span class="badge badge-primary"><i class="icofont-external-link"></i></span>
                </li>
            </ul>
        </div>
        <div class="widget-tag">
            <h3 class="widget-title">Tags</h3>
            <div class="tag-group">
                <a href="#">Tradix</a>
                <a href="#">Song</a>
                <a href="#">Title</a>
                <a href="#">Good</a>
                <a href="#">Dashboard</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  async fetch() {
    try {
      const allNewsFetch = await fetch(process.env.API_URL + '/api/news/').then(res => res.json())
      this.allNews = allNewsFetch.news
      console.log(this.allNews)
    //   console.log(allNews.body)
    //   return {allNewsData}
    } catch(err){
      console.log(err);
    }
  },
      computed: {
        items:{
            get: function() {
            return this.$store.state.analysisCategories.map(element => {
            return element;
            });
            }
        }
    },
    data() {
        return {
        allNews: [],
        title: "",
        author: "",
        loading: false,
        }
    },
}
</script>

<style scoped>
#sideBarImage{
    object-fit: contain;
}
.linkAnalysis{
    text-decoration: none;
    color: gray;
}
</style>