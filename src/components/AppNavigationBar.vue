<template>
  <div class="navigation">
    <a href="" @click="contentIsActive(feed)">Me Me Me</a>
    <a href="" @click="contentIsActive(upload)">Upload</a>
    <a href="" @click="contentIsActive(messages)">Messages</a>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      navigation: 'NAV BAR'
    }
  },
  methods: {
    contentIsActive(link) {
      return link;
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
  a {
    color: white;
    padding: 0 8px;
    text-decoration: none;
    font-weight: bold;
  }
}

</style>
