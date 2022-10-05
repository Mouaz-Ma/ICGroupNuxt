<template>
  <div id="main-wrapper show">
    <Banner title="Frequently Asked Questions" />
    <div class="terms_condition">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div id="faq" class="terms_condition-content">

              <div class="terms_condition-text">
                <h3>{{ $t('faq account opening')}}</h3>
                <p>{{ $t('faq account opening p1') }}</p>
                <p>{{ $t('faq account opening p2') }}</p>
                <p>{{ $t('faq account opening p3') }}</p>
                <p>{{ $t('faq account opening p4') }}</p>
                <p><a href="https://drive.google.com/file/d/1pvsIXu_Jgy3mKBLQo88QxvDtRUUje_id/view?usp=sharing" target="_blank">{{ $t('Read more') }}</a></p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('faq withdrawal paper')}}</h3>
                <p>{{ $t('faq withdrawal paper p1') }}</p>
                <p>{{ $t('faq withdrawal paper p2') }}</p>
                <p>{{ $t('faq withdrawal paper p3') }}</p>
                <p><a href="https://drive.google.com/file/d/1VDKJbL04qQK8NzUs0s5vycPpdItSZ0zJ/view?usp=sharing" target="_blank">{{ $t('Read more') }}</a></p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('faq ib contract')}}</h3>
                <p>{{ $t('faq ib contract p1') }}</p>
                <p><a href="https://drive.google.com/file/d/1GuUnV8Kp4L88smd3ePdW4LlONphG67el/view?usp=sharing" target="_blank">{{ $t('Read more') }}</a></p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('Frequently Asked Questions')}} </h3>
                <!-- <p>Tradix is an instant cryptocurrency exchange that allows you to exchange crypto
                                fast and buy it with a bank card. The service provides the best crypto-to-crypto
                                rates and supports over 140 cryptocurrencies available for exchange
                            </p> -->
              </div>


              <div class="terms_condition-text">
                <h3>{{ $t('What is online trading?')}} </h3>
                <p>
                  {{ $t('What is online trading? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('Is trading only for professional traders?')}} </h3>
                <p>
                  {{ $t('Is trading only for professional traders? paragraph')}}
                </p>
              </div>


              <div class="terms_condition-text">
                <h3>{{ $t('How can I make the most profit?')}} </h3>
                <p>
                  {{ $t('How can I make the most profit? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('What are spreads?')}} </h3>
                <p>
                  {{ $t('What are spreads? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('what is a trading ‘lot’?')}} </h3>
                <p>
                  {{ $t('What is a trading ‘lot’? paragrpah')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('What is Leverage?')}} </h3>
                <p>
                  {{ $t('What is Leverage? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('What is Swap?')}} </h3>
                <p>
                  {{ $t('What is Swap? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('How to open a personal account with ICGroup brokerage firm?')}} </h3>
                {{ $t('How to open a personal account with ICGroup brokerage firm? paragrpah')}}
                <p>
                  <nuxt-link to="/contact">{{$t('contact')}}</nuxt-link>
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('demo account open')}} </h3>
                <p>
                  {{ $t('demo account open paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('Are there fees to be paid to open or close an account?')}} </h3>
                <p>
                  {{ $t('Are there fees to be paid to open or close an account? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('What is the difference between a trial account and a real account?')}} </h3>
                <p>
                  {{ $t('What is the difference between a trial account and a real account? paragraph')}}
                </p>
              </div>

              <div class="terms_condition-text">
                <h3>{{ $t('Is there a fee or commission on money withdrawal?')}} </h3>
                <p>
                  {{ $t('Is there a fee or commission on money withdrawal? paragraph')}}
                </p>
              </div>


              <!-- <div class="terms_condition-text">
                            <h3>Why should I trust you? </h3>
                            <p>Tradix is one of the most prominent instant cryptocurrency exchanges that has
                                gained the trust of more than 2M users from all over the world. The service provides
                                safe and fast transactions without revealing users identities. We provide the best
                                possible rates by comparing a wide range of reliable trading platforms and work with
                                a list of 140+ cryptocurrencies that is constantly increasing.</p>
                            <ul>
                                <li>
                                    <i class="fa fa-circle"></i>
                                    <p>No deposit storage. </p>
                                </li>
                                <li>
                                    <i class="fa fa-circle"></i>
                                    <p>Instant exchange. </p>
                                </li>
                                <li>
                                    <i class="fa fa-circle"></i>
                                    <p>Each account is protected with 2-factor authentication and an HTTPS protocol.
                                    </p>
                                </li>
                                <li>
                                    <i class="fa fa-circle"></i>
                                    <p>More than 2 million satisfied users.</p>
                                </li>
                            </ul>
                        </div>

                        <div class="terms_condition-text">
                            <h3>Does Tradix fix rates? </h3>
                            <p>Tradix mobile app does! Mobile app users will no longer be affected by the risks
                                associated with crypto market fluctuations. Soon, the fixed-rate exchanges will also
                                be implemented on the web version. To lock the current exchange rate, the user needs
                                to click on the lock icon, which will result in them getting the exact same amount
                                of crypto as is displayed on the screen. The rate is fixed for 15 minutes, which
                                should be more than enough to carry out the exchange.


                            </p>
                            <p> Alternatively, Tradix offers our lowest fee of 0.25% for all crypto-to-crypto
                                exchanges made at a floating rate.</p>
                        </div>

                        <div class="terms_condition-text">
                            <h3>No warranties : </h3>
                            <p>Elaenia is provided “as is” without any representations or warranties. Elaenia.com
                                makes no representations or warranties in relation to this website or the
                                information and materials provided on this website.</p>
                            <p>Elaenia.com does not warrant that:</p>

                            <ul>
                                <li>
                                    <i class="fa fa-circle"></i>
                                    <p>The website will be constantly available, or available at all moving forward.
                                    </p>
                                </li>
                                <li>
                                    <i class="fa fa-circle"></i>
                                    <p>The information on this website is complete, true, or non-misleading.</p>
                                </li>
                            </ul>
                        </div>

                        <div class="terms_condition-text">
                            <h3>Privacy : </h3>
                            <p>For details about our privacy policy, please refer to the privacy policy section.</p>
                        </div>

                        <div class="terms_condition-text">
                            <h3>Unenforceable provisions : </h3>
                            <p>If any provision of this website disclaimer is, or is found to be, unenforceable
                                under applicable law, that will not affect the enforceability of the other
                                provisions of this website disclaimer.</p>
                        </div>

                        <div class="terms_condition-text">
                            <h3>Links : </h3>
                            <p>Responsibility for the content of external links (to web pages of third parties) lies
                                solely with the operators of the linked pages.</p>
                        </div>

                        <div class="terms_condition-text">
                            <h3>Modifications: </h3>
                            <p>Elaenia.com may revise these terms of use for its website at any time without notice.
                                By using this web site you are agreeing to be bound by the then current version of
                                these terms of service.</p>
                        </div>

                        <div class="terms_condition-text">
                          <h3>Breaches of these terms and conditions: </h3>
                          <ul>
                            <li>
                              <i class="fa fa-circle"></i>
                              <p>Elaenia.com reserves the rights under these terms and conditions to take
                                action if you breach these terms and conditions in any way. </p>
                            </li>
                            <li>
                              <i class="fa fa-circle"></i>
                              <p>Elaenia.com may take such action as seems appropriate to deal with the
                                breach, including suspending your access to the website, suspending your
                                earnings made trough Elaenia.com,prohibiting you from accessing the
                                website, or bringing court proceedings against you.</p>
                            </li>
                          </ul>
                        </div> -->
                        </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Banner from '@/components/pageBanner';
export default {
  auth: false,
  scrollToTop: true,
  layout: 'index',
  components: {
    Banner,
  },
};
</script>

<style>
#faq {
  counter-reset: h3;
}

html:lang(en) #faq h3::before {
  content: '';
  margin-right: 0;
}

html:lang(ar) #faq h3::before {
  content: '';
  margin-left: 0;
}
</style>
