<template>
  <div class="feed">
    <div v-if="postsReversed == null">
      <h3>You have not posted any photos. Please upload a photo!</h3>
    </div>
    <div class="posts" v-for="(post, index) in postsReversed">
      <Post :description="post.description" :photo="post.photo" @getData="setData" ref="posts"/>
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
  methods: {
    checkLocalStorage() {
      return false
      if(localStorage.getItem('posts') === null) {
        return true
      }
    },
    setData(aLikes){
      this.$emit("getData", this.getLikeCount());
    },
    getLikeCount() {
      let sumLikes = 0;
      let sumComments = 0;
      for(let i = 0; i < this.$refs.posts.length; i++) {
        sumLikes += this.$refs.posts[i].getLikeCount();
        sumComments += this.$refs.posts[i].getCommentCount();
      }
      return {likes: sumLikes, comments: sumComments};
    },
  },
  computed: {
    postsReversed() {
      if (this.posts != null) {
        return this.posts.reverse()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.feed {
  padding-bottom: 100px;
}

</style>
