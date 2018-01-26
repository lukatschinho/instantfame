<template>
  <div class="comment">
    {{ generateBotComment() }}
  </div>
</template>

<script>

export default {
  name: 'BotComment',
  data () {
    return {
      names: ['Lukas Sauter', 'instaqueen666'],
      messages: ['amazing!!!', 'i love you!', 'you are just so fun.'],
      emojis: ['😉😉😉','😀😅😆'],
      hashtags: ['#lookingvibrant', '#star', '#lovely'],
      botComment: { author: '', text: '' }
    }
  },
  methods: {
    generateBotComment() {
      var name = this.names[Math.floor(Math.random() * this.names.length)]
      var message = this.messages[Math.floor(Math.random() * this.messages.length)]
      var emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
      var hashtag = this.hashtags[Math.floor(Math.random() * this.hashtags.length)]
      return name + ': ' + message + ' ' + emoji + ' ' + hashtag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
