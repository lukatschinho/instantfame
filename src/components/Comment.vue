<template>
  <div class="comment">
    <p class="commentWriter">{{ author }}</p>
    <p class="commentText">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ["author", "text"],
  data () {
    return {
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
