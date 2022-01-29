<template>
<div id="footer">
    <div class="bottom section-padding">
    <div class="container">
        <div class="row">
            <div class="col-xl-4">
                <div class="bottom-logo">
                    <img class="pb-3" src="~/assets/images/logow.png" alt="">

                    <p>Tradee is a unique and beautiful collection of UI elements that are all flexible and modular. A
                        complete and customizable solution to building the website of your dreams.</p>
                </div>
            </div>
            <div class="col-xl-2">
                <div class="bottom-widget">
                    <h4 class="widget-title">Company</h4>
                    <ul>
                        <li><NuxtLink to="/aboutUs">{{$t('about')}}</NuxtLink></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Success Story</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-2">
                <div class="bottom-widget">
                    <h4 class="widget-title">Support</h4>
                    <ul>
                        <li><a href="#">Ticket</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Open Account</a></li>
                        <li><a href="#">Helpdesk</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="bottom-widget">
                    <h4 class="widget-title">Analysis</h4>
                    <div class="row">
                        <div class="col-xl-6">
                            <ul>
                                <li><a href="#">Stocks</a></li>
                                <li><a href="#">Cryptocurrencies</a></li>
                                <li><a href="#">Materials</a></li>
                                <li><a href="#">Currencies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="copyright">
                    <p>© Copyright 2022 <a href="#">ICGroupsFx</a> {{$t('copy Rights')}}</p>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="footer-social">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-telegram"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
#footer{
    bottom:0;
    width: 100%;
}
</style>
