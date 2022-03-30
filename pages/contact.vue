<template>
    

<div class="@@dashboard">

<div id="main-wrapper show">
    <Banner title="Contact From" />
    <div class="contact-form section-padding">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7">
                        <div class="section-title text-center">
                            <span>Ask Question</span>
                            <h2>Let us hear from you directly!</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-md-4 col-sm-12">
                        <div class="info-list">
                            <h4 class="mb-3">Address</h4>
                            <ul>
                                <li><i class="fa fa-map-marker"></i> Istanbul, Turkey</li>
                                <li><i class="fa fa-phone"></i> +905 445 35 55 53</li>
                                <li><i class="fa fa-envelope"></i> info@icgroupsfx.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-8 col-md-8 col-sm-12">
                        <!-- alerts -->
                        <div v-if="successMessage === 'true'">
                        <v-alert
                        border="bottom"
                        color="green"
                        dense
                        dismissible
                        outlined
                        prominent
                        shaped
                        text
                        type="success"
                        >Thank you for submiting your Inquiry we will be back to you ASAP</v-alert>
                        </div>

                        <div v-else-if="successMessage === 'false'">
                            <v-alert
                            border="bottom"
                            color="red"
                            dense
                            dismissible
                            outlined
                            prominent
                            shaped
                            text
                            type="error"
                            > there was an Eroor submiting your form</v-alert>
                        </div>

                        <form @submit.prevent="contactForm" name="myform" class="contact_validate">
                            <div class="row">
                                <div class="col-12 col-md-4">
                                    <div class="mb-3">
                                        <label class="form-label">
                                            Full name
                                        </label>
                                        <input type="text" class="form-control" id="contactName" placeholder="Full name"
                                            v-model="name" required>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="mb-3">
                                        <label class="form-label">
                                            Telephone Number
                                        </label>
                                        <input type="tel" class="form-control" v-model="phone"
                                           placeholder="+90xx xx xx xx xx" required>

                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="mb-3">
                                        <label class="form-label">
                                            Email
                                        </label>
                                        <input type="email" class="form-control" v-model="email"
                                             placeholder="hello@domain.com" >

                                    </div>
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
                </div>
                
                    <div class="row mt-5">
                        <div class="col-12">
                        <div style="height: 500px; width: 100%;" ref="map"></div>
                        </div>
                    </div>
            </div>
        </div>
</div>
</div>
</template>
<script>
import Banner from "@/components/pageBanner";
export default {
    auth: false,
  layout: 'index',
  components: {
    Banner
  },
  data(){
      return {
          name: '',
          email: '',
          phone: '',
          description: '',
          successMessage: ''
      }
  },
    mounted(){
        const mapOptions = {
            zoom: 15,
            center: new window.google.maps.LatLng(41.00920862268097, 28.95530739373702),
            disableDefaultUI: true,
            zoomControl: true
        };

        const map = new window.google.maps.Map(this.$refs.map, mapOptions);
        const position = new window.google.maps.LatLng(41.00920862268097, 28.95530739373702)
        const marker = new window.google.maps.Marker({ position })
        marker.setMap(map)
    },
  methods: {
      contactForm: async function () {
          try {
              let data = {
                  name: this.name,
                  email: this.email,
                  phone: this.phone,
                  description: this.description
              }
              let response = await this.$axios.post('/api/users/contact', data);
              if(response.data.success){
                  this.successMessage = 'true'
              } else {
                  this.successMessage = 'false'
              }
              console.log(response)
            //   if response is ok flash ok if not flash error
          } catch(err){
              this.successMessage = 'false'
              console.log(err)
          }
      }
  },
  }
</script>

<style scoped>
.btn-primary{
    color: aliceblue
}
</style>