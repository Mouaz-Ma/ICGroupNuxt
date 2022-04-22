<template>
        <div class="blog-sidebar">
        <div class="widget-search">
        <NuxtLink v-if="!$auth.$state.user" to="/users/register" class="btn btn-primary mb-1 w-100">Real Account</NuxtLink>
        </div>
        <div class="widget-recent-post">
            <h3 class="post-title">Recent News</h3>
            <ul class="list-unstyled">
                <li v-for="news in allNews.slice(-3)" :key="news.id" class="d-flex media">
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
                <li v-for="item in items" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                    <nuxt-link class="linkAnalysis" :to="{name: 'analysis',  query: { categoryId: item._id}}">
                    {{item.type}}
                    </nuxt-link>
                    <span class="badge badge-primary"><i class="icofont-external-link"></i></span>
                </li>
            </ul>
        </div>
        <!-- <h1>{{this.$route.query.categoryId}}</h1> -->
        <div v-if="this.$route.name === 'analysis'">
        <div v-if="this.$route.query.categoryId === '623a28c41459c68fc780eed7'">
        <tags-componant :tags="['Analysis', 'Crypto', 'BTC', 'ETH', 'Forex', 'Trading', 'MT5']" />    
        </div>
        <div v-else-if="this.$route.query.categoryId === '623a29031459c68fc780eeda'">
            <tags-componant :tags="['Analysis', 'USD', 'EUR', 'GBP', 'Currencies', 'Forex', 'Trading', 'MT5']" /> 
        </div>
        <div v-else-if="this.$route.query.categoryId === '623a29141459c68fc780eedc'">
            <tags-componant :tags="['Analysis', 'Gold', 'Silver', 'XAU', 'Forex', 'Trading', 'MT5']" /> 
        </div>
        <div v-else-if="this.$route.query.categoryId === '623a29481459c68fc780eede'">
            <tags-componant :tags="['Analysis', 'Stocks', 'DowJones', 'INDEXDJX', 'Forex', 'Trading', 'Nasdaq', 'MT5']" /> 
        </div>
        </div>
        <div v-else-if="this.$route.name === 'blogs'">
            <tags-componant :tags="['Analysis', 'Blogs', 'ICGroupsFx', 'Forex', 'Trading', 'MT5']" /> 
        </div>
        <div v-else-if="this.$route.name === 'analysisTools'">
            <tags-componant :tags="['Analysis', 'Blogs', 'ICGroupsFx', 'Trading_Tools','Forex', 'Trading', 'MT5']" /> 
        </div>

    </div>
</template>
<script>
import tagsComponant from './layouts/tagsComponant.vue'
export default {
  components: { tagsComponant },
  async fetch() {
    try {
      const allNewsFetch = await fetch('/api/news/').then(res => res.json())
      this.allNews = allNewsFetch.news
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