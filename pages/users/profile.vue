<template>
<v-app>
    <div id="main-wrapper show">

    <div class="headerprofile">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="header-content">
                    <div class="header-left ml-5">
                        <div class="brand-logo">
                            <NuxtLink to="/">
                                <img src="~/assets/images/logob.png" alt="">
                            </NuxtLink>

                            
                        </div>
                        <!-- search -->
                        <!-- <div class="search">
                            <form action="#">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search Here">
                                    <span class="input-group-text"><i class="icofont-search"></i></span>
                                </div>
                            </form>
                        </div> -->
                    </div>

                    <div class="header-right">
                        <div class="dark-light-toggle" onclick="themeToggle()">
                            <span class="dark"><i class="icofont-moon"></i></span>
                            <span class="light"><i class="icofont-sun-alt"></i></span>
                        </div>
                        <!-- notification area -->
                        <!-- <div class="notification dropdown">
                            <a class="notify-bell" v-b-toggle.notification>
                                <span ><i class="icofont-alarm"></i></span>
                            </a>
                            <b-collapse id="notification" class="dropdown-menu dropdown-menu-right notification-list" >
                                <h4>Announcements</h4>
                                <div class="lists">
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon success"><i class="icofont-check"></i></span>
                                            <div>
                                                <p>Account created successfully</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon fail"><i class="icofont-close"></i></span>
                                            <div>
                                                <p>2FA verification failed</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon success"><i class="icofont-check"></i></span>
                                            <div>
                                                <p>Device confirmation completed</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon pending"><i
                                                    class="icofont-warning"></i></span>
                                            <div>
                                                <p>Phone verification pending</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="./settings-activity.html">More <i
                                            class="icofont-simple-right"></i></a>

                                </div>
                            
                            </b-collapse>
                        </div> -->
                        <!-- user option -->
                        <div class="profile_log dropdown">
                            <a class="user" v-b-toggle.userOptions>
                                <span class="thumb"><img src="~/assets/images/profile/2.png" alt=""></span>
                                <span class="arrow"><i class="icofont-angle-down"></i></span>
                            </a>
                            <b-collapse class="dropdown-menu dropdown-menu-right" id="userOptions">
                                <div class="user-email">
                                    <div class="user">
                                        <span class="thumb"><img src="~/assets/images/profile/2.png" alt=""></span>
                                        <div class="user-info">
                                            <h5>{{$auth.state.user.username}}</h5>
                                            <span>{{$auth.state.user.email}}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- balance -->
                                <!-- <div class="user-balance">
                                    <div class="available">
                                        <p>Available</p>
                                        <span>0.00 BTC</span>
                                    </div>
                                    <div class="total">
                                        <p>Total</p>
                                        <span>0.00 USD</span>
                                    </div>
                                </div> -->
                                <NuxtLink to="/users/profile" class="dropdown-item"><i class="icofont-ui-user"></i>Profile</NuxtLink>

                                <NuxtLink class="dropdown-item" to="/users/profileUpdate"><i class="icofont-ui-settings"></i>Edit and Settings</NuxtLink>
                                <!-- wallet -->
                                <!-- <a href="accounts.html" class="dropdown-item">
                                    <i class="icofont-wallet"></i>Wallet
                                </a> -->
                                <!-- settings -->
                                <!-- <a href="settings-profile.html" class="dropdown-item">
                                    <i class="icofont-ui-settings"></i> Setting
                                </a> -->
                                <!-- settings -->
                                <!-- <a href="settings-activity.html" class="dropdown-item">
                                    <i class="icofont-history"></i> Activity
                                </a> -->
                                <!-- lock -->
                                <!-- <a href="lock.html" class="dropdown-item">
                                    <i class="icofont-lock"></i>Lock
                                </a> -->
                                <a @click="logout()" href="#" class="dropdown-item logout">
                                    <i class="icofont-logout"></i> Logout
                                </a>
                            </b-collapse>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

    <!-- <div class="sidebar">
    <div class="brand-logo">
        <a href="index.html"><img src="~/assets/images/logob.png" alt="" width="30">
        </a>
    </div>
    <div class="menu">
        <ul>
            <li>
                <a href="index.html" data-toggle="tooltip" data-placement="right" title="Home">
                    <span><i class="icofont-ui-home"></i></span>
                </a>
            </li>
            <li><a href="trade.html" data-toggle="tooltip" data-placement="right" title="Trade">
                    <span><i class="icofont-exchange"></i></span>
                </a>
            </li>
            <li><a href="wallet.html" data-toggle="tooltip" data-placement="right" title="Wallet">
                    <span><i class="icofont-wallet"></i></span>
                </a>
            </li>
            <li><a href="settings-profile.html" data-toggle="tooltip" data-placement="right" title="Settings">
                    <span><i class="icofont-settings"></i></span>
                </a>
            </li>
            <li class="logout"><a href="signin.html" data-toggle="tooltip" data-placement="right"
                    title="Signout">
                    <span><i class="icofont-power"></i></span>
                </a>
            </li>
        </ul>

        <p class="copyright">
            &#169; <a href="#">Qkit</a>
        </p>
    </div>
