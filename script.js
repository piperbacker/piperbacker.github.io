const images = ["IMG_0941.jpg", "IMG_0952.jpg", "IMG_0943.jpg",
    "IMG_0937.jpg", "IMG_0949.jpg", "IMG_0954.jpg"];

function displayIllustrations() {
    const imgLarge = document.getElementById('img-large');
    const imgLargeBG = document.getElementById('img-large-bg');
    imgLargeBG.addEventListener('click', function () {
        document.body.style.overflow = "auto";
        imgLarge.style.display = "none";
        imgLargeBG.style.display = "none";
    });

    const grid = document.getElementById('illustrations-grid');
    for (image of images) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = "img/illustrations/" + image;

        img.role = "button";
        img.addEventListener('click', function () {
            document.body.style.overflow = "hidden";
            const imgLarge = document.getElementById('img-large');
            const imgLargeBG = document.getElementById('img-large-bg');
            imgLarge.src = this.src;
            imgLarge.style.display = "block";
            imgLargeBG.style.display = "block";
            console.log("image click", this.src);
        });

        grid.appendChild(div);
        div.appendChild(img);
    }
}

displayIllustrations();