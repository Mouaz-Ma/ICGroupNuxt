<template>
    <div id="main-wrapper show" class="show">
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                         <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                            <h4 class="card-title mt-3 mb-3 text-center">New Blog Form</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="uploadBlog" class="signin_validate row g-3">
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Title" v-model="title">
                                </div>
                                        <b-form-file v-model="images"
                                        :state="Boolean(images)"
                                        placeholder="Choose an image or drop it here..."
                                        drop-placeholder="Drop file here..."
                                        ></b-form-file>
                                        <div class="mt-1">Selected file: {{ images ? images.name : '' }}</div>
                                
                                <div class="col-12">
                                    <textarea rows="4" cols="50" class="form-control" placeholder="Blog Body"
                                        v-model="content">
                                    </textarea>
                                </div>
                                <!-- alerts -->
                                <div class="col-12">
                                    <b-alert variant="danger">
                                    Dismissible Alert!
                                    </b-alert>
                                </div>
                                

                                <div class="text-center">
                                    <button class="btn btn-primary btn-block">Upload a blog</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    async asyncData({ $axios}) {
        
    },

    data() {
       return {
           title: '',
           images: [],
           content: '',
           user: this.$auth.$state.user,
       };
    },
  methods: {
    async uploadBlog() {
        try {
          let data = {
            title: this.title,
            images: this.images,
            content: this.content,
            user: this.$auth.$state.user
          };
          let response = await this.$axios.post('/api/blogs/new', data);

          console.log(response.data.success)

          if (response.data.success) {
            console.log(response.data)
          }
        } catch (err) {
          console.log(err);
        }
      },
    }
}
</script>
<style scoped>
html{
    height: 100%;
}
.iconLogo{
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    opacity: .6;
    -webkit-transition: .6s;
    -moz-transition: .6s;
    transition: .6s;
}

.iconLogo:hover {
    filter: grayscale(0%);
    opacity: 1;
    margin-top: -5px;
    box-shadow: 0px 18px 22px -15px rgba(0,0,0,0.3);
}

#facebookLogo{
    color: #0d6efd;
    background-color: transparent;
    border-color: transparent
}

#googleLogo{
    color: #de5246;
    background-color: transparent;
    border-color: transparent
}
</style>