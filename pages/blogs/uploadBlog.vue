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
                            <form @submit.prevent="uploadBlog" class="row g-3" >
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Title" v-model="title">
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Tags" v-model="tagsInput">
                                </div>
                                <div class="col-12">
                                    <label for="file-upload" class="custom-file-upload">
                                        <i class="fa fa-plus"></i> Image Upload
                                    </label>
                                        <b-form-file
                                        placeholder="Choose an image or drop it here..."
                                        drop-placeholder="Drop file here..."
                                        @change="onFileSelected"
                                        id="file-upload"
                                        class="d-none"
                                        ></b-form-file>
                                        <div class="mt-1">Selected file: {{ selectedFile ? selectedFile.name : '' }}</div>
                                </div>
                                
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

    data() {
       return {
           title: '',
           tagsInput: '',
           content: '',
           user: '',
           selectedFile: null,
           fileName: '',
       };
    },
  methods: {
      onFileSelected(event) {
          this.selectedFile = event.target.files[0];

          this.fileName = event.target.files[0].name;
      },
    async uploadBlog() {
        try {
            let tags = this.tagsInput.split(' ');
            let data = new FormData();
            data.append("title", this.title);
            data.append("tagsInput", tags);
            data.append("content", this.content);
            data.append("userID", this.$auth.$state.user._id);
            data.append("photo", this.selectedFile);

          let response = await this.$axios.post('/api/blogs/new', data);

          if (response.data.success) {
            this.$router.push("/blogs/blogs")
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
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
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