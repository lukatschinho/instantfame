<template>
  <div class="navigation">
    <a @click="contentIsActive('feed')">Me Me Me</a>
    <a @click="contentIsActive('upload')">Upload Photo</a>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      navigationText: 'NAV BAR'
    }
  },
  methods: {
    contentIsActive(link) {
      this.$emit("navigationBarClicked",link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> // npm install node-sass sass-loader for scss support

.navigation {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: black;
  padding: 24px 0;
  color: white;
  background-color: #fff;
  border-top: 1px solid rgba(0,0,0,.0975);
  a {
    color: black;
    padding: 0 16px;
    text-decoration: none;
  }
}

</style>
