<template>
  <div class="appHeader">
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/icons/logo-instantfame.svg" alt="Logo">
      </div>
      <a href="#" @click="contentIsActive('notifications')" class="newNotifications">
        <img class="icon" src="../assets/icons/likes.png" alt="Likes"/><span class="notificationCount">{{ newLikes }}</span><img class="icon" src="../assets/icons/comments.png" alt="Comments"/><span class="notificationCount">{{ newComments }}</span><img class="icon" src="../assets/icons/follower.png" alt="Follower"/><span class="notificationCount">{{ newFollowers }}</span>
      </a>
    </div>
</div>
</template>

<script>

export default {
  name: 'AppHeader',
  props: ["newLikes", "newComments", "newFollowers"],
  data () {
    return {
    }
  },
  methods: {
    contentIsActive(link) {
      this.$emit("headerClicked",link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/basics';

.appHeader{
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  padding: 12px 0;
  padding-bottom: 8px;
  position: fixed;
  top: 0;
  width: 100%;

  .wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    width: 100%;
    margin: auto;

    .logo{
      img{
        width: 150px;
      }
    }

    .newNotifications{
      .icon{
        display: inline-block;
        width: 30px;
        padding-left: 20px;
        }
      }
      span.notificationCount {
        position: absolute;
        color: white;
        font-size: 12px;
        font-weight: bold;
        padding: 2px 6px;
        margin: 15px 0px 0px -15px;
        display: inline-block;
        border-radius: 20px;
        background-color: #FF4848;
      }
    }
  }
</style>
