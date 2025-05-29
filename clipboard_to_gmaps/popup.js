document.getElementById("btn").addEventListener("click", () => {
  navigator.clipboard.readText().then(text => {
    const match = text.match(/([+-]?\d+\.\d+)[,\s]+([+-]?\d+\.\d+)/);
    if (match) {
      const lat = match[1];
      const lon = match[2];
      const url = `https://www.google.com/maps?q=${lat},${lon}`;
      chrome.tabs.create({ url: url });
    } else {
      alert("緯度経度が見つかりませんでした");
    }
  });
});
