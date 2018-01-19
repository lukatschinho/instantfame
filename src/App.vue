<template>
  <div id="app">
    <AppHeader/>
    <AppContent/>
    <AppNavigationBar/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import AppNavigationBar from './components/AppNavigationBar'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppNavigationBar,
    AppContent
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
