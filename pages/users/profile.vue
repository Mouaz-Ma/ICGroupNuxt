<template>
  <div id="">
    <div class="">
      <div class="">
        <div class="row">
          <div class="col-12 col-md-6">
            <UserWelcomeCard />

            <!-- meta mask btn -->
            <!-- <div class="p-4">
                    <Metamask @connect="initWeb3" />
                    <div>
                    <p>Network: {{ web3.networkId }}</p>
                    <p>Account: {{ web3.coinbase }}</p>
                    <p>Balance: {{ web3.balance }}</p>
                    <p>Ether Balance: {{ web3.etherBalance }}</p>
                    </div>
                    <p class="italic text-red-600">{{ errorMessage }}</p>
                </div> -->
          </div>
          <!-- alerts -->
          <div class="mt-5" v-if="verifyAlertMessage === 'true'">
            <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">
              {{$t("An email was sent please check your inbox or spam box!")}}</v-alert>
          </div>

          <div class="mt-5" v-else-if="verifyAlertMessage === 'false'">
            <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">
              {{$t("something went wrong")}}</v-alert>
          </div>
          <div class="col-12 col-lg-6 col-xxl-4">
            <BankTransferNumbersCard />
          </div>
          <div class="col-12 col-md-6 col-xxl-4">
            <UserInformationCard />
          </div>
          <div class="col-xxl-8 col-xl-6" v-if="$auth.$state.user.isVerified === true">
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">VERIFY & UPGRADE </h4>
              </div>
              <div class="card-body">
                <h5>Account Status : <span class="text-success">Verified <i
                      class="icofont-verification-check"></i></span> </h5>
                <p>Your account is verified. Contact our call center to help you enable funding, trading, and
                  withdrawal.
                </p>
                <NuxtLink class="btn btn-primary" to="/contact">Contact Call Center</NuxtLink>
              </div>
            </div>
          </div>
          <div v-else class="col-xxl-8 col-xl-6">
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">VERIFY & UPGRADE </h4>
              </div>
              <div class="card-body">
                <h5>Account Status : <span class="text-warning">Pending <i class="icofont-warning"></i></span> </h5>
                <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                </p>
                <a class="btn btn-primary" @click="getVerified()"> Get Verified</a>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6" v-if="$auth.$state.user.userType === 'Administrator'">
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">Uploads</h4>
              </div>
              <div class="card-body">
                <div class="app-link">
                  <h5>What would you like to upload</h5>
                  <nuxt-link class="btn btn-primary" to="/blogs/uploadBlog">Blog</nuxt-link>
                  <br>
                  <div class="mt-3"></div>
                  <nuxt-link class="btn btn-primary" to="/analysis/uploadAnalysis">Analysis</nuxt-link>
                  <br>
                  <div class="mt-3"></div>
                  <nuxt-link class="btn btn-primary" to="/news/uploadNews">News</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6" v-else-if="$auth.$state.user.userType === 'Normal User'">
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">Download App</h4>
              </div>
              <div class="card-body">
                <div class="row align-items-center justify-content-between">
                  <div class="col-xl-8 col-lg-6 col-md-6">
                    <div class="appss-content">
                      <h2>{{ $t('The secure app to trade by yourself')}}</h2>
                      <ul>
                        <li><i class="la la-check"></i> {{ $t('Download Metatrader 5 to Start trading')}}</li>
                        <li><i class="la la-check"></i> {{ $t('Login to your account through ICGroupsFx')}}</li>
                        <li><i class="la la-check"></i> {{ $t('Buy, Sell, and Make profit')}}</li>
                      </ul>
                      <div class="mt-4">
                        <div class="row">
                          <div class="col-lg-4 col-md-4 col-xs-12"> <a
                              href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
                              class="btn btn-primary my-1 waves-effect">
                              <img src="~/assets/images/android.svg" class="downloadImage" style="width: 90px" alt="">
                            </a></div>
                          <div class="ccol-lg-4 col-md-4 col-xs-12"> <a
                              href=" https://apps.apple.com/tr/app/metatrader-5/id413251709"
                              class="btn btn-primary my-1 waves-effect">
                              <img src="~/assets/images/apple.svg" class="downloadImage" alt="">
                            </a></div>
                          <div class="col-lg-4 col-md-4 col-xs-12"> <a
                              href="https://download.metatrader.com/cdn/web/internationals.capital.groups/mt5/intcapitalgroups5setup.exe"
                              class="btn btn-primary my-1 waves-effect microsoftBtn">
                              <img src="@/assets/images/microsoft.svg" class="float-left downloadImage" alt="">
                              Microsoft</a></div>




                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-5 col-md-5">
                    <div class="appss-img">
                      <img class="img-fluid" src="~/assets/images/metatrader.png" alt="">
                    </div>
                  </div>
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
import BankTransferNumbersCard from '@/components/BankTransferNumbersCard.vue';
import UserWelcomeCard from '@/components/UserWelcomeCard.vue';
import UserInformationCard from '@/components/UserInformationCard.vue';
import Web3 from 'web3'
import {
  mapGetters,
  mapMutations
} from 'vuex';
export default {
  layout: 'users',
  components: {
    BankTransferNumbersCard,
    UserWelcomeCard,
    UserInformationCard,
  },
  data() {
    return {
      name: "",
      email: "",
      verifyAlertMessage: '',
      copiedToClipBoard: '',
      snackbar: false,
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters('web3', ['getInstance']),
    web3() {
      return this.getInstance
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    async getVerified() {
      try {
        const userId = this.$auth.$state.user._id
        const response = await this.$axios.get('/api/users/varifyById/' + userId)
        if (response.data.success) {
          this.verifyAlertMessage = 'true'
        } else {
          this.verifyAlertMessage = 'false'
        }
      } catch (err) {
        this.verifyAlertMessage = 'false'
      }

    },
    async copySign(iban) {
      this.snackbar = true
      navigator.clipboard.writeText(iban);

      /* Alert the copied text */
      this.copiedToClipBoard = ("Copied the text: " + iban);
    },
    ...mapMutations('web3', ['registerWeb3Instance']),
    async initWeb3() {
      // Check for web3 provider
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Ask to connect
          await window.ethereum.send('eth_requestAccounts');
          const instance = new Web3(window.ethereum)
          // Get necessary info on your node

          const networkType = await instance.eth.net.getNetworkType();
          const netWorkName = await instance.eth.net.getNetworkType();
          const networkId = await instance.eth.net.getId();
          const coinbase = await instance.eth.getCoinbase();
          const balance = await instance.eth.getBalance(coinbase);
          const etherBalance = instance.utils.fromWei(balance, 'ether');
          // Save it to store
          this.registerWeb3Instance({
            networkType,
            netWorkName,
            networkId,
            coinbase,
            balance,
            etherBalance
          });
          console.log('Network: ' + netWorkName + ' (' + networkId + ')');
          console.log('Network Type: ' + networkType);
          console.log('Coin Base: ' + coinbase);
          console.log('Balance: ' + balance);
          console.log('Ether Balance: ' + etherBalance);
          this.errorMessage = '';
        } catch (error) {
          // User denied account access
          console.error('User denied web3 access', error);
          this.errorMessage = 'Please connect to your Ethereum address on Metamask before connecting to this website';
          return;
        }
      }
      // No web3 provider
      else {
        console.error('No web3 provider detected');
        this.errorMessage = "No web3 provider detected. Did you install the Metamask extension on this browser?";
        return;
      }
    },
  },
}
</script>

<style scoped>
.downloadImage{
 height: 20px;
}
.microsoftBtn{
    color: azure;
}
#black{
    color: black;
}
.v-application a {
    color: white;
}
.v-application a:hover {
    color: black;
}
</style>