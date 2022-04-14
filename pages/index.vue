<template>

<div>
<div id="main-wrapper show">
    <div class="intro bg-primary">
    <div class="container">
        <div class="row justify-content-between align-items-center mt-5">
            <div class="col-xl-6 col-lg-6 col-12">
                <div class="intro-content container">
                    <h1 class="text-white">Trade with<strong class="text-white"> ICGroupsFx</strong> <br> Buy and
                        sell and Make Profit
                    </h1>
                    <p class="text-white">Fast and secure way to Trade Cryptocurrencies, Stocks, Materials and Currencies</p>

                    <div class="intro-btn" v-if="!$auth.$state.user">
                        <NuxtLink to="/users/register" class="btn btn-primary mb-1 w-50">Real Account</NuxtLink>
                        <!-- <NuxtLink to="/users/register" class="btn btn-outline-primary mb-1 w-50">Real Account</NuxtLink> -->
                    </div>
                </div>
            </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex justify-content-end">
               <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div class="section-title text-center">
                            
                        <div>
                        <contact-from />
                        </div>
                        </div>
                    </div>
                </div>
                    
                </div>
            <!-- //////////////////////////////////////////
            Calculator
            <div class="col-xl-4 col-lg-6 col-12">
                <div class="intro-form-exchange">
                    <form method="post" name="myform" class="currency_validate trade-form row g-3">
                        <div class="col-12">
                            <label class="form-label">Send</label>
                            <div class="input-group">
                                <select class="form-control" name="method">
                                    <option value="bank">USD</option>
                                    <option value="master">Euro</option>
                                </select>
                                <input type="text" name="currency_amount" class="form-control" placeholder="0.0214 BTC">
                            </div>
                        </div>

                        <div class="col-12">
                            <label class="form-label">Receive</label>
                            <div class="input-group">
                                <select class="form-control" name="method">
                                    <option value="bank">BTC</option>
                                    <option value="master">ETH</option>
                                </select>
                                <input type="text" name="currency_amount" class="form-control" placeholder="0.0214 BTC">
                            </div>
                        </div>

                        <p class="mb-0">1 USD ~ 0.000088 BTC <a href="#">Expected rate <br>No extra
                                fees</a></p>
                        <button type="button" class="btn btn-primary ">
                            Buy Now
                        </button>

                    </form>
                </div>
            </div>
            ////////////////////////////////////////// -->
        </div>
    </div>
    <div class="shape"></div>
