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
                            We are a world-leading online trading provider, giving you access to opportunities across thousands of financial markets.
                            The company was born in Damascus.
                            We have been providing online access to the financial markets, allowing clients to speculate on price movements in the global currency market since 2005.
                        </p>
                        
                        <p>
                            We offer our clients a broad range of financial instruments to trade on our meta trader 5 trading platform with sophisticated trading tools,
                            competitive pricing and exceptional execution. 
                        </p>
                        <p>
                            Globally regulated with client service teams across the globe, we continue to deliver a client first approach when innovating and implementing new products and supporting technology.
                            We enable thousands of traders to seize their opportunity on indices, forex, shares and more using CFDs
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
                            <img src="~/assets/images/avatar/6.jpg" alt="" class="img-fluid mr-4 rounded-circle">
                            <div class="media-body">
                                <h3>Eric Benz</h3>
                                <span>CEO of ICGroupsFx</span>
                                <p class="mt-2">John Abraham has over 10 years of experience working in and around
                                    Financial Technology. He has delivered innovative SaaS systems for some of
                                    today's biggest institutions around payments, identity, and banking
                                    infrastructure. John Abraham has been in the Blockchain space since 2012 and is
                                    involved in a number of blockchain and fintech businesses both as an investor,
                                    board director, and founder.</p>
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
                        <h3>Our Vision</h3>
                        <p>
                            "We aim to transform all aspects of how the world interacts with currencies, whether that be trading or utilizing currency data and information."
                        </p>
                        <p>
                            The company was born out of the belief that the Internet and technology would open up the markets for both currency data and trading.
                        </p>
                        <a href="#" class="btn btn-primary">Read more</a>
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