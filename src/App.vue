<template>
  <div id="app">
    <AppHeader ref="header"/>
    <div class="wrapper">
      <Feed v-if="this.activeLink === 'feed'"/>
      <Upload v-if="this.activeLink === 'upload'"/>
      <Messages v-if="this.activeLink === 'messages'"/>
    </div>
    <AppNavigationBar @navigationBarClicked="setActiveContent"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppNavigationBar from './components/AppNavigationBar'
import Feed from './components/Feed'
import Upload from './components/Upload'
import Messages from './components/Messages'

export default {
  name: 'app',
  components: {
    AppNavigationBar,
    AppHeader,
    Feed,
    Upload,
    Messages
  },
  data () {
    return {
      activeLink: 'feed'
    }
  },
  methods: {
    setActiveContent(link) {
      this.activeLink = link
      console.log(link)
    }
  }
  // mounted () {
	// 	console.log( "Adding ref" );
	// 	console.log( this.$refs );
	// 	console.log( "printing this.$refs.navigation.contentIsActive()" );
	// 	console.log( this.$refs.navigation.contentIsActive() );
	// 	console.log( this.$refs.navigation.navigationText );
	// 	// console.log( article );
  // }
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

  .wrapper {
    margin-top: 30px;
  }
}
</style>
