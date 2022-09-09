<template>
  <div class="card w-100 h-100">
    <div class="card-header">
      <h4 class="card-title"><i class="icofont-bank"></i>{{$t("Bank Transfer Numbers")}}</h4>
    </div>
    <!-- alerts -->
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar">
        {{ this.copiedToClipBoard }}
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
      </v-snackbar>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="user-info">
            <h4>Ziraat Bank</h4>
            <h4>TRY:</h4>
            <span @click="copySign('ASAAD SAHLOUL')">Name: ASAAD SAHLOUL<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span><br>
            <span @click="copySign('TR 3000 0100 2480 7807 0507 5005')">TR 3000 0100 2480 7807 0507 5005<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span>
            <h4>USD:</h4>
            <span @click="copySign('ASAAD SAHLOUL')">Name: ASAAD SAHLOUL<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span><br>
            <span @click="copySign('TR 3000 0100 2480 7807 0507 5005')">TR 3000 0100 2480 7807 0507 5005<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span>
          </div>
          <hr>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <div class="user-info">
            <h4>Kuveyt Türk:</h4>
            <h4>TRY:</h4>
            <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span><br>
            <span @click="copySign('TR800020500009676033300001')">TR800020500009676033300001<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span>
            <h4>USD:</h4>
            <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span><br>
            <span @click="copySign('TR960020500009676033300101')">TR960020500009676033300101<v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn></span>
          </div>
          <hr>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="user-info">
              <h4>Al Baraka Bankası:</h4>
              <h4>TRY:</h4>
              <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA<v-btn icon>
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn></span><br>
              <span @click="copySign('TR04 0020 3000 0782 3533 0000 01')">TR04 0020 3000 0782 3533 0000 01<v-btn icon>
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn></span>
              <h4>USD:</h4>
              <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA<v-btn icon>
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn></span><br>
              <span @click="copySign('TR74 0020 3000 0782 3533 0000 02')">TR74 0020 3000 0782 3533 0000 02<v-btn icon>
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
    };
  },
  methods: {
    async copySign(iban) {
      this.snackbar = true;
      navigator.clipboard.writeText(iban);

      /* Alert the copied text */
      this.copiedToClipBoard = ('Copied the text: ' + iban);
    },
  },
};
</script>
