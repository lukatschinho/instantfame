<template>

<!-- Upload -->
<div class="upload">
	<h1>Upload Photo</h1>
	<form class="saveForm" data-save-form>
		<!-- description of the new post-->
		<div class="form-group">
			<label for="post-desc">Description</label>
			<input type="text" id="post-desc" v-model="postDesc">
		</div>
		<!-- photo for the new post-->
		<div class="form-group">
			<input type="file" name="image" class="img" data-file @change="previewPhoto()">
		</div>
		<!-- button to submit the new post-->
		<button class="button" type="button" @click="savePost(), getPost(), contentIsActive('feed')">Post</button>
	</form>
	<!--<div class="imagePreview" data-preview></div>-->
	<canvas class="preview-canvas" id="preview-canvas" :width="canvasSize" :height="canvasSize"></canvas>
</div>

</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
			canvasSize: 800,
			postTitle: '',
			postDesc: '',
			postPhoto: ''
    }
  },

	methods: {
    contentIsActive(link) {
      this.$emit("uploadClicked",link)
    },
		previewPhoto() {
			let file = document.querySelector('input[type=file]').files[0];
			let reader  = new FileReader();
			let canvas = document.getElementById("preview-canvas");
			let ctx = canvas.getContext("2d");

			if (file) {
				reader.readAsDataURL(file);
			}

			// draw canvas image
			reader.addEventListener("load", () => {
				let img = new Image();
				img.src = reader.result;

				img.onload = () => {
					// original image width and height
					const imgW = img.width;
					const imgH = img.height;

					// canvas size
					const canvasW = this.canvasSize;

					// smaller side of image
					const minP = Math.min(imgW, imgH);

					// coordinations of the cropped version
					const x = (imgW-minP)/2;
					const y = (imgH-minP)/2;

					//draw image in canvas and save in data
					ctx.drawImage(img, x, y, minP, minP, 0, 0, canvasW, canvasW);
					this.postPhoto = canvas.toDataURL('image/jpeg', 0.9);
				};
			}, false);
		},


		// save new post in local storage
  		savePost() {
			// create new post object
			let post = {
				description: this.postDesc,
				photo: this.postPhoto
			}

			// validation
			if(!post.description || !post.photo) {
				alert('Please add your photo and description');
				return false;
			}

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

			//reset input field
			this.postDesc = '';
		},
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.saveForm {
	padding: 0 0 20px 0;
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

.preview-canvas {
	background-color: #FFFFFF;
}

.form-group {
	input {
		padding: 8px;
	}
	label {
		margin-right: 8px;
	}
}

.button {
	background: #62CA30;
	border: 0;
	padding: 16px;
	min-width: 256px;
	color: white;
	font-weight: bold;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

</style>