</div>

    <div class="getstart section-padding">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8">
                <div class="section-title">
                    <h2>Get started in a few minutes</h2>
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                <div class="getstart-content v-card">
                    <span><i class="fas fa-user-circle"></i></span>
                    <h3>Tell us about yourself</h3>
                    <p>Provide your information and trading experience. Start Demo or Real Account</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                <div class="getstart-content v-card">
                    <span><i class="fas fa-university"></i></span>
                    <h3>Fund your account</h3>
                    <p>Make a deposit via bank transfer, wire transfer, or debit card.</p>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                <div class="getstart-content v-card">
                    <span><i class="fas fa-exchange-alt"></i></span>
                    <h3>Start Trading</h3>
                    <p>Once you're approved, you can trade on web and mobile.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio section-padding bg-gradient-primary">
    <div class="container">
        <div class="row py-lg-5 justify-content-center">
            <div class="col-xl-8">
                <div class="section-title text-center">
                    <h2 class="text-white">Open your account today</h2>
                    <p class="text-white">ICGroupsFx has a variety of features that make it the best place to start trading</p>
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-4 col-lg-4 col-md-4 order-xs-1">
                <div class="portfolio_list">
                    <div class="media">
                        <span class="port-icon"> <i class="fas fa-user-circle"></i></span>
                        <div class="media-body">
                            <h4>Daily Analysis</h4>
                            <p>Buy and sell with our team which is the best.
                            </p>
                        </div>
                    </div>
                    <div class="media">
                        <span class="port-icon"> <i class="fas fa-shopping-bag"></i></span>
                        <div class="media-body">
                            <h4>Risk Management</h4>
                            <p>Stay away from risks and set alarms to your requests
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 order-xs-12">
                <div class="portfolio_img">
                    <img src="~/assets/images/demo/portfolio.jpg" alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 order-xs-2">
                <div class="portfolio_list">
                    <div class="media">
                        <span class="port-icon"> <i class="fas fa-shield-virus"></i></span>
                        <div class="media-body">
                            <h4>Fast and Secure withdrawals</h4>
                            <p>For added security, store your funds in a vault with time delayed
                                withdrawals.
                            </p>
                        </div>
                    </div>
                    <div class="media">
                        <span class="port-icon"> <i class="fas fa-mobile"></i></span>
                        <div class="media-body">
                            <h4>Metatrader 5</h4>
                            <p>Stay on top of the markets with Metatrader 5 app for <a href="#">Android</a>
                                or
                                <a href="#">iOS</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="trade-app section-padding">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="section-title text-center">
                    <h2>Why ICGroupsFx?</h2>
                    <p> All of our products are ready to go, easy to use and offer great value to any kind of
                        business
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-12">
                <div class="card trade-app-content">
                    <div class="card-body">
                        <span><i class="fas fa-mobile"></i></span>
                        <h4 class="card-title">MetaTrader 5</h4>
                        <p>Arade over 500 markets including equities, indices, FX and commodities on the new and improved MT5</p>

                        <NuxtLink to="/aboutUs">Know More</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12">
                <div class="card trade-app-content">
                    <div class="card-body">
                        <span><i class="fas fa-desktop"></i></span>
                        <h4 class="card-title">Competitive Pricing</h4>
                        <p>Maximize your potential with straightforward pricing choices to suit your trading style</p>

                        <NuxtLink to="/aboutUs">Know More</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12">
                <div class="card trade-app-content">
                    <div class="card-body">
                        <span><i class="fas fa-database"></i></span>
                        <h4 class="card-title">Transparent</h4>
                        <p>Get the most out of every trade with our clear, competitive pricing. No complicated schemes, no small print.</p>

                        <NuxtLink to="/aboutUs">Know More</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- //////////////////////////////////////////
Trusted over
    <div class="brand  bg-light section-padding">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="trusted-business text-center">
                    <h3>Trusted by over  <strong>10.000 users</strong></h3>
                </div>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <div class="trusted-logo">
                            <a href="#"><img class="img-fluid" src="~/assets/images/brand/1.webp" alt=""></a>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="trusted-logo">
                            <a href="#"><img class="img-fluid" src="~/assets/images/brand/2.webp" alt=""></a>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="trusted-logo">
                            <a href="#"><img class="img-fluid" src="~/assets/images/brand/3.webp" alt=""></a>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="trusted-logo">
                            <a href="#"><img class="img-fluid" src="~/assets/images/brand/4.webp" alt=""></a>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="trusted-logo">
                            <a href="#"><img class="img-fluid" src="~/assets/images/brand/5.webp" alt=""></a>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="trusted-logo">
                            <a href="#"><img class="img-fluid" src="~/assets/images/brand/5.webp" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
