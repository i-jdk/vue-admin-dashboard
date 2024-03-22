<template>
    <div>
        <div 
        v-show="show" 
        class="request animate__animated animate__slideInRight" 
        :class="{'light-reqest': isDarkMode, 'dark-request': !isDarkMode}"
      >Don't have a Design+Code HQ account?
        <router-link to="/request">Request an account</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RequestAccount",
        data() {
        return {
            show: false
        }
        },
        mounted() {
            this.show = true
        },
        computed: {
            isDarkMode() {
                return this.$store.getters.isDarkMode;
            }
        },
    }
    
</script>

<style lang="scss" scoped>
.request {
    position: absolute;
    top: 40px;
    right: 40px;
}

.light-request {
    color: rgba(255, 255, 255, 0.3);

    a {
        color: white;
    }
}

.dark-request {
    color: rgba(0, 0, 0, 0.3);

    a {
    color: black;
}
}
</style>