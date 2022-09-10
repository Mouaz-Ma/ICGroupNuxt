<template>
  <div class="icg-user-welcome-card">
    <div class="icg-user-welcome-card__header">
      <div class="icg-user-welcome-card__user__image__container">
        <img class="icg-user-welcome-card__user__image" src="~/assets/images/profile/2.png" alt="" />
      </div>
      <div class="icg-user-welcome-card__header__title">Welcome, {{$auth.$state.user.username}}!</div>
    </div>
    <div v-if="!$auth.$state.user.isVerified" class="icg-user-welcome-card__body">
      <div class="icg-user-welcome-card__text">It looks like you haven't verified your account yet. Please verifiy your account so you can use the full potential of ICGroupsFx.</div>
    </div>
    <div v-if="$auth.$state.user.isVerified" class="icg-user-welcome-card__body">
      <div class="icg-user-welcome-card__text">This is your personal dashboard, where you can find your personal information, and tools to help you getting started with ICGroupsFx.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style>
.icg-user-welcome-card {
  padding: 1rem;
  border: solid 1px var(--icg-light-theme-border-color);
  border-radius: 0.5rem;
  /* background: #342E30;
  background: linear-gradient(180deg, #342E30 0%, #231f20 100%); */
}

.icg-user-welcome-card__user__image__container {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: solid 4px var(--icg-light-theme-border-color);
}

.icg-user-welcome-card__user__image {
  height: 100%;
  max-width: 100%;
  border-radius: 50%;
}

.icg-user-welcome-card__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: bolder;
  /* color: #ddd; */
}

/* .icg-user-welcome-card__text {
  color: #ccc;
} */
</style>
