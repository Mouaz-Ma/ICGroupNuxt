<template>
        <div id="main-wrapper show">

        <div class="verification section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="mini-logo text-center my-4">
                            <NuxtLink to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                        </div>
                        <div class="auth-form card">
                            <div class="card-body">
                                <form action="verify-step-2.html" class="identity-upload">
                                    <div class="identity-content">
                                        <span class="icon"><i class="icofont-email"></i></span>
                                        <p>thank you for verifying your account. Click the link inside to get started!</p>
                                        <NuxtLink to="/">Go to Home Page</NuxtLink>
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
      methods: {
    async checkString () {
      const string = this.$route.params.email
      console.log(string);
      const verification = await this.$axios.get('/api/users/verify/'+string)
    }
  },
  mounted () {
    this.checkString()
  }
    
}
</script>