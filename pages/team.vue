<template>
    <div id="main-wrapper show">
            <Banner title="Our Team" />
    <div class="join-team section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="join-team-content text-center">
                        <h2 class="mb-2">Want to work with us?</h2>
                        <p class="mb-4">We're always looking to hire talented folks to join our ever-growing team of
                            designers, engineers, and support staff.</p>
                        <a href="#" class="btn btn-primary px-4 py-2">View Open Position</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="team-member section-padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <div class="section-title text-center">
                        <h2>Small team. Big hearts.</h2>
                        <p>Our focus is always on finding the best people to work with. Our bar is high, but you
                            look
                            ready to take on the challenge.</p>
                    </div>
                </div>
            </div>
            <div class="row pb-5">
                <div class="col-4">
                    <img src="~/assets/images/team/1.jpg" class="img-fluid rounded shadow-md" alt="...">
                </div>
                <div class="col-3">
                    <img src="~/assets/images/team/2.jpg" class="img-fluid rounded shadow-md mb-4" alt="...">
                    <img src="~/assets/images/team/3.jpg" class="img-fluid rounded shadow-md" alt="...">
                </div>
                <div class="col-5">
                    <div class="row mb-4">
                        <div class="col-5">
                            <img src="~/assets/images/team/4.jpg" class="img-fluid rounded shadow-md mb-4" alt="...">
                        </div>
                        <div class="col-7">
                            <img src="~/assets/images/team/5.jpg" class="img-fluid rounded shadow-md mb-4" alt="...">
                        </div>
                        <div class="col-12">
                            <img src="~/assets/images/team/6.jpg" class="img-fluid rounded shadow-md" alt="...">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="trusted-business py-5 text-center">
                        <h3>Trusted by over <strong>Millions of business</strong> around the world</h3>
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

    <div class="interested-join section-padding">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="interested-join-content text-center">
                        <h2>Interested in joining our team?</h2>
                        <p>Hit us up and we'll get in touch with you.</p>
                        <a href="#" class="btn btn-primary">Apply Now</a>
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