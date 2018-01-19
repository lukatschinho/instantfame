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
      <input type="file" id="post-photo" data-photo accept="image/*" capture="camera" @change="previewPhoto()">
		</div>
		<!-- button to submit the new post-->
		<button type="button" @click="savePost()">Post</button>
	</form>
	<div data-preview></div>
</div>

</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
			postTitle: '',
			postDesc: '',
    }
  },
	methods: {
		previewPhoto() {
			console.log('change');
			var files = !!this.files ? this.files : [];
			// no file selected, or no FileReader support
			if (!files.length || !window.FileReader) return;

			// only image file
			if (/^image/.test(files[0].type)) {
				// instance of the FileReader
				var reader = new FileReader(); 
				// read the local file
				reader.readAsDataURL(files[0]);
				/*
				// set image data as background of div
				reader.onloadend = function() {
					$("#imagePreview").css("background-image", "url(" + this.result + ")");
				}*/
			}
		},

  	savePost() {
			// create new post object
			var post = {
				title: this.postTitle,
				description: this.postDesc
			}

			console.log(post);
			
			// test if the local storage with the key 'posts' is empty
			if(localStorage.getItem('posts') === null) {
				// init array
				var posts = [];
				// add post object to array
				posts.push(post);
				// parse array of objects to string and set to local storage
				localStorage.setItem('posts', JSON.stringify(posts));
			} else {
				// get posts from local storage and parse to JSON
				var posts = JSON.parse(localStorage.getItem('posts'));
				// add post to array
				posts.push(post);
				// re-set back to local storage
				localStorage.setItem('posts', JSON.stringify(posts));
			}
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
