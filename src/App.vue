<template>
  <div id="app">
    <AppHeader @headerClicked="setActiveContent"/>
    <div class="content-wrapper">
      <Feed v-if="this.activeLink === 'feed'"/>
      <Upload @uploadClicked="setActiveContent" v-if="this.activeLink === 'upload'"/>
      <Messages v-if="this.activeLink === 'messages'"/>
      <Notifications v-if="this.activeLink === 'notifications'"/>
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
import Notifications from './components/Notifications'

export default {
  name: 'app',
  components: {
    AppNavigationBar,
    AppHeader,
    Feed,
    Upload,
    Messages,
    Notifications
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

<style lang="scss">

@import 'assets/scss/normalize';
@import 'assets/scss/basics.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .content-wrapper {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    margin-top: 104px;
  }
}

</style>
