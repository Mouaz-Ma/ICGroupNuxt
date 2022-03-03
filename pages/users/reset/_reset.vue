<template>
    <div id="main-wrapper show">

    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-4 col-md-5">
                    <div class="mini-logo text-center my-3">
                        <NuxtLink to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                        <h4 class="card-title mt-3">Reset Password</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                                <b-alert v-model="notMatched" variant="danger" dismissible>
                                Passwords didn't match, please Enter Again!
                                </b-alert>
                            <form @submit.prevent="passReset" class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Enter your Password</label>
                                    <input v-model="password" type="text" class="form-control" placeholder="***********">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Confirm Password</label>
                                    <input v-model="confirmPassword" type="text" class="form-control" placeholder="***********">
                                </div>
                                <div class="text-center mt-4">
                                    <button class="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                            <div class="new-account mt-3">
                                <p>Don't get code? <a class="text-primary" href="otp-1.html">Resend</a></p>
                                <NuxtLink to="/">Go to Home Page</NuxtLink>
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
    data() {
       return {
         password: '',
         confirmPassword: '',
         notMatched: false,
       };
    },
    methods: {
        async passReset () {
            try {
                if(this.password === this.confirmPassword && this.password != null){
                    let response = await this.$axios.post('/api/users/passReset/'+this.$route.params.reset , {password: this.password});
                    if(response.data.success === true){
                        console.log(response.data.email)
                    this.$auth.loginWith('local', {
                            data: {
                            email: response.data.email,
                            password: this.password,
                            }
                        })
                    // this.$router.push('/')
                    }
                } else {
                    this.notMatched = true
                }

            } catch (err) {
                console.log(err);
            }
        },
    }
    
}
</script>