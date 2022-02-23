<template>
    <div id="main-wrapper show" class="show">
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                         <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                        <h4 class="card-title mt-3">Create your account</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="register" class="signin_validate row g-3">
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Name" v-model="username">
                                </div>
                                <div class="col-12">
                                    <input type="email" class="form-control" placeholder="hello@example.com"
                                        v-model="email">
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                                </div>
                                <!-- alerts -->
                                <div class="col-12">
                                    <b-alert variant="danger">
                                    Dismissible Alert!
                                    </b-alert>
                                </div>
                                    
                                <div class="col-12">
                                    <div class="form-check form-switch">
                                        <input v-b-popover.left="'please confirm you are 18 or more'" v-model="checked" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">
                                            I certify that I am 18 years of age or older, and agree to the <a href="#"
                                                class="text-primary">User Agreement</a> and <a href="#"
                                                class="text-primary">Privacy Policy</a>.
                                        </label>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <button class="btn btn-primary btn-block">Create account</button>
                                </div>
                            </form>
                            <div class="text-center">
                                    <p class="mt-3 mb-0">Or Register in with: </p>
                                    <b-button @click="$auth.loginWith('facebook')" class="iconLogo" id="facebookLogo" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" /></b-button>
                                    <b-button @click="$auth.loginWith('google')" class="iconLogo" id="googleLogo" target="_blank"><font-awesome-icon :icon="['fab', 'google']" class="fa-2x" /></b-button>
                                </div>
                            <div class="text-center">
                                <p class="mt-3 mb-0"> <nuxt-Link to="/users/signIn" class="text-primary">Sign in</nuxt-Link> to your account</p>
                            </div>
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
    middleware: "auth",
    auth: "guest",
    data() {
       return {
         username: '',
         email: '',
         password: '',
         checked: false,
         notchecked: ""
       };
    },
  methods: {
     async register() {
       try {
           if(this.checked){
               let data = {
                username: this.username,
                email: this.email,
                password: this.password
               };
             let response = await this.$axios.post('/api/users/register', data);
    
             console.log(response.data.success)
             
             if (response.data.success) {
               this.$auth.loginWith('local', {
                 data: {
                   email: this.email,
                   password: this.password,
                 }
               }).then(() => {
                   this.$router.push({
                     name: 'users-verifyEmail',
                     params: {
                       email: this.email
                     }
                   });
               }).catch(() => {});
           }
         } else {
             this.$root.$emit('bv::show::popover', 'flexSwitchCheckDefault')
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