<template>
<v-app>
    <div id="main-wrapper show" class="show">
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                         <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                            <h4 class="card-title mt-3 mb-3 text-center">New Analysis Form</h4>
                    </div>
                      <!-- alerts -->
                    <div v-if="successMessage === 'true'">
                        <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">New Analysis been uploaded</v-alert>
                    </div>

                    <div v-else-if="successMessage === 'false'">
                        <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error"> there was an Eroor submiting your form</v-alert>
                    </div>
                    
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="uploadAnalysis" class="row g-3" enctype='multipart/form-data'>
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Title" v-model="title" required>
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Tags" v-model="tagsInput">
                                </div>
                                <hr>
                                <h3><i class="icofont-upload-alt"></i>uploads</h3>
                                <div class="col-12">
                                    <label for="image-upload" class="custom-file-upload">
                                        <i class="icofont-file-image"></i> Image Upload
                                    </label>
                                        <b-form-file
                                        placeholder="Choose an image or drop it here..."
                                        drop-placeholder="Drop file here..."
                                        @change="onFileSelected"
                                        id="image-upload"
                                        class="d-none"
                                        ></b-form-file>
                                </div>
                                <div class="m-1">Selected Image file: {{ selectedFile ? fileName: '' }}</div>

                                <div class="col-12">
                                    <label for="audio-upload" class="custom-file-upload">
                                        <i class="icofont-file-audio"></i> Audio Upload
                                    </label>
                                        <b-form-file
                                        drop-placeholder="Drop file here..."
                                        @change="onAudioFileSelected"
                                        id="audio-upload"
                                        class="d-none"
                                        ></b-form-file>
                                </div>
                                <div class="m-1">Selected Audio file: {{ selectedAudioFile ? audioFileName : '' }}</div>
                                <hr>
                                <div class="col-12">
                                <v-select
                                    v-model="selectedCategory"
                                    :items="analysisCategory"
                                    item-text="type"
                                    item-value="_id"
                                    label="Category"
                                    solo
                                ></v-select>

                                </div>
                                <div class="col-12 border">
                                    <tiptap-editor  v-model="content" />
                                </div>
                                <!-- alerts -->
                                <div class="col-12">
                                    <b-alert variant="danger">
                                    Dismissible Alert!
                                    </b-alert>
                                </div>
                                

                                <div class="text-center">
                                    <button class="btn btn-primary btn-block">Upload Analysis</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</v-app>
</template>
<script>
import TiptapEditor from "@/components/TiptapEditor.vue"
export default {
    components:{
        TiptapEditor
    },
    data() {
       return {
           title: '',
           tagsInput: '',
           content: '',
           user: '',
           selectedFile: null,
           selectedAudioFile: null,
           fileName: '',
           audioFileName: '',
           selectedCategory: null,
           successMessage: '',
       };
    },
    computed: {
        analysisCategory(){
          return this.$store.getters.getAnalysisCategories
        },
    },
    created() {
        this.getAnalysisCategories()
    },
  methods: {
    getAnalysisCategories() {
          this.$store.dispatch('getAnalysisCategories');
        },
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.fileName = event.target.files[0].name;
      },
    onAudioFileSelected(event) {
        this.selectedAudioFile = event.target.files[0];
        this.audioFileName = event.target.files[0].name;
      },
    async uploadAnalysis() {
        try {
            let tags = this.tagsInput.split(' ');
            let data = new FormData();
            data.append("title", this.title);
            data.append("tagsInput", tags);
            data.append("content", this.content);
            data.append("userID", this.$auth.$state.user._id);
            data.append("photo", this.selectedFile);
            data.append("audio", this.selectedAudioFile);
            data.append("category", this.selectedCategory);
            
          let response = await this.$axios.post('/api/analysis/new', data);

          if (response.data.success) {
              this.successMessage = 'true';
            this.$router.push({name: 'analysis',  query: { categoryId: this.selectedCategory}})
          } else {
               this.successMessage = 'false';
          }
        } catch (err) {
             this.successMessage = 'false';
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