<template>
  <div class="navigation">
    <a href="" @click="setActive()">Ich Ich Ich</a>
    <a href="" @click="setActive()">Profil</a>
    <a href="" @click="setActive()">Upload</a>
    <a href="" @click="setActive()">Nachrichten</a>
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
    setActive() {
      return true;
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
  padding: 16px;
  color: white;
  a {
    color: white;
    padding: 24px;
    text-decoration: none;
    font-weight: bold;
  }
}

</style>
