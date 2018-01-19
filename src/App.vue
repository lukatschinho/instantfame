<template>
  <div id="app">
    <NavigationBar/>
    <AppHeader/>
    <div class="wrapper">
      <Feed/>
      <Upload/>
      <Messages v-if="setActiveContent()" />
      <Notifications/>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Upload from './components/Upload'
import Messages from './components/Messages'
import Feed from './components/Feed'
import AppHeader from './components/AppHeader'
import Notifications from './components/Notifications'

export default {
  name: 'app',
  components: {
    NavigationBar,
    AppHeader,
    Upload,
    Messages,
    Feed,
    Notifications
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
@import 'assets/scss/basics';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fafafa;
}
</style>
