console.log('SAMTECH ACADEMY Loaded');

const uploadWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'YOUR_CLOUD_NAME',
    uploadPreset: 'samtech_videos',
    resourceType: 'video',
    multiple: false,
    folder: 'samtech-academy/videos'
  },

  (error, result) => {
    if (!error && result && result.event === 'success') {

      console.log('Video Uploaded Successfully');
      console.log(result.info.secure_url);

      alert('Upload Successful');
    }
  }
);

const uploadBtn = document.getElementById('upload_widget');

if(uploadBtn) {
  uploadBtn.addEventListener('click', () => {
    uploadWidget.open();
  });
}

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50) {
    navbar.style.background = 'rgba(2,6,23,0.95)';
  }

  else {
    navbar.style.background = 'rgba(2,6,23,0.8)';
  }
});