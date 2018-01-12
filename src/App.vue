<template>
  <div id="app">
    <NavigationBar/>
    <Notifications></Notifications>
    <Feed/>
    <Upload/>
    <Messages v-if="setActiveContent()" />
    <Post/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Notifications from './components/Notifications'
import Feed from './components/Feed'
import Upload from './components/Upload'
import Messages from './components/Messages'
import Post from './components/Post'

export default {
  name: 'app',
  components: {
    NavigationBar,
    Notifications,
    Feed,
    Upload,
    Messages,
    Post
  },
  methods: {
    setActiveContent() {
      return true;
    }
  }
}
</script>

<style>

@import 'assets/scss/normalize';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