</div>   -->
    <div class="content-body">
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="card welcome-profile w-100 h-100">
                        <div class="card-body">
                            <img src="~/assets/images/profile/2.png" alt="">
                            <h4>Welcome, {{$auth.$state.user.username}}!</h4>
                            <div v-if="!$auth.$state.user.isVerified">
                            <p>Looks like you are not verified yet. Verify yourself to use the full potential of
                                ICGroupsFx.</p>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span @click="getVerified()" class="verified"><i class="icofont-check-alt"></i></span>
                                        Verify account
                                    </a>
                                </li>
                                <!-- <li>
                                    <a href="#">
                                        <span class="not-verified"><i class="icofont-close-line"></i></span>
                                        Two-factor authentication (2FA)
                                    </a>
                                </li> -->
                            </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6" v-if="$auth.$state.user.userType === 'Administrator'">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">Uploads</h4>
                        </div>
                        <div class="card-body">
                            <div class="app-link">
                                <h5>What would you like to upload</h5>
                                <nuxt-link class="btn btn-primary" to="/blogs/uploadBlog">Blog</nuxt-link>
                                <br>
                                <div class="mt-3"></div>
                                <nuxt-link class="btn btn-primary" to="/analysis/uploadAnalysis">Analysis</nuxt-link>
                                <br>
                                <div class="mt-3"></div>
                                <nuxt-link class="btn btn-primary" to="/news/uploadNews">News</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6" v-else-if="$auth.$state.user.userType === 'normalUser'">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">Download App</h4>
                        </div>
                        <div class="card-body">
                            <div class="app-link">
                                <h5>Get Verified On Our Mobile App</h5>
                                <p>Verifying your identity on our mobile app more secure, faster, and reliable.</p>
                                <a href="#" class="btn btn-primary">
                                    <img src="~/assets/images/android.svg" alt="">
                                </a>
                                <br>
                                <div class="mt-3"></div>
                                <a href="#" class="btn btn-primary">
                                    <img src="~/assets/images/apple.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-12">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">Information </h4>
                            <NuxtLink class="btn btn-primary" to="/users/profileUpdate">Edit</NuxtLink>
                        </div>
                        <div class="card-body">
                            <form class="row">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>EMAIL ADDRESS</span>
                                        <h4>{{$auth.$state.user.email}}</h4>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>Authentication Strategy:</span>
                                        <h4>{{$auth.$state.user.strategy}}</h4>
                                    </div>
                                </div>
                                <!-- <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>JOINED SINCE</span>
                                        <h4>20/10/2020</h4>
                                    </div>
                                </div> -->
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>TYPE</span>
                                        <div v-if="$auth.state.user.userType === 'Administrator'">
                                        <h4>Administrator</h4>
                                        </div>
                                        <div v-else>
                                            <h4>Normal</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>Is Verified?</span>
                                        <div v-if="$auth.state.user.isVerified === true">
                                        <h4>Verified</h4>
                                        </div>
                                        <div v-else>
                                            <h4>Not Verified</h4>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                </div>
                    <!-- alerts -->
                    <div class="mt-5" v-if="verifyAlertMessage === 'true'">
                        <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">Thank you for
                        an email was sent please check you inbox or spam box!</v-alert>
                    </div>

                    <div class="mt-5" v-else-if="verifyAlertMessage === 'false'">
                        <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error"> there was an
                        Somthing Went Wrong</v-alert>
                    </div>

                <div class="col-xxl-8 col-xl-6" v-if="$auth.state.user.isVerified === true">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">VERIFY & UPGRADE </h4>
                        </div>
                        <div class="card-body">
                            <h5>Account Status : <span class="text-success">Verified <i
                                        class="icofont-verification-check"></i></span> </h5>
                            <p>Your account is verified. Contact our call center to help you enable funding, trading, and withdrawal.
                            </p>
                            <NuxtLink class="btn btn-primary" to="/contact">Contact Call Center</NuxtLink>
                        </div>
                    </div>
                </div>
                    <div v-else  class="col-xxl-8 col-xl-6">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">VERIFY & UPGRADE </h4>
                        </div>
                        <div class="card-body">
                            <h5>Account Status : <span class="text-warning">Pending <i
                                        class="icofont-warning"></i></span> </h5>
                            <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                            </p>
                            <a class="btn btn-primary" @click="getVerified()"> Get Verified</a>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-6">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title"><i class="icofont-bank"></i> Bank Transfere Numbers: </h4>
                        </div>
                    <!-- alerts -->
                    <div class="text-center ma-2">
                        <v-snackbar
                        v-model="snackbar"
                        >
                        {{ this.copiedToClipBoard }}

                        <template v-slot:action="{ attrs }">
                            <v-btn
                            color="pink"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                            >
                            Close
                            </v-btn>
                        </template>
                        </v-snackbar>
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="user-info">
                                        <h4>Is Bank</h4>
                                        <h4>TRY:</h4>
                                        <span @click="copySign('ASAAD SAHLOUL')">Name: ASAAD SAHLOUL</span><br>
                                        <span @click="copySign('TR 3000 0100 2480 7807 0507 5005')">TR 3000 0100 2480 7807 0507 5005</span>
                                        <h4>USD:</h4>
                                        <span @click="copySign('ASAAD SAHLOUL')">Name: ASAAD SAHLOUL</span><br>
                                        <span @click="copySign('TR 3000 0100 2480 7807 0507 5005')">TR 3000 0100 2480 7807 0507 5005</span>
                                        
                                    </div>
                                <hr>
                                </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="user-info">
                                        <h4>Kuveyt Türk:</h4>
                                        <h4>TRY:</h4>
                                        <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA</span><br>
                                        <span @click="copySign('TR800020500009676033300001')">TR800020500009676033300001</span>
                                        <h4>USD:</h4>
                                        <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA</span><br>
                                        <span @click="copySign('TR960020500009676033300101')">TR960020500009676033300101</span>
                                        
                                    </div>
                                <hr>
                                </div>
                                    <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="user-info">
                                        <h4>Al Baraka Bankası:</h4>
                                        <h4>TRY:</h4>
                                        <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA</span><br>
                                        <span @click="copySign('TR04 0020 3000 0782 3533 0000 01')">TR04 0020 3000 0782 3533 0000 01</span>
                                        <h4>USD:</h4>
                                        <span @click="copySign('KHALED JUMA')">Name: KHALED JUMA</span><br>
                                        <span @click="copySign('TR74 0020 3000 0782 3533 0000 02')">TR74 0020 3000 0782 3533 0000 02</span>
                                        
                                    </div>
                                </div>
                            </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</v-app>
</template>
<script>
export default {
    data() {
        return{
            name:"",
            email:"",
            verifyAlertMessage: '',
            copiedToClipBoard: '',
             snackbar: false,
        }
    },
    methods: {
        async logout() {
          await this.$auth.logout()
        },
    async getVerified() {
        try {
            const userId = this.$auth.$state.user._id
            console.log(typeof(userId));
            const response = await this.$axios.get('/api/users/varifyById/'+userId)
            if(response.data.success){
                console.log(response.data.success)
                this.verifyAlertMessage = 'true'
            } else {
                this.verifyAlertMessage = 'false'
            }
        } catch(err){
            this.verifyAlertMessage = 'false'
        }

    },
       async copySign(iban) {
           this.snackbar = true
        navigator.clipboard.writeText(iban);

        /* Alert the copied text */
        this.copiedToClipBoard =("Copied the text: " + iban);
            }
    },
    
}
</script>