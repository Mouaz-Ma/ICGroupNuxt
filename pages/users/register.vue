<template>
  <v-app>
    <div id="main-wrapper show" class="show">
      <div class="authincation section-padding">
        <div class="container h-100">
          <div class="row justify-content-center h-100 align-items-center">
            <div class="col-xl-5 col-md-6">
              <div class="mini-logo text-center my-4">
                <NuxtLink class="nav-link" to="/"><img src="~/assets/images/logob.png" alt=""></NuxtLink>
                <h4 class="card-title mt-3">{{  $t('create your account')  }}</h4>
              </div>
              <!-- alerts -->
              <div v-if="successMessage === 'true'">
                <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">
                  {{  $t('thank you for registering')  }}</v-alert>
              </div>

              <div v-else-if="successMessage === 'false'">
                <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">{{
                   $t('error submitting form')  }}</v-alert>
              </div>
              <div class="auth-form card">
                <div class="card-body">
                  <form @submit.prevent="register" class="signin_validate row g-3">
                    <div class="col-12">
                      <input type="text" class="form-control" :placeholder="namePlaceholder" v-model="username" required>
                    </div>
                    <div class="col-12">
                      <input type="email" class="form-control" :placeholder="emailPlaceholder" v-model="email" required>
                    </div>
                    <div class="col-12">
                      <input type="password" class="form-control" :placeholder="passwordPlaceholder" v-model="password" required>
                    </div>
                    <div class="col-12">
                      <input type="tel" class="form-control" :placeholder="telephonePlaceholder" v-model="telephone" required>
                    </div>
                    <!-- alerts -->
                    <div class="col-12">
                      <b-alert variant="danger">
                        Dismissible Alert!
                      </b-alert>
                    </div>

                    <div class="col-12">
                      <div class="form-check form-switch">
                        <!-- <input v-b-popover.left="'please confirm you are 18 or more'" class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"> -->
                        <label class="form-check-label" for="flexSwitchCheckDefault">
                          {{$t('I certify that I am 18 years of age or older')}}, {{$t('and agree to')}} <nuxt-link to="/privacy"
                            class="text-primary">{{$t('user agreement')}}</nuxt-link> {{$t('and')}} <nuxt-link to="/privacy" class="text-primary">{{$t('privacy policy')}}</nuxt-link>.
                        </label>
                      </div>
                    </div>

                    <div class="text-center">
                      <button class="btn btn-primary btn-block">{{$t('create account')}}</button>
                    </div>
                  </form>
                  <div class="text-center">
                    <p class="mt-3 mb-0">{{$t('or register with')}}</p>
                    <b-button @click="$auth.loginWith('facebook')" class="iconLogo" id="facebookLogo" target="_blank">
                      <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" />
                    </b-button>
                    <b-button @click="$auth.loginWith('google')" class="iconLogo" id="googleLogo" target="_blank">
                      <font-awesome-icon :icon="['fab', 'google']" class="fa-2x" />
                    </b-button>
                  </div>
                  <div class="text-center">
                    <p class="mt-3 mb-0">
                      <nuxt-Link to="/users/signIn" class="text-primary">{{$t('Sign In')}}</nuxt-Link> {{$t('to your account')}}
                    </p>
                  </div>
                </div>

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
  auth: false,
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      telephone: '',
      strategy: '',
      checked: false,
      notchecked: '',
      successMessage: '',
    };
  },
  mounted() {
    if (this.$i18n.locale == 'ar') {
      const htmlEl = document.querySelector('html');
      htmlEl.setAttribute('dir', 'rtl');
      htmlEl.setAttribute('lang', 'ar');
      $nuxt.$vuetify.rtl = true;
    }
  },
  methods: {
    async register() {
      try {
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,
          telephone: this.telephone,
          strategy: 'local',
        };
        const response = await this.$axios.post('/api/users/register', data);


        if (response.data.success) {
          this.successMessage = 'true';
          this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          }).then(() => {
            this.$router.push({
              name: 'users-verifyEmail',
              params: {
                email: this.email,
              },
            });
          }).catch((err) => {
            this.successMessage = 'false';
          });
        }
      } catch (err) {
        this.successMessage = 'false';
        console.log(err);
      }
    },
  },
  computed: {
    namePlaceholder() {
      return this.$i18n.locale == 'ar' ? 'الاسم' : 'Name';
    },
    emailPlaceholder() {
      return this.$i18n.locale == 'ar' ? 'البريد الالكتروني' : 'Email Address';
    },
    passwordPlaceholder() {
      return this.$i18n.locale == 'ar' ? 'كلمة المرور' : 'Password';
    },
    telephonePlaceholder() {
      return this.$i18n.locale == 'ar' ? 'رقم الهاتف' : 'Tel.';
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
</style>
