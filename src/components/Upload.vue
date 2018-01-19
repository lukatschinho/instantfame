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
			<input type="file" name="image" class="img" data-file @change="previewPhoto()">
      <!-- <input type="file" id="post-photo" data-photo accept="image/*" capture="camera" @change="previewPhoto()"> -->
		</div>
		<!-- button to submit the new post-->
		<button type="button" @click="savePost(), getPost()">Post</button>
	</form>
	<div class="imagePreview" data-preview></div>
	<div data-post-results></div>
</div>

</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
			postTitle: '',
			postDesc: '',
			postPhoto: ''
    }
  },

	methods: {
		previewPhoto() {
			let preview = document.querySelectorAll('[data-preview]');
			let file = document.querySelector('input[type=file]').files[0];
			let reader  = new FileReader();

			reader.addEventListener("load", () => {
				// change preview background image
				preview[0].style.backgroundImage = 'url(' + reader.result + ')';
				// save base64 code in postPhoto data variable
				this.postPhoto = reader.result;
			}, false);

			if (file) {
				reader.readAsDataURL(file);
			}
		},

  	savePost() {
			// create new post object
			let post = {
				title: this.postTitle,
				description: this.postDesc,
				photo: this.postPhoto
			}

			//console.log(post);
			
			// test if the local storage with the key 'posts' is empty
			if(localStorage.getItem('posts') === null) {
				// init array
				let posts = [];
				// add post object to array
				posts.push(post);
				// parse array of objects to string and set to local storage
				localStorage.setItem('posts', JSON.stringify(posts));
			} else {
				// get posts from local storage and parse to JSON
				let posts = JSON.parse(localStorage.getItem('posts'));
				// add post to array
				posts.push(post);
				// re-set back to local storage
				localStorage.setItem('posts', JSON.stringify(posts));
			}
		},
		
		getPost() {
			console.log('getPost');
			let posts = JSON.parse(localStorage.getItem('posts'));

			// get output id
			let postResults = document.querySelectorAll('[data-post-results]');
			// build output
			postResults.innerHTML = '';

			// get information out of localStorage post object
			for(var i=0; i < posts.length; i++) {
				var title = posts[i].title;
				var desc = posts[i].description;
				var photo = posts[i].photo;

				postResults.innerHTML += '<div>' +
																		'<p>' + title + '</p>' +
																		'<p>' + desc + '</p>' +
																	'</div>';
			}
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.saveForm {
	padding: 50px 0 20px 0;
	.form-group {
		padding: 20px 0;
	}
}

.imagePreview {
	width: 200px;
	height: 200px;
	background-position: center center;
	background-size: cover;
	border: 1px solid #000;
	display: inline-block;
}

</style>
