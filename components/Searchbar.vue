<template>
  <!-- SEARCH BAR BEGIN -->
  <div class="search" dir="ltr">
    <form action="#">
      <div class="input-group">
        <input v-model="searchQuery" type="text" class="form-control" :placeholder="placeholder" @keyup="searchUser()">
        <span class="input-group-text"><i class="icofont-search"></i></span>
      </div>
    </form>
    <ul class="searchDropDown" v-if="searchQuery !== ''">
                  <li
                    v-for="user in foundUsers.slice(0,5)"
                    :key="user.id"
                    class="searchResults"
                  >
                    <nuxt-link
                      :to="'/users/profile/'+user._id"
                      id="profileLink"
                    >{{ user.username }}
                    </nuxt-link>
                  </li>
                </ul>
  </div>
  <!-- SEARCH BAR END -->
</template>

<script>
export default {
  computed: {
    placeholder() {
      return this.$i18n.locale === 'ar' ? 'البحث' : 'Search';
    },
  },
  data() {
      return {
        searchQuery: null,
        foundUsers: [],
      }
    },
    methods: {
      async searchUser() {
        if (this.searchQuery != ''){
          const response = await this.$axios.get('/api/users/search/?q='+this.searchQuery)
          this.foundUsers = response.data.usersFound.filter(user => user.userType !== 'Administrator');
          console.log(this.foundUsers)
        }
      },
    }
};
</script>
<style>
.searchResults{
  /* height: 25px; */
  position: relative;
  padding: 1rem;
  width: 100%;
  border-bottom: 0.5px solid #ccc;
  background-color: white;
}

.searchResults:hover {
  /* height: 25px; */
  background-color: #fbcc31
}

.searchResults a{
  color: var(--icg-light-theme-color);
  text-decoration: none;
}
.searchDropDown{
  width: 100%;
  max-width: 244px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profileLink{
  margin-top: 10px !important;
  padding-top: 10px;
}
</style>
