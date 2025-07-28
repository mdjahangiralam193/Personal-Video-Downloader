let currentSource = 'tiktok';
function selectTab(source) {
  currentSource = source;
  document.getElementById('tab-tiktok').classList.toggle('active', source === 'tiktok');
  document.getElementById('tab-instagram').classList.toggle('active', source === 'instagram');
  document.getElementById('tab-facebook').classList.toggle('active', source === 'facebook');
}
function redirectToDownloader() {
  const url = document.getElementById('videoUrl').value.trim();
  if (!url) {
    alert('Please paste a video URL first!');
    return;
  }
  let redirectUrl = '';
  if (currentSource === 'tiktok') {
    if (!url.includes('tiktok.com')) {
      alert('Please enter a valid TikTok URL.');
      return;
    }
    // Trusted TikTok downloader site without ads
    redirectUrl = 'https://snaptik.app/en?url=' + encodeURIComponent(url);
  } else if (currentSource === 'instagram') {
    if (!url.includes('instagram.com')) {
      alert('Please enter a valid Instagram URL.');
      return;
    }
    // Trusted Instagram downloader site without ads
    redirectUrl = 'https://www.instadownloader.co/instagram?url=' + encodeURIComponent(url);
  } else if (currentSource === 'facebook') {
    if (!url.includes('facebook.com')) {
      alert('Please enter a valid Facebook URL.');
      return;
    }
    // Trusted Facebook downloader site without ads
    redirectUrl = 'https://www.getfvid.com/facebook?url=' + encodeURIComponent(url);
  }
  window.open(redirectUrl, '_blank');
}
