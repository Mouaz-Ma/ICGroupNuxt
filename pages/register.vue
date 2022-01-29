<template>
    <div id="main-wrapper" class="show">
    <div class="authincation section-padding">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-xl-5 col-md-6">
                    <div class="mini-logo text-center my-4">
                         <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logo.png" alt=""></NuxtLink>
                        <h4 class="card-title mt-3">Create your account</h4>
                    </div>
                    <div class="auth-form card">
                        <div class="card-body">
                            <form method="post" name="myform" class="signin_validate row g-3"
                                action="verify-email.html">
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="Name" name="name">
                                </div>
                                <div class="col-12">
                                    <input type="email" class="form-control" placeholder="hello@example.com"
                                        name="email">
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" placeholder="Password" name="password">
                                </div>
                                <div class="col-12">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">
                                            I certify that I am 18 years of age or older, and agree to the <a href="#"
                                                class="text-primary">User Agreement</a> and <a href="#"
                                                class="text-primary">Privacy Policy</a>.
                                        </label>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-block">Create account</button>
                                </div>
                            </form>
                            <div class="text-center">
                                <p class="mt-3 mb-0"> <NuxtLink to="/signIn" class="text-primary">Sign in</NuxtLink> to your
                                    account</p>
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
    
}
</script>
<style scoped>
html{
    height: 100%;
}
body{
    height: 100%;
            background:
            linear-gradient(
          rgba(0, 0, 0, 0.9), 
          rgba(0, 0, 0, 0.9)
        ),
        /* bottom, image */
        url(https://images.unsplash.com/photo-1620266757065-5814239881fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
}
</style>