<template>
  <div class="icg-card">
    <div class="icg-card__header">
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
</template>

<script>
export default {};
</script>

<style>

</style>
