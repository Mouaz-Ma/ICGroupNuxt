<template>
  <v-app>
    <div id="main-wrapper show" class="show">
      <div class="authincation section-padding">
        <div class="container h-100">
          <div class="row justify-content-center h-100 align-items-center">
            <div class="col-xl-5 col-md-6">
              <div class="mini-logo text-center my-4">
                <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logob.png" alt="">
                </NuxtLink>
                <h4 class="card-title mt-3">{{ $t('sign in to icgroupsfx') }}</h4>
              </div>
              <!-- alerts -->
              <div v-if="successMessage === 'true'">
                <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">
                  {{ $t('successfully signed in') }}</v-alert>
              </div>

              <div v-else-if="successMessage === 'false'">
                <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">{{
                    $t('something went wrong')
                }}</v-alert>
              </div>
              <div class="auth-form card">
                <div class="card-body">
                  <form @submit.prevent="signIn" class="signin_validate row g-3">
                    <div class="col-12">
                      <input type="email" class="form-control" placeholder="hello@example.com" v-model="email" required>
                    </div>
                    <div class="col-12">
                      <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                    </div>
                    <div class="col-6">
                      <!-- <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Remember
                                            me</label>
                                    </div> -->
                    </div>
                    <div class="col-6 text-right">
                      <NuxtLink to="/users/forgot">{{ $t('forgot password?') }}</NuxtLink>
                    </div>
                    <div class="text-center">
                      <button type="submit" class="btn btn-primary btn-block">{{ $t('Sign In')
                      }}</button>
                    </div>
                  </form>
                  <div class="text-center">
                    <p class="mt-3 mb-0">{{ $t('or sign in with') }}</p>
                    <b-button @click="$auth.loginWith('facebook')" class="iconLogo" id="facebookLogo" target="_blank">
                      <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" />
                    </b-button>
                    <b-button @click="$auth.loginWith('google')" class="iconLogo" id="googleLogo" target="_blank">
                      <font-awesome-icon :icon="['fab', 'google']" class="fa-2x" />
                    </b-button>
                  </div>

                  <p class="mt-3 mb-0">{{ $t('don\'t have account') }} <NuxtLink to="/users/register"
                      class="text-primary">{{ $t('sign up') }}</NuxtLink>
                  </p>
                </div>
              </div>
              <div class="privacy-link">
                <nuxt-link to="/privacy">{{ $t('privacy policy') }}</nuxt-link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      successMessage: '',
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        if (response.data.success) {
          this.successMessage = 'true';
        } else {
          this.successMessage = 'false';
        }
        // this.$router.push('/');
      } catch (err) {
        this.successMessage = 'false';
        console.log(err);
      }
    },
  },
};
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
.btn-primary{
    color: aliceblue;
}
</style>
