<template>
  <div class="icg-user-navbar__wrapper">
    <div class="icg-user-navbar__content">
      <div class="icg-user-navbar__logo">
        <NuxtLink to="/">
          <img src="~/assets/images/logob.png" alt="">
        </NuxtLink>
      </div>
      <div class="icg-user-navbar__controls">
        <Searchbar />
        <ThemeToggler />
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </div>
  </div>
</template>

<script>
import NotificationDropdown from '@/components/NotificationDropdown.vue';
import ProfileDropdown from '@/components/ProfileDropdown.vue';
import Searchbar from '@/components/Searchbar.vue';
import ThemeToggler from '@/components/ThemeToggler.vue';
export default {
  components: {
    NotificationDropdown,
    ProfileDropdown,
    Searchbar,
    ThemeToggler,
  },
};
</script>

<style>
.icg-user-navbar__wrapper {
  background-color: #FEEDB6;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  padding: 1.5rem 3rem;
  border-bottom: solid 2px var(--icg-light-theme-border-color);
}

.icg-user-navbar__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icg-user-navbar__controls {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2rem;
}
</style>