////////////////////////////////////////// -->
    <div class="appss section-padding">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-8 col-lg-6 col-md-6">
                <div class="appss-content">
                    <h2>The secure app to trade by yourself</h2>
                    <ul>
                        <li><i class="la la-check"></i> Download Metatrader 5 to Start trading</li>
                        <li><i class="la la-check"></i> Login to your account through ICGroupsFx</li>
                        <li><i class="la la-check"></i> Buy, Sell, and Make profit</li>
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
                            <img src="@/assets/images/microsoft.svg" class="downloadImage" alt="">
                          Microsoft</a></div>




                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="appss-img">
                    <img class="img-fluid" src="~/assets/images/metatrader.png" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ///////////////// get in touch ///////////////// -->
    <div class="get-touch section-padding">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="section-title">
                    <h2>Get in touch. Stay in touch.</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6">
            <NuxtLink to="/contact">
                <div class="get-touch-content">
                    <span><i class="fas fa-headset"></i></span>
                    <h4>24 / 7 Support</h4>
                    <p>Got a problem? Just get in touch. Our support team is available 24/7.
                    </p>

                </div>
            </NuxtLink>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
                <NuxtLink to="/blogs/">
                <div class="get-touch-content">
                    <span><i class="fas fa-blog"></i></span>
                    <h4>Blog</h4>
                    <p>News and updates from the world’s leading cryptocurrency exchange.
                    </p>

                </div>
                </NuxtLink>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
                <NuxtLink to="/tradingTools">
                <div class="get-touch-content">
                    <span><i class="fas fa-briefcase"></i></span>
                    <h4>Trading Tools</h4>
                    <p>Help build the future of technology. Start your new career at ICGroupsFx.
                    </p>
                </div>
                </NuxtLink>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6">
                <NuxtLink to="/contact">
                <div class="get-touch-content">
                    <span><i class="fas fa-users"></i></span>
                    <h4>Community</h4>
                    <p>ICGroupsFx is global. Join the discussion in our worldwide communities.
                    </p>
                </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</div>

<!-- ///////////////// blogs //////////////// -->
    <div class="blog bg-light section-padding">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="section-title text-center">
                    <h2>Blog</h2>
                </div>
            </div>
        </div>
        <div class="row">
      <b-card-group>
          <div v-for="blog in allBlogsData.slice(-3)" :key="blog._id" class="col-xl-4 col-lg-4 col-md-4">
            <blog-card 
            
            :blogId=blog._id
            :title=blog.title 
            :author=blog.author.username 
            :content=blog.content 
            :imageSrc=blog.image.url 
            :createdAt=blog.createdAt
            />
                    
          </div>
      </b-card-group>
        </div>
    </div>
</div>
</div>
</div>
</template>

<script>
import contactFrom from "../components/contactFrom.vue"

export default {
        scrollToTop: true,
          middleware: "auth",
          auth: "guest",
          layout: 'index',
          async asyncData({$axios}) {
              try {
                const allBlogs = $axios.get('/api/blogs/')
                const allBlogsResponse = await Promise.all([allBlogs])
                const allBlogsData = allBlogsResponse[0].data.blogs
                return {
                  allBlogsData
                }
              } catch (err) {
                console.log(err);
              }
            },
            data() {
              return {
                allBlogsData: [],
                title: "",
                author: "",
                loading: false,
              }
            },
            components: {
              contactFrom
            },
            created() {
              this.checkUser();
            },
            beforeDestroy() {
              clearInterval(this.fetching)
            },
            methods: {
              checkUser: async function () {
                if (this.$auth.$state.loggedIn) {
                  if (this.$auth.$state.strategy === "facebook") {
                    let data = {
                      username: this.$auth.$state.user.name,
                      email: this.$auth.$state.user.email,
                      strategy: "facebook",
                    };
                    await this.$axios.post('/api/users/registerSocial', data);

                  } else if (this.$auth.$state.strategy === "google") {
                    let data = {
                      username: this.$auth.$state.user.name,
                      email: this.$auth.$state.user.email,
                      strategy: "google",
                    };
                    await this.$axios.post('/api/users/registerSocial', data);
                  } else {
                    console.log("local so dont do anything he should have been registered")
                  }
                }
              },
            },

  }
</script>

<style scoped>
.downloadImage{
 height: 24px;
}

.microsoftBtn{
    color: azure;
}
@media (max-width: 500px) {
    #downloadLinks{
        flex-direction: column;
    }
}
.v-card {
  opacity: 0.6;
 }

.v-card:hover {
  transition: 0.01s ease-in-out;
  opacity: 1;
  box-shadow: 0 0 6px;
}

</style>
