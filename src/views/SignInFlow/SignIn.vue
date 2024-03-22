<template>
  <div class="container" :class="{'light-background': !isDarkMode, 'dark-background': isDarkMode}">
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" width="136px" height="106px" v-show="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" width="136px" height="106px" v-show="!isDarkMode">
      <h4 :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}">Sign into Design+Code HQ</h4>
      <input tpye="email" placeholder="Email" :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}">
      <input type="password" placeholder="Password" :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}">
      <button>Sign in</button>
      <router-link to="/recover" :class="{'light-link': isDarkMode, 'dark-link': !isDarkMode}">Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue"
import ThemeSwitch from "@/components/ThemeSwitch.vue"
import 'animate.css'

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode')
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>
