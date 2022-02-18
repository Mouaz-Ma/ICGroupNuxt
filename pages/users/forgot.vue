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
                            <form @submit.prevent="requestReset" action="verify-email.html" class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Email</label>

                                    <input v-model="email" type="text" class="form-control" placeholder="hello@example.com">
                                </div>
                                <div class="text-center mt-4">
                                    <button class="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                            <div class="new-account mt-3">
                                <p>Don't get code? <a class="text-primary" href="otp-1.html">Resend</a></p>
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
         email: '',
       };
    },
    methods: {
        async requestReset () {
            try {
                let response = await this.$axios.post('/api/users/requestReset', {email: this.email});
                console.log(response)
                if (response.data.success){
                    this.$router.push('/')
                }

            } catch (err) {
                console.log(err);
            }
        },
    }
    
}
</script>