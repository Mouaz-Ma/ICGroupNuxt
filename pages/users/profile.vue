<template>
  <div>
    <div class="row">
      <!-- alerts -->
      <div class="mt-5" v-if="verifyAlertMessage === 'true'">
        <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">
          {{$t("An email was sent please check your inbox or spam box!")}}</v-alert>
      </div>
      <div class="mt-5" v-else-if="verifyAlertMessage === 'false'">
        <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">
          {{$t("something went wrong")}}</v-alert>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <UserWelcomeCard />
        <UserAdminUploads />
        <UserInformationCard />
        <UserStatusCard />

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
      <div class="col-12 col-md-6 col-xxl-4">
        <DownloadAppCard />
        <BankTransferNumbersCard />
      </div>
    </div>
  </div>
</template>
<script>
import BankTransferNumbersCard from '@/components/BankTransferNumbersCard.vue';
import DownloadAppCard from '@/components/DownloadAppCard.vue';
import UserAdminUploads from '@/components/UserAdminUploads.vue';
import UserStatusCard from '@/components/UserStatusCard.vue';
import UserWelcomeCard from '@/components/UserWelcomeCard.vue';
import UserInformationCard from '@/components/UserInformationCard.vue';
import Web3 from 'web3';
import {
  mapGetters,
  mapMutations,
} from 'vuex';
export default {
  layout: 'users',
  components: {
    BankTransferNumbersCard,
    DownloadAppCard,
    UserAdminUploads,
    UserStatusCard,
    UserWelcomeCard,
    UserInformationCard,
  },
  data() {
    return {
      name: '',
      email: '',
      verifyAlertMessage: '',
      copiedToClipBoard: '',
      snackbar: false,
      errorMessage: '',
    };
  },
  computed: {
    ...mapGetters('web3', ['getInstance']),
    web3() {
      return this.getInstance;
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
    async getVerified() {
      try {
        const userId = this.$auth.$state.user._id;
        const response = await this.$axios.get('/api/users/varifyById/' + userId);
        if (response.data.success) {
          this.verifyAlertMessage = 'true';
        } else {
          this.verifyAlertMessage = 'false';
        }
      } catch (err) {
        this.verifyAlertMessage = 'false';
      }
    },
    async copySign(iban) {
      this.snackbar = true;
      navigator.clipboard.writeText(iban);

      /* Alert the copied text */
      this.copiedToClipBoard = ('Copied the text: ' + iban);
    },
    ...mapMutations('web3', ['registerWeb3Instance']),
    async initWeb3() {
      // Check for web3 provider
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Ask to connect
          await window.ethereum.send('eth_requestAccounts');
          const instance = new Web3(window.ethereum);
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
            etherBalance,
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
      } else { // No web3 provider
        console.error('No web3 provider detected');
        this.errorMessage = 'No web3 provider detected. Did you install the Metamask extension on this browser?';
        return;
      }
    },
  },
};
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
