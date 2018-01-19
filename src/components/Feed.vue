<template>
  <div class="feed">
    <button type="button" name="Refresh" @click="consolePost()">Refresh</button>
    <div class="posts" v-for="(post, index) in postsReversed">
      <Post :description="post.description" :photo="post.photo"/>
    </div>
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
      posts: JSON.parse(localStorage.getItem('posts'))
      }
    },
  computed: {
    postsReversed() {
      return this.posts.reverse()
    }
  },
  methods: {
    consolePost() {
      console.log(this.posts[0].photo)
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
