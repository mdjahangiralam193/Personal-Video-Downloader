let currentSource = 'tiktok';

function selectTab(src) {
  currentSource = src;
  document.getElementById('tab-tiktok').classList.toggle('active', src==='tiktok');
  document.getElementById('tab-instagram').classList.toggle('active', src==='instagram');
  document.getElementById('tab-facebook').classList.toggle('active', src==='facebook');
  document.getElementById('linksArea').innerHTML = '';
  document.getElementById('videoUrl').value = '';
}

function showLinks() {
  const url = document.getElementById('videoUrl').value.trim();
  const linksArea = document.getElementById('linksArea');
  linksArea.innerHTML = '';
  if (!url) {
    alert('Please paste a video URL first!');
    return;
  }

  let valid = false;
  let links = [];

  if (currentSource === 'tiktok' && url.includes('tiktok.com')) {
    valid = true;
    links.push({
      name: 'SnapTik (No watermark)',
      url: 'https://snaptik.app/en?url=' + encodeURIComponent(url)
    });
    links.push({
      name: 'ExpertsPHP TikTok Downloader',
      url: 'https://www.expertsphp.com/tiktok-video-downloader?url=' + encodeURIComponent(url)
    });
  } else if (currentSource === 'instagram' && url.includes('instagram.com')) {
    valid = true;
    links.push({
      name: 'InstaDownloader',
      url: 'https://www.instadownloader.co/instagram?url=' + encodeURIComponent(url)
    });
    links.push({
      name: 'DownloadGram',
      url: 'https://downloadgram.org/' // Note: URL input not possible, user must paste manually
    });
  } else if (currentSource === 'facebook' && url.includes('facebook.com')) {
    valid = true;
    links.push({
      name: 'Getfvid Facebook Downloader',
      url: 'https://www.getfvid.com/facebook?url=' + encodeURIComponent(url)
    });
    links.push({
      name: 'FbDown.net',
      url: 'https://fbdown.net/' // Note: URL input not possible, user must paste manually
    });
  }

  if (!valid) {
    alert('Please enter a valid URL for the selected source.');
    return;
  }

  // Display links
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.className = 'download-link';
    a.textContent = link.name;
    linksArea.appendChild(a);
  });
}
