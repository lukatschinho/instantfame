module.exports = () => {
  const data = {
      names: ['Lukas Sauter', 'instaqueen666', 'Brain Dead', 'Cheeky girl', 'Internet Princess', 'Princess Army', 'Cyka_Bylat', 'You are so Wonk', 'MicakToupee', 'RoastedFrog', 'For the lolz', 'Angel Goldfish', 'Super Nigga', 'Snow Princess', '	The Undertaker', 'Lil Miss Silly', 'Big Fart', 'Bazinga', 'Fairy hot', 'Canoodle', 'POTATO LOVER', 'Rickrack', 'Hot Babe', 'Razzamatazz', 'Tiny Wrestler', 'Chortle', 'Dolly Dolphin', 'Foolish Admin', 'SugerSprinkledWalrus', 'Jargogle', 'Pretty Pumpkin	', 'Three better than 2', 'OnceUponADime', 'Girl with the3 br0ken smile', 'Panda Protector', 'Mumbojumbo', 'Yellowbelly', 'Instant Hero', 'Donald Trump', '@therealdonaldtrump', 'sexyboy69', 'pussycat', 'loveBear99', 'blazeit420', 'dreadGirl11', 'lovely_juice', 'Psycho Thinker', 'Born-confused', 'i Like Me', 'Heres20BucksKillMe', 'Unforgettable Gal', 'Beauty Babe', 'Lukas Fornaro', 'Overly attached girlfriend', 'Michael Jackson', 'Bruce Willis', 'Scumbag Steve', 'Good Guy Greg', 'Bad Luck Brian', 'Grumpy Cat', 'Disaster Girl', 'Hipster Barista', 'Successful Black Man', 'Suburban Mom', 'Angry Hipster Girl', 'Baby Godfather', 'Stoner Stanley', 'College Freshman', 'Hello, This Is Dog', 'CoolMom', 'TallestSkill', 'Higher Ground', 'Anakin Skywalker', 'Obi Wan', 'not_a_bot', 'not a bot', "I'm no bot", 'real_human', 'notARobot', 'not_a_bot', 'really not a bot', "I'm no bot, I'm serious", 'real_humanoid', 'notARobotISwear', 'bot42', 'nobot', 'botXY98', 'cyborg66', 'notARobotIThink', 'am i real?', 'who am i?', 'where am i?', 'what is this?', 'no_bot44', 'cat_woman', 'Jackie Chan', 'HotGirl69', 'Bruce Lee', 'T-Rex', 'SingleLady48', 'gothic_dreams'],
      messages: ['amazing!!!', 'i love you!', 'you are just so fun', 'they should hang your photo at every restaurant you’ve ever eaten at', 'you are so good looking', 'you’ve got more charm than a charm bracelet', 'you’re super funny and insanely nice and everyone really likes you', 'you’re a dream come true', 'you’re more exciting than the final round of a game show', 'you’re funnier than one of those viral cat videos', 'Id follow you into battle. Or to the shops. Or just on Twitter. Up to you.', 'If you were a dinosaur youd be a Legendasaurus Rex', 'You are the last minute goal in the cup final.', 'Wow!!!', 'wow', 'wow!', 'WHoooooooo', 'Sexy!', 'Send nudes ;)', 'Marry me!', 'Are you free tonight?', 'I wanna have your baby!', 'Why dont you answer my messages :(', 'You are beautiful!', 'nice booty', 'Youre my kind of weird.', 'You could be a part-time model.', 'I want to build a nest in your beard.', 'When my life flashes before my eyes, I hope its mostly you.', 'Id be scared to play you at Scrabble.', 'Youre the hero Gotham needs.', 'You better than a perfectly ripe avocado.', 'If we were marooned on an island, Id be very sad when I had to eat you.', 'Id clean the hair out of the plughole for you.', 'Youre a lot more intelligent than you look.', 'You are a walking high-five.', 'Without you the world would have fewer people in it.', 'Youre like a match. Small and fiery.', 'Thank you for tolerating my family.', 'Youre perfectly layered. Like a lasagne.', 'Stop. Looking. So. Good. People are trying to get on with their lives around here.', 'You are small and I like it.', 'Youre weird but I like you.', 'Youre my favourite person to be hungover with.', 'Youre more supportive than a sports bra.', "You're the person my mum hopes I end up with.", "I once looked at your bum. I regret nothing.", "Is it a bird? Is it a plane? No. It's you, you massive legend.", "People talk about how nice you are behind your back.", 'I like that when you see a dog you point at it and say "dog".', "You're in my top 5 humans of all time.", "You're really good at making sandwiches.", "You've really nailed being a human. Good job.", "If you were bacteria, you'd be the good kind.", "You're cooler than the other side of the pillow.", "You're a glass of water after a long run.", "If you tried, you could probably be quite famous.", "Every time you smile, a kitten is born.", "You're better than free wifi.", "In a fight, you could beat two sharks, a bear and five ducks.", "You're the first person I'd look for after an apocalyptic event.", "I admit it. You're funnier than me.", "You have the best dance moves. They're both great.", "Things I wish I could be: Ninja. Astronaut. You.", "At the hairdressers, people just point at you and say 'like that'.", "You're tougher than my wifi password.", "8 out of 10 cats prefer you.", "I like your face.", "You're wise and all knowing, like a mighty owl.", "", "", "", "", "", "" ],
      emojis: ['😏😋😉', '😉', '😀😅😆', '✔️', '😋😎', '😋', '😏😋😇', '😇', '😘', '😍😍😍', '😊', '😝😝😝', '😜😜😜', '😛', '😚', '🧐', '🤪🤪🤪', '😎', '🤓', '😏', '☹️', '😫', '😭😭😭', '😢', '😳', '😱', '🤗', '🤭', '🤥', '😬', '🙄', '😯', '😵😵😵', '😲', '😈', '👽', '💩', '👻', '🙌', '👌', '👍👍👍', '💪', '💋', '👅👅👅', '👄💍💄', '👄', '💍', '💄', '👀', '🙏', '', '💁', '🤷', '🐶', '🐭', '🙈🙈🙈', '🙊', '🌹🌹🌹', '🌺', '🌸', '🌞', '💫', '🔥🔥🔥', '🍆', '❤️❤️❤️', '💞', '💞💞💞', '❤️', '🍷', '🚀', '🎊', '😀', '😅', '😆', '🌞', '🍔', '🍻', '🎈', '🎉', '🎉🎉🎉', '🌀', '🔝', '😋', '😇', '😳', '💦', '💦💦💦', '', '', '', '', '', '', '', '', '', ''],
      hashtags: ['#lookingsupervibrant', '#star', '#lovely', '#love', '#instagood', '#photooftheday', '#beautiful', '#happy', '#cute', '#tbt', '#like4like', '#followme', '#picoftheday', '#follow', '#art', '#instadaily', '#friends', '#repost', '#fun', '#style', '#smile', '#nice', '#instalike', '#bro', '#travel', '#likeforlike', '#fitness', '#follow4follow', '#tagsforlikes', '#nofilter', '#life', '#beauty', '#amazing', '#instagram', '#photography', '#sun', '#thegoodlife', '#followforfollow', '#beach', '#sunset', '#fire', '#happy', '#bff', '#loveya', '#bestie', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  };

    var name = data.names[Math.floor(Math.random() * data.names.length)]
    var message = data.messages[Math.floor(Math.random() * data.messages.length)]
    var emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)]
    var hashtag = data.hashtags[Math.floor(Math.random() * data.hashtags.length)]
    return { name: name, message: message + ' ' + emoji + ' ' + hashtag }
}
