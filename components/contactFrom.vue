<template>
<div>
  <!-- alerts -->
  <div v-if="successMessage === 'true'">
    <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">{{$t("Thank you for submitting your enquiry. we will be back to you as soon as possible.")}}</v-alert>
  </div>

  <div v-else-if="successMessage === 'false'">
    <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">{{$t("error submiting form")}}</v-alert>
  </div>

  <form name="myform" class="contact_validate">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="mb-3">
          <label class="form-label">
            {{ $t('Name')}}
          </label>
          <input type="text" class="form-control" id="contactName" :placeholder="$t('Name')" v-model="name" required>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="mb-3">
          <label class="form-label">
            {{ $t('Tel.')}}
          </label>
          <input type="tel" dir="ltr" class="form-control" v-model="phone" placeholder="+90xx xx xx xx xx" required>

        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="mb-3">
          <label class="form-label">
            {{ $t('Email')}}
          </label>
          <input type="email" class="form-control" v-model="email" placeholder="hello@domain.com">

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
                    v-model="iniInvestment"
                    :tick-labels="ticksLabels"
                    color="grey lighten-1"
                    track-color="ex2.color"
                    thumb-color="white"
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
    <button :disabled="isLoading"  @click.prevent="contactForm" type="submit" class="btn btn-primary px-4 py-2 mt-4">
      {{ $t('Send message')}}
    </button>
  </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      successMessage: '',
      tradingType: '',
      ticksLabels: ['100$', '1000$', '5000$', '10,000$', '50,000$'],
      iniInvestment: '',
      isLoading: false,
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
      },
    },
  },
  methods: {
    contactForm: async function() {
      try {
        this.isLoading = true;
        const data = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          tradingType: this.tradingType,
          iniInvestment: this.iniInvestment,
        };
        const response = await this.$axios.post('/api/users/contact', data);
        if (response.data.success) {
          this.successMessage = 'true';
          this.isLoading = false;
          // clear form
          this.name = '';
          this.email = '';
          this.phone = '';
          this.tradingType = '';
          this.iniInvestment = '';
        } else {
          this.successMessage = 'false';
          this.isLoading = false;
        }
        //   if response is ok flash ok if not flash error
      } catch (err) {
        this.successMessage = 'false';
        console.log(err);
      }
    },
  },
};
</script>
<style>
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
