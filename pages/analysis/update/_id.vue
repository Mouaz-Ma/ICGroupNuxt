<template>
    <div id="main-wrapper show" class="show">
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                         <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                            <h4 class="card-title mt-3 mb-3 text-center">Update Analysis</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="uploadAnalysisEdit" class="row g-3" >
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Title" v-model="title" required>
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
                                        <div class="mt-1">Selected file: {{ selectedFile ? selectedFile.name : '' }}
                                            <img  v-bind:style="{ display: computedDisplay }" id="selectedFileImage" :src="selectedFileUrl" alt="">
                                        </div>
                                </div>
                                 <div class="col-12">
                                <v-select
                                    v-model="selectedCategory"
                                    :items="analysisCategory"
                                    item-text="type"
                                    item-value="_id"
                                    :label="selectedCategory.type"
                                    solo
                                ></v-select>

                                </div>
                                <div class="col-12 border">
                                    <div data-app>
                                        <tiptap-vuetify v-model="content" :extensions="extensions"  @input="$emit('input', arguments[0])" />
                                    </div>
                                </div>

                                <!-- alerts -->
                                <div class="col-12">
                                    <b-alert variant="danger">
                                    Dismissible Alert!
                                    </b-alert>
                                </div>
                                

                                <div class="text-center">
                                    <button class="btn btn-primary btn-block">Confirm</button>
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
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from 'tiptap-vuetify'

export default {
    async asyncData({$axios, params}) {
    try {
        // write if analysis not found to redirect back to analysiss 
      const analysis = $axios.get('/api/analysis/single/' + params.id)
      const analysisResponse = await Promise.resolve(analysis)
      const analysisData = analysisResponse.data.analysis
      return {analysisData}
    } catch(err){
      console.log(err);
    }
  },
    components: { TiptapVuetify },
    data() {
       return {
           title: '',
           tagsInput: '',
           content: '',
           user: '',
           selectedFile: null,
           fileName: '',
           display: 'block',
           selectedFileUrl: '',
           deletedFileName: '',
            // declare extensions you want to use
            extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [
                Heading,
                {
                options: {
                    levels: [1, 2, 3, 4]
                }
                }
            ],
            Bold,
            Link,
            HorizontalRule,
            Paragraph,
            HardBreak,
            Image
            ],
            selectedCategory: ''
            };
            
    },
    computed: {
        computedDisplay: function () {
        return this.display;
        },
        analysisCategory(){
          return this.$store.getters.getAnalysisCategories
        },
    },
    created() {
           this.title= this.analysisData.title;
           this.tagsInput= this.analysisData.tags.join(' ')
           this.content= this.analysisData.content
           this.selectedFileUrl= this.analysisData.image.url
           this.selectedCategory = this.analysisData.category._id
           this.getAnalysisCategories()
    },
  methods: {
          getAnalysisCategories() {
          this.$store.dispatch('getAnalysisCategories');
        },
      onFileSelected(event) {
          this.deletedFileName = this.analysisData.image.filename
          this.selectedFile = event.target.files[0];
          this.display = 'none'
          this.fileName = event.target.files[0].name;
      },
    async uploadAnalysisEdit() {
        try {
            if(this.$auth.$state.user.userType === "Administrator"){
                let tags = this.tagsInput.split(' ');
                let data = new FormData();
                data.append("title", this.title);
                data.append("tagsInput", tags);
                data.append("content", this.content);
                data.append("userID", this.$auth.$state.user._id);
                data.append("photo", this.selectedFile);
                data.append("deletedImage", this.deletedFileName);
                data.append("category", this.selectedCategory);
    
              let response = await this.$axios.put(`/api/analysis/single/${this.$route.params.id}` , data);
    
              if (response.data.success) {
                 this.$router.push({name: 'analysis',  query: { categoryId: this.selectedCategory}})
              }
            } else {
                console.log("you are not supposed to be here buddy!!");
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

#selectedFileImage{
    height: 150px;
    width: 150px;
    object-fit: cover;
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