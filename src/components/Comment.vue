<template>
  <div class="comment">
    <p class="commentWriter">{{ commentWriter }}</p>
    <p class="commentText">{{ commentText }}</p>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  data () {
    return {
      commentWriter: 'Hans Zimmer',
      commentText: 'really nice picture Donald! #shithole'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .comment {
    display: flex;
    justify-content: flex-start;
    margin: 0 0 0 15px;

    p:first-child {
      font-weight: bold;
      margin-right: 10px;
    }
  }
</style>
