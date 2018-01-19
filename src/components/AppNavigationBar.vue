<template>
    <div class="navigation">
      <div class="wrapper">
        <a @click="contentIsActive('feed')">Me Me Me</a>
        <a @click="contentIsActive('upload')">Upload</a>
        <a @click="contentIsActive('messages')">Messages</a>
    </div>
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
      this.activeLink = link
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
  background-color: #fff;
  border-top: 1px solid rgba(0,0,0,.0975);

  .wrapper {
    display: flex;
    justify-content: space-between;

    a {
      color: #000;
      padding: 0 8px;
      text-decoration: none;
      font-weight: bold;
    }
  }
}

</style>
