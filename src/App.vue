<template>
  <div id="app">
    <AppHeader/>
    <AppContent ref="content"/>
    <AppNavigationBar/>
  </div>
</template>

<script>
import AppContent from './components/AppContent'
import AppNavigationBar from './components/AppNavigationBar'
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppNavigationBar,
    AppContent,
    AppHeader
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
@import 'assets/scss/basics.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
