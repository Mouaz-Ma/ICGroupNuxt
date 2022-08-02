<template>

        <div class="blog border-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    
                    <div class="blog-single-post single">
                        <ul class="post-nfo">
                            <li><i class="la la-calendar"></i>{{$moment(createdAt).format('DD/MM/YYYY')}}</li>
                            <li><i class="la la-comment-o"></i><a href="#" title=""> By: ICGroupsFX</a></li>
                            <li><i class="la la-bookmark-o"></i>
                            <a v-for="tag in tags" :key="tag" href="#" title="">
                                <span> {{ tag }} &nbsp;</span> 
                            </a>
                            </li>
                        </ul>
                        <b-row align-v="center">
                          <b-col><h3>{{title}}</h3></b-col>
                          <b-col>
                          <div v-if="audio != null" >
                            <audio-player 
                            v-if="audio.filename"
                            :title="title"
                            author="By: ICGroupsFX"
                            :audio="audio"

                            class="m-3 float-right btns" />
                              </div>
                              <b-button v-if="$auth.$state.loggedIn && $auth.$state.user.userType ==='Administrator'" class="m-3 float-right btns" variant="danger" @click="deleteAnalysis()">Delete </b-button>
                              <b-button v-if="$auth.$state.loggedIn && $auth.$state.user.userType ==='Administrator'" class="m-3 float-right" variant="success"><nuxt-link class="btns" :to="`/analysis/update/${this.$route.params.id}`">Update </nuxt-link></b-button>
                        
                          </b-col>
                        </b-row>
                        <div class="blog-img">
                            <img :src=image.url alt="" class="img-fluid">
                        </div>
                        <!--blog-img end-->
                        <div v-html="content"></div>
                    </div>
                    <!--blog-single-post end-->
                    <!-- <div class="comment-section">
                        <h3 class="p-title">Comments</h3>
                        <ul>
                            <li>
                                <div class="cm-info-sec">
                                    <div class="cm-img">
                                        <img src="~/assets/images/blog/cm-img.png" alt="">
                                    </div>
                                    
                                    <div class="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>April 25, 2018</h4>
                                    </div>
                                </div>

                                <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id,
                                    porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut
                                    sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc
                                    molestie. </p>
                                <a href="#" title="" class="cm-reply">Reply</a>
                            </li>
                            <li>
                                <div class="cm-info-sec">
                                    <div class="cm-img">
                                        <img src="~/assets/images/blog/cm-img.png" alt="">
                                    </div>
                                    
                                    <div class="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>April 25, 2018</h4>
                                    </div>
                                </div>

                                <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id,
                                    porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut
                                    sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc
                                    molestie. </p>
                                <a href="#" title="" class="cm-reply">Reply</a>
                            </li>
                            <li>
                                <div class="cm-info-sec">
                                    <div class="cm-img">
                                        <img src="~/assets/images/blog/cm-img.png" alt="">
                                    </div>
                                    
                                    <div class="cm-info">
                                        <h3>Kritsofer Nolan</h3>
                                        <h4>April 25, 2018</h4>
                                    </div>
                                </div>

                                <p>Nam placerat facilisis placerat. Morbi elit nibh, auctor sit amet sodales id,
                                    porttitor eu quam. Aenean dui libero, laoreet quis con sequat vitae, posuere ut
                                    sapien. Etiam pharetra nulla vel diam eleifend, eu placerat nunc
                                    molestie. </p>
                                <a href="#" title="" class="cm-reply">Reply</a>
                            </li>
                        </ul>
                    </div> -->
                    <!--comment-section end-->
                    <!-- <div class="post-comment-sec" id="comment-sec">
                        <h3 class="p-title">Leave a reply</h3>
                        <form class="js-ajax-form" novalidate="novalidate">
                            <div class="form-fieldss">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 pl-0">
                                        <div class="form-group">
                                            <input class="form-control" type="text" name="name" placeholder="Your Name"
                                                id="name">
                                        </div>
                                       
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="form-group">
                                            <input class="form-control" type="email" name="email"
                                                placeholder="Your Email" id="email">
                                        </div>
                                       
                                    </div>
                                    <div class="col-lg-4 col-md-4 pr-0">
                                        <div class="form-group">
                                            <input class="form-control" type="text" name="phone"
                                                placeholder="Your Phone">
                                        </div>
                                       
                                    </div>
                                    <div class="col-lg-12 col-md-12 pl-0 pr-0">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message"
                                                placeholder="Your Message"></textarea>
                                        </div>
                                       
                                    </div>
                                    <div class="col-lg-12 col-md-12 pl-0">
                                        <button type="submit" class="btn btn-primary submit">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> -->
                    <!--post-comment-sec end-->
                </div>
            </div>
        </div>
    </div>  

</template>
<script>

export default {
    props: {
        title: String,
        tags: [],
        content: String,
        reviews: [],
        image: {
            url: String,
            filename: String
        },
        audio: {
            url: String,
            filename: String
        },
        author: {
            username: String
        },
        createdAt: String,
        selectedCategory:{
            id: String
            } 
    },
    methods: {
        deleteAnalysis: async function () {
          try {
            let deleteResponse = await this.$axios.delete('/api/analysis/single/' + this.$route.params.id);
            if (deleteResponse.data.success) {
                this.$router.go(-1) 
            } else {
              console.log("you are not supposed to be here buddy!!");
            }
          } catch (err) {
            console.log(err)
          }
        }
    }
}
</script>

<style scoped>
.btns{
    color: white;
    text-decoration: none;
    outline: none;
}
</style>