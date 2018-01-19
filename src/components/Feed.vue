<template>
  <div class="feed">
    <Post/>
    <Post/>
    <Post/>
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'Feed',
  components: {
    Post
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
