<template>
  <div class="feed">
    <div class="posts" :key="((posts.length -1) -index)" v-for="(post, index) in postsReversed">
      <Post :description="post.description" :photo="post.photo" :postId="((posts.length -1) -index)" @getData="setData" ref="posts"/>
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
      return this.posts.reverse()
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
