<template>
  <div class="navigation">
    {{ iconAccount }}
    Icon 2
    Icon 3
    Icon 4
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      iconAccount: 'Mein Konto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
