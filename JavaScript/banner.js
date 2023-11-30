function ChangeBg() {
  const images = [`url("image/img6.png")`, `url("image/img3.png")`];
  const banner = document.getElementsByClassName("banner")[0];
  const bg = images[Math.floor(Math.random() * images.length)];
  banner.style.backgroundImage = bg;
}
setInterval(ChangeBg, 2500);
