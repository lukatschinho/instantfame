<template>
  <div class="post">
    <div class="poster">
      <div class="avatar" alt="avatar"></div>
      <p class="name">{{ name }}</p>
    </div>
    <img class="postImage" :src="photo" alt="image">
    <div class="stats">
      <img :src="require('../assets/icons/' + likeIcon)" alt="like" @click="addLike()">
      <img src="../assets/icons/comments.png" alt="comment">
      <p class="likeCount"><span>{{ likeCount }}</span> liked this,</p>
      <p class="commentCount"><span>{{ commentCount }}</span> commented</p>
    </div>
    <p class="description">{{ description }}</p>
    <div class="comments" v-for="(comment, index) in postComments">
      <Comment :author="comment.name" :text="comment.message"/>
    </div>
    <div class="addComment">
      <input type="text" name="addComment" placeholder="Add a comment..." @keyup.13="addComment" v-model="commentText">
    </div>
  </div>
</template>

<script>
import Comment from './Comment'
import botComment from '../lib/BotComment'

export default {
  name: 'Post',
  components: {
    Comment
  },
  props: ["description", "photo"],
  data () {
    return {
      name: 'Vorname Nachname',
      avatar_src: '../assets/trump.jpg',
      likeIcon: 'likes.png',
      img_src: '',
      likeCount: 0,
      commentCount: 0,
      liked: false,
      commentText: "",
      postComments: [],
      botComments: [{author: "Hans Wurst", text: "Nice work! #coulddoitevenbetter"}, {author: "Thorsten Höfler", text: "great! #wow"}],
      commentNumber: 4,
      commentCount: 0
    }
  },
  computed: {
    likeIconSource: () => {
    }
  },
  methods: {
    addLike() {
      if(this.liked === false) {
        this.likeCount++;
        this.liked = true;
        this.likeIcon = 'likesNew.png';
      }
      else {
        this.likeCount--;
        this.liked = false;
        this.likeIcon = 'likes.png';
      }
    },
    addComment() {
      this.postComments.push({name: "Mein Name", message: this.commentText});
      this.commentCount++;
      this.commentText = "";
    },
    postBotComment() {
      const c = botComment();
      this.postComments.push(c);
      console.log(this.postComments);
      if(this.commentCount < this.commentNumber) {
        this.commentCount++;
        setTimeout(() => {
           this.postBotComment();
         }, Math.floor(Math.random()*10+5)*1000);
      }
      else {
        this.commentNumber += 3;
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.postBotComment();
    }, 5000);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post {
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,.0975);
  margin-bottom: 50px;
  background-color: #fff;

  .poster {
    display: flex;
    justify-content: flex-start;
    margin: 15px;

    .avatar {
      background-image: url("../assets/trump.jpg");
      background-size: cover;
      background-position: center;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin-right: 20px;
    }
  }

  img.postImage {
    width: 100%;
  }

  p.description {
    text-align: left;
    margin: 15px;
  }

  .stats {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 15px;

    img {
      width: 30px;
      margin-right: 10px;
      cursor: pointer;
    }
    p {
      margin: 0 10px 0 0;
      vertical-align: middle;

      span {
        font-weight: bold;
      }
    }
  }

  .addComment {
    margin: 15px;
    padding-top: 10px;
    border-top: 1px solid rgba(0,0,0,.0975);

    input {
      width: 100%;
      height: 30px;
      border: none;
    }
  }
}

</style>
