<template>
  <!-- NOTIFICATION DROPDOWN BEGIN -->
  <div class="icg-notification-dropdown__wrapper">
    <button @click.prevent="toggleIsCollapsed" class="icg-notification-button"><i class="icofont-alarm"></i></button>
    <div v-if="!isCollapsed" class="icg-notification-dropdown__menu">
      <div class="icg-notification-dropdown__menu__header">Notifications</div>
      <div class="icg-notification-dropdown__menu__item">
        <div class="icg-notification-dropdown__menu__item__image"></div>
        <div>
          <div class="icg-notification-dropdown__menu__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique dapibus libero, vel varius erat convallis quis. Cras a metus in risus pharetra pretium vitae eget enim.</div>
          <span><i class="icofont-clock-time"></i>2022-10-01</span>
        </div>
      </div>
      <div class="icg-notification-dropdown__menu__item">
        <div class="icg-notification-dropdown__menu__item__image"></div>
        <div>
          <div class="icg-notification-dropdown__menu__item__text">Bye world.</div>
          <span><i class="icofont-clock-time"></i>2022-10-01</span>
        </div>
      </div>
      <div class="icg-notification-dropdown__menu__item">
        <div class="icg-notification-dropdown__menu__item__image"></div>
        <div>
          <div class="icg-notification-dropdown__menu__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique dapibus libero, vel varius erat convallis quis. Cras a metus in risus pharetra pretium vitae eget enim.</div>
          <span><i class="icofont-clock-time"></i>2022-10-01</span>
        </div>
      </div>
      <div class="icg-notification-dropdown__menu__item">
        <div class="icg-notification-dropdown__menu__item__image"></div>
        <div>
          <div class="icg-notification-dropdown__menu__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique dapibus libero, vel varius erat convallis quis. Cras a metus in risus pharetra pretium vitae eget enim.</div>
          <span><i class="icofont-clock-time"></i>2022-10-01</span>
        </div>
      </div>
      <div class="icg-notification-dropdown__menu__item">
        <div class="icg-notification-dropdown__menu__item__image"></div>
        <div>
          <div class="icg-notification-dropdown__menu__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique dapibus libero, vel varius erat convallis quis. Cras a metus in risus pharetra pretium vitae eget enim.</div>
          <span><i class="icofont-clock-time"></i>2022-10-01</span>
        </div>
      </div>
    </div>
  </div>
  <!-- NOTIFICATION DROPDOWN END -->
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true,
      notifications: [
        {content: 'Account created successfully.', createdAt: '2022-01-01T00:00:13.000', imageUrl: ''},
        {content: 'Account created successfully.', createdAt: '2022-01-01T00:00:13.000', imageUrl: ''},
        {content: 'Account created successfully.', createdAt: '2022-01-01T00:00:13.000', imageUrl: ''},
        {content: 'Account created successfully.', createdAt: '2022-01-01T00:00:13.000', imageUrl: ''},
      ],
    };
  },
  methods: {
    toggleIsCollapsed() {
      this.isCollapsed = !this.isCollapsed;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isCollapsed = true;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.close);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style>
.icg-notification-button {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  transition: all ease-in-out 0.3s;
}

.icg-notification-button:focus, .icg-notification-button:active, .icg-notification-button:hover {
  background-color: #eee;
}

.icg-notification-dropdown__wrapper {
  position: relative;
  display: inline-flex;
  /* margin: 0.5rem 0; */
  align-items: flex-end;
  flex-direction: column;
}

.icg-notification-dropdown__menu__header {
  /* align-self: flex-start; */
  font-size: large;
  margin: 0rem 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 0rem 1rem;
  width: 90%;
  color: #231f20;
}

.icg-notification-dropdown__menu {
  position: absolute;
  background-color: white;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  overflow-y: auto;
  z-index: 10;
  width: 30rem;
  max-height: 300px;
  box-shadow: 0 0 6px #888;
}

.icg-notification-dropdown__menu__item__image {
  min-width: 4rem;
  min-height: 4rem;
  border-radius: 50%;
  background-color: #888;
}

.icg-notification-dropdown__menu__item__image:lang(ar) {
  margin-left: 1rem;
}

.icg-notification-dropdown__menu__item__image:lang(en) {
  margin-right: 1rem;
}

.icg-notification-dropdown__menu__item {
  font-size: small;
  padding: 1rem 1rem;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
}

.icg-notification-dropdown__menu__item__text {
  color: #231f20;
}

.icg-notification-dropdown__menu__item:nth-child(2) {
  border-top: solid 1px #bbb;
}

.icg-notification-dropdown__menu__item:not(:last-child) {
  border-bottom: solid 1px #bbb;
}
</style>
