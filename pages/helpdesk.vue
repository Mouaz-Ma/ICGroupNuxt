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
                        <div class="play-btn videoBorder mainVideo">   
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WL-G_9hm4rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="help-category section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div class="help-cat">
                        <span class="la la-video-camera"></span>
                        <h4>Video Guides</h4>
                    </div>
                </div>
                <!-- <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div class="help-cat">
                        <span class="la la-support"></span>
                        <h4>FAQ</h4>
                    </div>
                </div> -->
                <!-- <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div class="help-cat">
                        <span class="la la-book"></span>
                        <h4>API for developers</h4>
                    </div>
                </div> -->
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <a href="https://www.youtube.com/playlist?list=PLZMLtZYaSKEpd4O3yD56NPgu1O1sPQylN" class="sub-cat videoBorder">
                        <h5 class="videoTitle"> سلسلة تعلم الفوركس </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="https://www.youtube.com/playlist?list=PLZMLtZYaSKEpnjZxc3o-G1VcLQlNC_xad" class="sub-cat videoBorder">
                        <h5 class="videoTitle"> تحليل العملات </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="https://www.youtube.com/playlist?list=PLZMLtZYaSKEqZERoX5NrZlHyU0Ecw0iiK" class="sub-cat videoBorder">
                        <h5 class="videoTitle"> تحليل نفط وغاز </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="https://www.youtube.com/playlist?list=PLZMLtZYaSKEr-DauK33HkaeukpK0ckMQ0" class="sub-cat videoBorder">
                        <h5 class="videoTitle"> ذهب وفضة </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="https://www.youtube.com/playlist?list=PLZMLtZYaSKEqHAkmv311Wtd2d4QZbQp2-" class="sub-cat videoBorder">
                        <h5 class="videoTitle"> مؤشرات - داوجونز </h5>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="https://www.youtube.com/playlist?list=PLZMLtZYaSKEoT3JsUr7pRZSRsTGSEuLcr" class="sub-cat videoBorder">
                        <h5 class="videoTitle"> عملات الكترونية - بيتكوين واثيريوم </h5>
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
                        <div v-if="openTab">
                        <script type="text/javascript" id="zsiqchat">var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "d17173f8c96be3bd427909d4f4934e9bc0a3309477205234e8d5a02b64e015ba", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script>
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
            this.openTab = true
          }
        }
</script>

<style scoped>
.mainVideo{
    box-shadow: 5px 10px #888888;
}
.videoBorder{
    border: 2px #fbcc31 solid;
      transition: 0.3s;
}

.sub-cat:hover{
        color: white;
        box-shadow: 5px 10px #888888;
        background: rgb(30, 27, 27);
}

</style>