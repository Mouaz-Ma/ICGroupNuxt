<template>
<div>

  <!-- alerts -->
  <div v-if="successMessage === 'true'">
    <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">Thank you for
      submiting your Inquiry we will be back to you ASAP</v-alert>
  </div>

  <div v-else-if="successMessage === 'false'">
    <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error"> there was an
      Eroor submiting your form</v-alert>
  </div>

  <form @submit.prevent="contactForm" name="myform" class="contact_validate">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="mb-3">
          <label class="form-label">
            Full name
          </label>
          <input type="text" class="form-control" id="contactName" placeholder="Full name" v-model="name" required>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="mb-3">
          <label class="form-label">
            Telephone Number
          </label>
          <input type="tel" class="form-control" v-model="phone" placeholder="+90xx xx xx xx xx" required>

        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="mb-3">
          <label class="form-label">
            Email
          </label>
          <input type="email" class="form-control" v-model="email" placeholder="hello@domain.com">

        </div>
      </div>
      <div class="col-12">
        <v-select
        :items="items"
        v-model=tradingType
        label="Trading Type"
        ></v-select>
      </div>
      <div class="col-12">
          <v-subheader>Estimated initial investment</v-subheader>
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
      <div class="col-12">
        <div class="mb-3">
          <textarea class="form-control p-3" name="message" rows="5" v-model="description"
            placeholder="Tell us what we can help you with!"></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary px-4 py-2">
      Send message
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
        description: '',
        successMessage: '',
        tradingType: '',
        ticksLabels: ['100$', '1000$', '5000$', '10,000$', '50,000$'],
        iniInvestment: '',
    }
    },
    computed: {
        items:{
            get: function() {
            return this.$store.state.analysisCategories.map(element => {
            return element.type;
            });
            }
        }
    },
    methods: {
    contactForm: async function () {
        try {
        let data = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            description: this.description,
            tradingType: this.tradingType,
            iniInvestment: this.iniInvestment
        }
        let response = await this.$axios.post('/api/users/contact', data);
        if (response.data.success) {
            this.successMessage = 'true'
        } else {
            this.successMessage = 'false'
        }
        console.log(data)
        //   if response is ok flash ok if not flash error
        } catch (err) {
        this.successMessage = 'false'
        console.log(err)
        }
    },
    // itemsList(){
    //     this.$store.state.analysisCategories.forEach(element => {
    //         this.items.push(element.type)
    //     });
    // }
    },
}
</script>
<style scoped>
.btn-primary{
    color: aliceblue
}
</style>