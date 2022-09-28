<template>
  <div>
    <!-- alerts -->
    <div v-if="getSuccessMessage === true">
      <v-alert v-model="successMessage" border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">{{$t("Thank you for submitting your enquiry. we will be back to you as soon as possible.")}}</v-alert>
    </div>

    <div v-else-if="getSuccessMessage === false">
      <v-alert v-model="alertError" border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">{{$t("error submiting form")}}</v-alert>
    </div>

    <div v-for="error in getErrors">
      <v-alert v-model="alertValidation" border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">{{$t(error)}}</v-alert>
    </div>

    <form name="myform" class="contact_validate">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="mb-3">
            <label class="form-label">
              {{ $t('Name')}}
            </label>
            <input type="text" class="form-control" id="contactName" :placeholder="$t('Name')" v-model="name" required>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="mb-3">
            <label class="form-label">
              {{ $t('Tel.')}}
            </label>
            <vue-phone-number-input dir="ltr" v-model="phone" size="lg" show-code-on-list clearable fetch-country :translations="{phoneNumberLabel: ''}" @update="phoneNumberPayload = $event"></vue-phone-number-input>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="mb-3">
            <label class="form-label">
              {{ $t('Email')}}
            </label>
            <input dir="ltr" type="email" class="form-control" v-model="email" placeholder="hello@domain.com">
          </div>
        </div>
        <div class="col-12">
          <v-select
          :items="items"
          v-model=tradingType
          :label="$t('Trading Type')"
          ></v-select>
        </div>
        <div class="col-12">
            <v-subheader>{{ $t('Estimated initial investment')}}</v-subheader>
              <v-card-text>
                  <v-slider
                      v-model="investmentSlider"
                      :tick-labels="ticksLabels"
                      color="grey lighten-1"
                      track-color="ex2.color"
                      thumb-color="#dedede"
                      :min="1"
                      :max="5"
                      step="1"
                      ticks="always"
                      tick-size="4"
                  ></v-slider>
              </v-card-text>
        </div>
        <!-- <div class="col-12">
          <div class="mb-3">
            <textarea class="form-control p-3" name="message" rows="5" v-model="description"
              placeholder="Tell us what we can help you with!"></textarea>
          </div>
        </div> -->
      </div>
      <button :disabled="isLoading" @click.prevent="contactForm" type="submit" class="btn btn-primary px-4 py-2 mt-4">
        {{ $t('Send message')}}
      </button>
    </form>
  </div>
  </template>
<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  components: {VuePhoneNumberInput},
  data() {
    return {
      name: '',
      email: '',
      phone: null,
      successMessage: null,
      tradingType: '',
      ticksLabels: ['100$', '1000$', '5000$', '10,000$', '50,000$'],
      investmentSlider: 1,
      iniInvestment: '',
      isLoading: false,
      errors: [],
      alertValidation: false,
      alertError: false,
      phoneNumberPayload: {formattedNumber: ''},
    };
  },
  computed: {
    items: {
      get: function() {
        if (this.$i18n.locale == 'ar') {
          return this.$store.state.analysisCategories.map((element) => {
            return element.ar;
          });
        } else if (this.$i18n.locale == 'en') {
          return this.$store.state.analysisCategories.map((element) => {
            return element.type;
          });
        }
        return this.$store.state.analysisCategories.map((element) => {
          return element.type;
        });
      },
    },
    getIsLoading() {
      return this.isLoading;
    },
    getSuccessMessage() {
      return this.successMessage;
    },
    getErrors() {
      return this.errors;
    },
  },
  methods: {
    contactForm: async function() {
      try {
        this.isLoading = true;
        this.successMessage = null;
        this.errors = [];
        const data = {
          name: this.name,
          email: this.email,
          phone: this.phoneNumberPayload.formattedNumber,
          tradingType: this.tradingType,
          iniInvestment: this.ticksLabels[this.investmentSlider-1],
          language: this.$i18n.locale,
        };
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // console.log(data);
        if ((this.name && this.email) || (this.name && this.phone) || (this.name && this.email && this.phone)) {
          if (!emailRegex.test(this.email)) {
            if (!this.phone) {
              this.alertValidation = true;
              this.isLoading = false;
              this.errors.push('Please enter a valid email address.');
            }
          }
          if (this.email && this.phone && !emailRegex.test(this.email)) {
            this.alertValidation = true;
            this.isLoading = false;
            this.errors.push('Please enter a valid email address.');
          }
          if (this.tradingType === '') {
            this.alertValidation = true;
            this.isLoading = false;
            this.errors.push('Please select the type of investment.');
          } else {
            const response = await this.$axios.post('/api/users/contact', data);
            if (response.data.success) {
              this.successMessage = true;
              this.isLoading = false;
              // clear form
              this.name = '';
              this.email = '';
              this.phone = '';
              this.tradingType = '';
              this.iniInvestment = '';
            } else {
              this.successMessage = false;
              this.alertError = true;
              this.isLoading = false;
            }
          }
        } else {
          this.isLoading = false;
          this.alertValidation = true;
          this.errors.push('Please provide at least your name and email address or your name and phone number.');
        }
        //   if response is ok flash ok if not flash error
      } catch (err) {
        this.successMessage = false;
        this.isLoading = false;
        this.alertError = true;
        console.log(err);
      }
      // console.log(this.errors);
    },
  },
};
</script>
  <style scoped>
  .btn-primary{
      color: aliceblue;
  }

  .btn-primary:hover {
    color: #231f20;
    background-color: aliceblue;
    border-color: aliceblue;
  }

  .md1 .md-select-icon {
      display: none;
  }

  @media (max-width: 576px) {
    html:lang(ar) .v-slider__tick-label {
      margin-top: 1rem;
      transform: translateX(50%) rotate(-45deg) !important;
    }

    html:lang(en) .v-slider__tick-label {
      margin-top: 1rem;
      transform: translateX(-50%) rotate(-45deg) !important;
    }
  }
  </style>

