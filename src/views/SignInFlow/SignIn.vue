<template>
  <div class="container" :class="{'light-background': !isDarkMode, 'dark-background': isDarkMode}">
    <Notification v-if="hasText" :text="text"/>
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" width="136px" height="106px" v-show="isDarkMode">
      <img src="@/assets/DCHQ-dark.svg" width="136px" height="106px" v-show="!isDarkMode">
      <h4 :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}">Sign into Design+Code HQ</h4>
      <form @submit.prevent="onSubmit">
        <input 
          tpye="email" placeholder="Email" :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
          v-model="email"
          >
        <input 
          type="password" placeholder="Password" :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
          v-model="password"
          >
        <button>Sign in</button>
      </form>
      <router-link to="/recover" :class="{'light-link': isDarkMode, 'dark-link': !isDarkMode}">Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue"
import ThemeSwitch from "@/components/ThemeSwitch.vue"
import Notification from "@/components/Notification.vue"
import 'animate.css'
import { auth } from "@/main"

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      passwrod: null
    }
  },  
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
    },
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password, true)
        .then(response => {
          this.$router.replace("/");
        })
        .catch(error => {
          alert("Error:", error);
      });
    }
  },
  mounted() {
      const params = this.$route.params;

      if(params.userLoggedOut) {
        this.hasText = true;
        this.text = "You have logged out!";
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
