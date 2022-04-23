<template>

<div id="main-wrapper show">
    <Banner :title="$t('about')" />
    <div class="about-one section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="service-img">
                        <img src="~/assets/images/about/1.jpg" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="service-content m-t-50">
                        <h3>ICGroupsFx</h3>
                        <p>
                            {{$t('Our Story paragraph 1st')}}
                        </p>
                        
                        <p>
                            {{$t('Our Story paragraph 2nd')}}
                        </p>
                        <p>
                            {{$t('Our Story paragraph 3rd')}}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="our-ceo py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ceo-content">
                        <div class="d-flex align-items-start">
                            <img src="~/assets/images/logob.png" alt="" class="img-fluid mr-4 ml-4">
                            <div class="media-body">
                                <h3>{{$t('Why choose to trade with IC Groups FX?')}}</h3>
                                <p class="mt-2">{{$t('Why choose to trade with IC Groups FX? graph')}}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="about-two section-padding">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="service-content my-5">
                        <h3>{{$t('Our Services')}}</h3>
                        <ul>
                            <li><h4>{{$t('Technical Analysis')}}</h4></li>
                                <p>{{$t('Technical Analysis graph')}}</p>
                                <li><h4>{{$t('Trading')}}</h4></li>
                                <p>{{$t('Trading graph')}}</p>
                                <li><h4>{{$t('Workshops and Trainings')}}</h4></li>
                                <p>{{$t('Workshops and Trainings graph')}}</p>
                        </ul>
                        <!-- <a href="#" class="btn btn-primary">Read more</a> -->
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="service-img">
                        <img src="~/assets/images/about/About_Us.jpg" alt="" class="img-fluid">
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
    scrollToTop: true,
    layout: 'index',
    components: {
    Banner
    },
  }
</script>