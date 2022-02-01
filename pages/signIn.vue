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
                            <form method="post" name="myform" class="signin_validate row g-3" action="otp-2.html">
                                <div class="col-12">
                                    <input type="email" class="form-control" placeholder="hello@example.com"
                                        name="email">
                                </div>
                                <div class="col-12">
                                    <input type="password" class="form-control" placeholder="Password" name="password">
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