<template>
  <div class="appHeader">
    <div class="wrapper">

      <div class="logo">
        <img src="../assets/InstaLogo.png" alt="Logo">
      </div>
      <a href="" class="newNotifications">
        <div class="icon">
          <img src="../assets/icons/likes.png" alt="Likes">
        </div>
        <div class="icon">
          <img src="../assets/icons/comments.png" alt="Comments">
        </div>
        <div class="icon">
          <img src="../assets/icons/follower.png" alt="Follower">
        </div>
      </a>
    </div>
</div>
</template>

<script>

export default {
  name: 'AppHeader',
  data () {
    return {
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
  height: 65px;
  padding-top: 10px;

  .wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

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

        img{
          width: 100%;
        }
      }
    }
  }
}
</style>
