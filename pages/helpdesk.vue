<template>
    <div id="main-wrapper show">
    <Banner :title="$t('Help Desk')" />
    <!-- <div class="helpdesk-search section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7">
                    <div class="helpdesk-search-content">
                        <p class="mb-1">Tradix knowledge Base</p>
                        <h2 class="mb-5">How can we help you today?</h2>
                        <div class="helpdesk-form">
                            <form action="#">
                                <input type="text" class="form-control" placeholder="Search here">
                                <button type="submit" class="btn btn-success">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
        <div class="intro-video section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="intro-video-play">
                        <div class="play-btn">
                            <a><i class="fa fa-play"></i></a>
                        </div>
                    </div>
                    <div class="intro-video-content text-center mt-5">
                        <h2>We saved a seat for you</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="help-category section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div class="help-cat">
                        <span class="la la-video-camera"></span>
                        <h4>Video Guide</h4>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div class="help-cat">
                        <span class="la la-support"></span>
                        <h4>FAQ</h4>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div class="help-cat">
                        <span class="la la-book"></span>
                        <h4>API for developers</h4>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <a href="#" class="sub-cat">
                        <h5> Troubleshooting </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="sub-cat">
                        <h5> Partnership </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="sub-cat">
                        <h5> Getting started </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="sub-cat">
                        <h5> Wallets </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="sub-cat">
                        <h5> Healthy Tips </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="sub-cat">
                        <h5> Crypto-definitions </h5>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="troubleshooting section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="section-title text-center">
                        <h2>Troubleshooting</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="troubleshooting-content">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <h4>My Transaction</h4>
                                <ul>
                                    <li><a href="#">My transaction is stuck</a></li>
                                    <li><a href="#">The amount is too low</a></li>
                                    <li><a href="#">Sorry, payment was not received</a></li>
                                    <li><a href="#">Still didn't get my refund</a></li>
                                </ul>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <h4>My Wallet</h4>
                                <ul>
                                    <li><a href="#">My wallet address is recognized as invalid</a></li>
                                    <li><a href="#">What does ‘Not yet redeemed?’ mean</a></li>
                                    <li><a href="#">I sent my ABC coins to a non-ABC wallet</a></li>
                                    <li><a href="#">ETH contract addresses</a></li>
                                </ul>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <h4>Other</h4>
                                <ul>
                                    <li><a href="#">Customer service doesn't reply</a></li>
                                    <li><a href="#">The amount is too low</a></li>
                                    <li><a href="#">Can't log in</a></li>
                                    <li><a href="#">Can’t enable / disable 2-FA</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="ticket-box section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="ticket-box-content">
                        <h3>Can't find what you're looking for?</h3>
                        <p>Let us help you!</p>
                        <div v-if="isZohoLoaded">
                        <div class="btn btn-success"  v-if="openTab">
                            <script type = 'text/javascript' >
                              let $zoho = $zoho || {};
                            $zoho.salesiq = $zoho.salesiq || {
                              widgetcode: 'd17173f8c96be3bd427909d4f4934e9bc0a3309477205234e8d5a02b64e015ba',
                              values: {},
                              ready: function () {}
                            };
                            let d = document;
                            s = d.createElement('script');
                            s.type = 'text/javascript';
                            s.id = 'zsiqscript';
                            s.defer = true;
                            s.src = 'https://salesiq.zoho.com/widget';
                            t = d.getElementsByTagName('script')[0];
                            t.parentNode.insertBefore(s, t); 
                            </script>
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
import Banner from "@/components/pageBanner";
export default {
      auth: false,
        scrollToTop: true,
          layout: 'index',
          components: {
            Banner
          },
          data() {
            return {
                isZohoLoaded: true,
                openTab: false,
            }
          },
          head () {
                return {
            script: [
                {
                    hid: 's31',
                    src: 'https://salesiq.zoho.com/widget',
                    async: true,
                    defer: true,
                    callback: () => {this.isZohoLoaded = true }
                },
            ]
        }
          },
          async mounted(){
            this.openTab= true

          }
        }
</script>