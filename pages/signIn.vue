<template>
    <div id="main-wrapper show" class="show">
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                         <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logo.png" alt=""></NuxtLink>
                        <h4 class="card-title mt-3">Sign in to Tradee</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form @submit.prevent="signIn" class="signin_validate row g-3" >
                                <div class="col-12">
                                    <input type="email" class="form-control" placeholder="hello@example.com"
                                        v-model="email">
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                                </div>
                                <div class="col-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Remember
                                            me</label>
                                    </div>
                                </div>
                                <div class="col-6 text-right">
                                    <a href="reset.html">Forgot Password?</a>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                </div>
                            </form>
                            <p class="mt-3 mb-0">Don't have an account? <NuxtLink to="/register" class="text-primary">Sign up</NuxtLink></p>
                        </div>

                    </div>
                    <div class="privacy-link">
                        <a href="signup.html">Have an issue with 2-factor
                            authentication?</a>
                        <br />
                        <a href="signup.html">Privacy Policy</a>
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
         email: '',
         password: ''
       };
    },
  methods: {
     signIn() {
         this.$axios.post(process.env.API_URL+'/users/login', {
          email: this.email,
          password: this.password
        })
        .then( (response) => {
        this.$router.push({path: '/'});
          console.log(response.data);
        })
        .catch( (error) => {
          console.log(error);
        });
    }
  }
}
</script>
<style scoped>
html{
    height: 100%;
}
</style>