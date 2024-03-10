const images = ["IMG_0941.jpg", "IMG_0952.jpg", "IMG_0943.jpg",
    "IMG_0937.jpg", "IMG_0949.jpg", "IMG_0954.jpg"];

const logoSvg = `<svg class="logo" width="100%" height="100%" viewBox="0 0 167 250" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                <g transform="matrix(2.08333,0,0,2.08333,-1166.67,-166.667)">
                    <path
                        d="M600,200C604.873,167.02 616.616,144.579 640,140C616.212,130.637 604.532,108.748 600,80C593.237,111.416 581.125,134.973 560,140C588.229,150.798 596.985,173.452 600,200Z"
                        style="fill:rgb(243,102,139);" />
                </g>
                </svg>`

const dribbble = {
    link: "https://dribbble.com/piperb53",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-dribbble" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
            </svg>`
}

const github = {
    link: "https://github.com/piperbacker",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github"
                viewBox="0 0 16 16">
                <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>`
}

const linkedin = {
    link: "https://www.linkedin.com/in/piperbacker",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-linkedin" viewBox="0 0 16 16">
                <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>`
}

const socials = [dribbble, github, linkedin];

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
    for (let image of images) {
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = "img/illustrations/" + image;
        img.role = "button";
        img.addEventListener('click', function () { enlargeImage(this.src, imgLarge, imgLargeBG) });
        grid.appendChild(imgDiv);
        imgDiv.appendChild(img);
    }
}

function displayHomeHeader() {
    let navBarItems = [];

    const logo = document.createElement('a');
    logo.href = '#intro'

    logo.classList.add('logo-link');
    logo.innerHTML = logoSvg;
    navBarItems.push(logo);

    const projects = document.createElement('a');
    projects.href = '#projects';
    projects.textContent = 'Projects'
    navBarItems.push(projects);

    const illustrations = document.createElement('a');
    illustrations.href = '#illustrations';
    illustrations.textContent = 'Illustrations'
    navBarItems.push(illustrations);

    const about = document.createElement('a');
    about.href = '#about';
    about.textContent = 'About'
    navBarItems.push(about);

    displayHeader(navBarItems);
}

function displayProjectHeader() {
    let navBarItems = [];

    const logo = document.createElement('a');
    logo.href = '/index.html#intro'

    logo.classList.add('logo-link');
    logo.innerHTML = logoSvg;
    navBarItems.push(logo);

    const projects = document.createElement('a');
    projects.href = '/index.html#projects';
    projects.textContent = 'Projects'
    navBarItems.push(projects);

    const illustrations = document.createElement('a');
    illustrations.href = '/index.html#illustrations';
    illustrations.textContent = 'Illustrations'
    navBarItems.push(illustrations);

    const about = document.createElement('a');
    about.href = '/index.html#about';
    about.textContent = 'About'
    navBarItems.push(about);

    displayHeader(navBarItems);
}

function displayHeader(navBarItems) {
    const nav = document.getElementById('nav');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    nav.appendChild(navBar);

    for (let item of navBarItems) {
        navBar.appendChild(item)
    }

    const socialsBar = document.createElement('div');
    socialsBar.classList.add('socials-bar');
    nav.appendChild(socialsBar);

    for (let social of socials) {
        const link = document.createElement('a');
        link.href = social.link;
        link.target = "blank";
        link.innerHTML = social.icon;
        socialsBar.appendChild(link);
    }
}

function displayFooter() {
    const message = `Designed and developed by Piper Backer • 2024`;

    const footer = document.getElementById('footer');
    const socialsBar = document.createElement('div');
    socialsBar.classList.add('socials-bar');
    footer.appendChild(socialsBar);

    for (let social of socials) {
        const link = document.createElement('a');
        link.href = social.link;
        link.target = "blank";
        link.innerHTML = social.icon;
        socialsBar.appendChild(link);
    }

    const msg = document.createElement('span');
    msg.textContent = message;
    footer.appendChild(msg);
}