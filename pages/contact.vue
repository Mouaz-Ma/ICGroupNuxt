<template>
    

<div class="@@dashboard">

<div id="main-wrapper show">
    <Banner :title="$t('contact')" />
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
                        <contact-from />
                        </div>
                
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
</template>
<script>
import Banner from "@/components/pageBanner";
import ContactFrom from '../components/contactFrom.vue';
export default {
    auth: false,
    scrollToTop: true,
      layout: 'index',
      components: {
        Banner,
        ContactFrom
      },
      data() {
        return {
          name: '',
          email: '',
          phone: '',
          description: '',
          successMessage: ''
        }
      },
      mounted() {
        const mapOptions = {
          zoom: 15,
          center: new window.google.maps.LatLng(41.00920862268097, 28.95530739373702),
          disableDefaultUI: true,
          zoomControl: true
        };

        const map = new window.google.maps.Map(this.$refs.map, mapOptions);
        const position = new window.google.maps.LatLng(41.00920862268097, 28.95530739373702)
        const marker = new window.google.maps.Marker({
          position
        })
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
            if (response.data.success) {
              this.successMessage = 'true'
            } else {
              this.successMessage = 'false'
            }
            //   if response is ok flash ok if not flash error
          } catch (err) {
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