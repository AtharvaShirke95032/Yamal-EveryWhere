const yamalImages = [
  "https://www.aljazeera.com/wp-content/uploads/2025/05/GettyImages-2212198878-1746079823.jpg?resize=770%2C513&quality=80",
  "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1127%2Fr1420359_1296x729_16%2D9.jpg",
  "https://www.aljazeera.com/wp-content/uploads/2025/05/2025-05-27T190443Z_1774334985_RC206EAH2SSW_RTRMADP_3_SOCCER-SPAIN-BAR-1748385462.jpg?resize=1920%2C1080",
  "https://dims.apnews.com/dims4/default/c9de230/2147483647/strip/true/crop/3240x2160+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3e05f47a43eb4610ac9c7f9bfdc3c3f5",
  "https://assets.goal.com/images/v3/blt6bbac3da0c48f89b/Lamine%20Yamal%202024.jpg?auto=webp&format=pjpg&width=3840&quality=60",
  "https://cdn.dailysports.net/dailysports/20250515/d8d46c593491443ea44be52b2a8272cbcbadf2974683bba57a97d4fa748cfdc9.jpg"
];

function getRandomYamal() {
  return yamalImages[Math.floor(Math.random() * yamalImages.length)];
}

function replaceImagesAndHeadings() {

  document.querySelectorAll("h2").forEach(h2 => {
    h2.textContent = "Lamine Yamal";
  });


  document.querySelectorAll("img").forEach(img => {
    if (img.dataset.yamalReplaced === "true") return;

    const width = img.clientWidth;
    const height = img.clientHeight;

    if (width < 50 || height < 50) return;

    img.src = getRandomYamal();
    img.removeAttribute("srcset");
    img.alt = "Lamine Yamal";
    img.dataset.yamalReplaced = "true";
  });


  document.querySelectorAll("*").forEach(el => {
    const bg = getComputedStyle(el).backgroundImage;
    const width = el.clientWidth;
    const height = el.clientHeight;

    if (
      bg.includes("url(") &&
      !el.dataset.yamalReplaced &&
      width >= 50 &&
      height >= 50
    ) {
      el.style.backgroundImage = `url("${getRandomYamal()}")`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.dataset.yamalReplaced = "true";
    }
  });
}


replaceImagesAndHeadings();

setInterval(() => {
  try {
    replaceImagesAndHeadings();
  } catch (err) {
    if (err.message.includes("Extension context invalidated")) return;
    console.error("Error in extension:", err);
  }
}, 1000);
