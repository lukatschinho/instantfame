<template>

<!-- Upload -->
<div class="upload">
	<form class="saveForm" data-save-form>
  	<div class="form-group">
			<!-- title of the new post-->
			<label for="post-title">title</label>
			<input type="text" id="post-title" v-model="postTitle">
		</div>
		<!-- description of the new post-->
		<div class="form-group">
			<label for="post-desc">description</label>
			<input type="text" id="post-desc" v-model="postDesc">
		</div>
		<!-- photo for the new post-->
		<div class="form-group">
			<label for="post-photo">photo upload</label>
      <input type="file" id="post-photo" data-photo accept="image/*" capture="camera">
		</div>
		<!-- button to submit the new post-->
		<button type="button" @click="savePost()">Post</button>
	</form>
</div>

</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
			postTitle: '',
			postDesc: ''
    }
  },
	methods: {
  	savePost() {
    	console.log(this.postTitle + " und " + this.postDesc);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.saveForm {
	padding: 50px 0;
	.form-group {
		padding: 20px 0;
	}
}
</style>
