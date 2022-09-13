<template>
  <div class="icg-card">
    <div class="icg-card__header">
      <h4 class="card-title">{{$t("Download App")}}</h4>
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
            <div class="mt-4 btn-override">
              <div class="d-flex flex-col justify-content-between">
                <div class=""> <a
                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
                    class="btn btn-primary my-1 waves-effect">
                    <img src="~/assets/images/android.svg" class="downloadImage" style="width: 90px" alt="">
                  </a></div>
                <div class=""> <a
                    href=" https://apps.apple.com/tr/app/metatrader-5/id413251709"
                    class="btn btn-primary my-1 waves-effect">
                    <img src="~/assets/images/apple.svg" class="downloadImage" alt="">
                  </a></div>
                <button class="btn btn-primary my-1" dir="ltr">
                  <a
                    href="https://download.metatrader.com/cdn/web/internationals.capital.groups/mt5/intcapitalgroups5setup.exe"
                    class="waves-effect microsoftBtn">
                    <img src="@/assets/images/microsoft.svg" class="microsoft-img my-1" alt="">
                    <span>Microsoft</span>
                  </a>
                </button>
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
.btn > a {
  color: white;
}

.btn-override > .btn-primary:hover, .btn-override > .btn-primary:active, .btn-override > .btn-primary:focus {
  background-color: #FCDB6D;
  color: var(--icg-light-theme-color);
}

.microsoft-img {
  display: inline-block;
  max-width: 1.25rem;
  height: auto;
}

.microsoftBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>
