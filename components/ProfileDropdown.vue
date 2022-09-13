<template>
  <!-- PROFILE DROPDOWN BEGIN -->
  <div class="profile_log dropdown">
    <a class="user" v-b-toggle.userOptions>
      <span class="thumb"><img src="~/assets/images/profile/2.png" alt=""></span>
      <span class="arrow"><i class="icofont-angle-down"></i></span>
    </a>
    <b-collapse class="dropdown-menu" :class="{'dropdown-menu-right': $i18n.locale != 'ar', 'dropdown-menu-left': $i18n.locale == 'ar'}" id="userOptions">
      <div class="user-email">
        <div class="user">
          <span class="thumb"><img src="~/assets/images/profile/2.png" alt=""></span>
          <div class="user-info">
            <h5>{{$auth.$state.user.username}}</h5>
            <span>{{$auth.$state.user.email}}</span>
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
      <NuxtLink to="/users/profile" class="dropdown-item"><i class="icofont-ui-user"></i> {{$t("Profile")}}</NuxtLink>

      <NuxtLink class="dropdown-item" to="/users/profileUpdate"><i class="icofont-ui-settings"></i> {{$t("Settings")}}</NuxtLink>
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
        <i class="icofont-logout"></i> {{$t("Logout")}}</a>
    </b-collapse>
  </div>
  <!-- PROFILE DROPDOWN END -->
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
