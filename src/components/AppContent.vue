<template>
  <div class="content">
    <Upload/>
    <Messages/>
    <Feed/>
  </div>
</template>

<script>
import Upload from './Upload'
import Messages from './Messages'
import Feed from './Feed'

export default {
  name: 'Content',
  components: {
    Upload,
    Messages,
    Feed
  },
  data () {
    return {
    }
  },
  methods: {
    (link) {
      return link;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  border: 1px solid red;
  margin: 16px;
}
</style>
