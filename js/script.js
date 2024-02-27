const images = ["IMG_0941.jpg", "IMG_0952.jpg", "IMG_0943.jpg",
    "IMG_0937.jpg", "IMG_0949.jpg", "IMG_0954.jpg"];

function enlargeImage(src, img, bg) {
    document.body.style.overflow = "hidden";
    img.src = src;
    img.style.display = "block";
    bg.style.display = "block";
}

function closeEnlargedImage(img, bg) {
    document.body.style.overflow = "auto";
    img.style.display = "none";
    bg.style.display = "none";
}

function displayIllustrations() {
    const imgLarge = document.getElementById('img-large');
    const imgLargeBG = document.getElementById('img-large-bg');
    imgLargeBG.addEventListener('click', function () { closeEnlargedImage(imgLarge, imgLargeBG) });

    const grid = document.getElementById('illustrations-grid');
    for (image of images) {
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = "img/illustrations/" + image;
        img.role = "button";
        img.addEventListener('click', function () { enlargeImage(this.src, imgLarge, imgLargeBG) });
        grid.appendChild(imgDiv);
        imgDiv.appendChild(img);
    }
}

displayIllustrations();