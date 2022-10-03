<template>
  <div class="icg-user-welcome-card">
    <div class="icg-user-welcome-card__header">
      <div class="icg-user-welcome-card__user__image__container">
        <img v-if="$store.getters.getUserImageUrl" class="icg-user-welcome-card__user__image" :src="$store.getters.getUserImageUrl" alt="" />
        <img v-else class="icg-user-welcome-card__user__image" src="~/assets/images/profile/2.png" alt="" />
        <div v-if="$auth.$state.user.strategy == 'local' && loading == false" @click="userSelectImage()" class="icg-user-welcome-card__user__image__upload">
          <i class="fa fa-camera"></i>
        </div>
        <div v-if="$auth.$state.user.strategy == 'local' && loading == true" class="icg-user-welcome-card__user__image__upload__loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <form id="avatar-form" style="display: none;">
          <input type="file" accept="image/jpeg" id="avatar-upload" @change="uploadAvatar()" />
        </form>
      </div>
      <div v-if="isAvatarError" class="w-100 my-3">
        <v-alert v-model="isAvatarError" border="bottom" color="red" dense dismissible outlined prominent shaped text type="error">{{avatarErrors[0]}}</v-alert>
      </div>
      <div class="icg-user-welcome-card__header__title">{{$t("Welcome")}}, {{$store.getters.getUserName}}!</div>
    </div>
    <div v-if="!$store.getters.getUserIsVerified" class="icg-user-welcome-card__body">
      <div class="icg-user-welcome-card__text">{{$t("It looks like you haven't verified your account yet. Please verifiy your account so you can use the full potential of")}} ICGroupsFx.</div>
    </div>
    <div v-if="$store.getters.getUserIsVerified" class="icg-user-welcome-card__body">
      <div class="icg-user-welcome-card__text">{{$t("This is your personal dashboard, where you can find your personal information, and tools to help you getting started with")}} ICGroupsFx.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: {},
      loading: false,
      avatarErrors: [],
      isAvatarError: null,
    };
  },
  methods: {
    userSelectImage() {
      const avatarUpload = document.getElementById('avatar-upload');
      avatarUpload.click();
    },
    uploadAvatar() {
      this.avatarErrors = [];
      this.loading = true;
      const avatarImage = document.getElementById('avatar-upload');
      const validExtensions = ['jpg', 'png', 'jpeg'];
      const maxSize = 1e5; // 600 kb
      const avatar = avatarImage.files[0];
      const fileExtension = avatar.name.substring(avatar.name.lastIndexOf('.')+1).toLowerCase();
      // console.log(avatar);
      // console.log(fileExtension);
      if (!validExtensions.includes(fileExtension)) {
        this.avatarErrors.push('Image must have one of the following extensions: jpg, png, jpeg.');
        this.isAvatarError = true;
        this.loading = false;
        return;
      }
      if ( !(avatar.size <= maxSize) ) {
        this.avatarErrors.push(`Image size must be below ${maxSize / 1000} kb`);
        this.isAvatarError = true;
        this.loading = false;
        return;
      }
      const formData = new FormData();
      formData.append('avatar', avatarImage.files[0]);
      this.loading = true;
      this.$axios.put('/api/users/uploadAvatar', formData, {credentials: true}).then((res) => {
        this.loading = false;
        // console.log(res);
        this.$store.commit('setUserAvatar', {imgUrl: res.data.foundUser.image.url, obj: this});
      }).catch((err) => {
        console.log(err);
        this.loading = false;
      });
    },
  },
};
</script>

<style>
.icg-user-welcome-card {
  padding: 1rem;
  margin: 1rem 0rem;
  border: solid 1px var(--icg-light-theme-border-color);
  border-radius: 0.5rem;
  background-color: var(--icg-light-theme-component-background-color);
  /* background: #342E30;
  background: linear-gradient(180deg, #342E30 0%, #231f20 100%); */
}

.icg-user-welcome-card__user__image__container {
  position: relative;
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

.icg-user-welcome-card__user__image__upload {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  color: white;
  opacity: 0;
  transition: 0.15s all ease-in;
  cursor: pointer;
}

.icg-user-welcome-card__user__image__upload__loading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  color: white;
  opacity: 0.75;
  /* transition: 0.15s all ease-in; */
  /* cursor: pointer; */
}

.icg-user-welcome-card__user__image__upload:hover,
.icg-user-welcome-card__user__image__upload:active,
.icg-user-welcome-card__user__image__upload:focus {
  margin: auto;
  opacity: 0.75;
}

/* .icg-user-welcome-card__text {
  color: #ccc;
} */
</style>
