module.exports = () => {
  const data = {
      names: ['Lukas Sauter', 'instaqueen666'],
      messages: ['amazing!!!', 'i love you!', 'you are just so fun.'],
      emojis: ['😉😉😉','😀😅😆'],
      hashtags: ['#lookingvibrant', '#star', '#lovely']
  };

    var name = data.names[Math.floor(Math.random() * data.names.length)]
    var message = data.messages[Math.floor(Math.random() * data.messages.length)]
    var emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)]
    var hashtag = data.hashtags[Math.floor(Math.random() * data.hashtags.length)]
    return { name: name, message: message + ' ' + emoji + ' ' + hashtag }
}
