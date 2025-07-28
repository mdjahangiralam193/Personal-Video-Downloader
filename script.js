let currentSource = 'tiktok';
function selectTab(src) {
  currentSource = src;
  document.getElementById('tab-tiktok').classList.toggle('active', src==='tiktok');
  document.getElementById('tab-instagram').classList.toggle('active', src==='instagram');
  document.getElementById('tab-facebook').classList.toggle('active', src==='facebook');
  document.getElementById('result').classList.add('hidden');
  document.getElementById('videoUrl').value = '';
}
function downloadVideo(){
  const url = document.getElementById('videoUrl').value.trim();
  const resultBox = document.getElementById('result');
  const link = document.getElementById('downloadLink');
  resultBox.classList.add('hidden');
  if(currentSource==='tiktok' && url.includes('tiktok.com')) {
    const apiEndpoint = `https://api.snaptik.app/redirect?url=${encodeURIComponent(url)}`;
    // Directly link the API redirect link
    link.href = apiEndpoint;
    resultBox.classList.remove('hidden');
  } else if(currentSource==='instagram' && url.includes('instagram.com')) {
    alert('Instagram downloader API integration needed.');
  } else if(currentSource==='facebook' && url.includes('facebook.com')) {
    alert('Facebook downloader API integration needed.');
  } else {
    alert('Invalid URL for selected source');
  }
}
