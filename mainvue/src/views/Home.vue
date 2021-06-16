<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sonapp/">SonApp</router-link> |
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'getToken',
    ])
  },
  watch: {
  },
  beforeCreate() {

  },
  created() {
    if(this.getToken === '') {
      this.$router.push('/login')
    }
  },
  mounted() {
    console.log(this.getToken)
  },
  methods: {
  },
};
</script>
