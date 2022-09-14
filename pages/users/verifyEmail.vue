<template>
    <div id="main-wrapper show">

        <div class="verification section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="mini-logo text-center my-4">
                            <nuxt-link to="/"><img src="~/assets/images/logob.png" alt=""></nuxt-link>
                            <h4 class="card-title mt-3">{{$t("Verify your email")}}</h4>
                        </div>
                        <div class="auth-form card">
                            <div class="card-body">
                                <form action="verify-step-2.html" class="identity-upload">
                                    <div class="identity-content">
                                        <span class="icon"><i class="icofont-email"></i></span>
                                        <p>{{$t("We sent verification email to")}} <strong
                                                class="text-dark">{{email}}</strong>. {{$t("Click the link inside to get started!")}}</p>
                                        <NuxtLink to="/users/profile">{{$t("Go to Dashboard")}}</NuxtLink>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer text-center">
                                <p>{{$t("please check your email inbox or spam inbox for the verification email")}}.</p>
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
      email: this.$auth.user.email,
    };
  },

};
</script>
