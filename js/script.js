const images = [
    { link: "IMG_0941.jpg", caption: "Koi. Graphite, ink, marker" },
    { link: "IMG_6192.jpg", caption: "Shining. Gouache, colored pencil, gold leaf" },
    // { link: "IMG_0952.jpg", caption: "Interstellar rodeo. Marker, ink" },
    { link: "IMG_0943.jpg", caption: "Train to nowhere. Marker, ink" },
    { link: "IMG_0937.jpg", caption: "Finding the right path. Colored pencil, marker, ink" },
    { link: "IMG_0949.jpg", caption: "The dragon. Gouache, ink" },
    // { link: "IMG_8385.jpg", caption: "Good things are happening every day. Acrylics, glitter" },
    { link: "IMG_0954.jpg", caption: "14.07. Marker, ink" }
];

const logoSvg = `<svg class="logo" width="100%" height="100%" viewBox="0 0 167 250" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                  <g transform="matrix(2.08333,0,0,2.08333,-1166.67,-166.667)">
                      <path
                          d="M600,200C604.873,167.02 616.616,144.579 640,140C616.212,130.637 604.532,108.748 600,80C593.237,111.416 581.125,134.973 560,140C588.229,150.798 596.985,173.452 600,200Z"
                          style="fill:rgb(243,102,139);" />
                  </g>
                </svg>`;

const socials = [
    {
        link: "https://github.com/piperbacker",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
           </svg>`
    },
    {
        link: "https://www.linkedin.com/in/piperbacker",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-linkedin" viewBox="0 0 16 16">
                <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>`
    }
];

function createSocialLinks(container) {
    socials.forEach(({ link, icon }) => {
        const a = document.createElement('a');
        a.href = link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = icon;
        container.appendChild(a);
    });
}

function enlargeImage(src, largeImage, background, caption, captionText) {
    document.body.style.overflow = "hidden";
    largeImage.src = src;
    caption.textContent = captionText;
    largeImage.style.display = "block";
    background.style.display = "block";
    caption.style.display = "block";
}

function closeEnlargedImage(largeImage, background, caption) {
    document.body.style.overflow = "auto";
    largeImage.style.display = "none";
    background.style.display = "none";
    caption.style.display = "none";
}

function displayIllustrations() {
    const imgLarge = document.getElementById('img-large');
    const imgLargeBG = document.getElementById('img-large-bg');
    const imgLargeCaption = document.getElementById('img-large-caption');

    imgLargeBG.addEventListener('click', () => closeEnlargedImage(imgLarge, imgLargeBG, imgLargeCaption));

    const grid = document.getElementById('illustrations-grid');

    images.forEach(image => {
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');

        img.src = `img/illustrations/${image.link}`;
        img.role = "button";
        img.alt = image.caption;

        img.addEventListener('click', () => enlargeImage(img.src, imgLarge, imgLargeBG, imgLargeCaption, image.caption));

        imgDiv.appendChild(img);
        grid.appendChild(imgDiv);
    });
}

function createNavLink(href, text) {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    return a;
}

function displayHeader(navBarItems) {
    const nav = document.getElementById('nav');
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    navBarItems.forEach(item => navBar.appendChild(item));
    nav.appendChild(navBar);

    const socialsBar = document.createElement('div');
    socialsBar.classList.add('socials-bar');
    createSocialLinks(socialsBar);
    nav.appendChild(socialsBar);
}

function generateHeaderItems(basePath = '') {
    const logo = document.createElement('a');
    logo.href = `${basePath}#intro`;
    logo.classList.add('logo-link');
    logo.innerHTML = logoSvg;

    const projects = document.createElement('div');
    projects.classList.add('nav-item', 'has-submenu');

    const projectsLink = document.createElement('a');
    projectsLink.href = `${basePath}#projects`;
    projectsLink.textContent = 'Projects';

    const submenu = document.createElement('div');
    submenu.classList.add('submenu');

    const submenuItems = [
        { href: 'https://github.com/piperbacker/toodoo-chrome-ext', text: 'Todoo Extension', external: true },
        { href: 'https://github.com/piperbacker/piperbacker.github.io', text: 'Portfolio Site', external: true },
        { href: `${basePath}projects/blog`, text: 'Blog Refresh', external: false },
    ];

    submenuItems.forEach(({ href, text, external }) => {
        const submenuLink = document.createElement('a');
        submenuLink.href = href;
        submenuLink.textContent = text;
        if (external) {
            submenuLink.target = '_blank';
            submenuLink.rel = 'noopener noreferrer';
        }
        submenu.appendChild(submenuLink);
    });

    projects.appendChild(projectsLink);
    projects.appendChild(submenu);

    const illustrations = createNavLink(`${basePath}#illustrations`, 'Illustrations');
    const about = createNavLink(`${basePath}#about`, 'About');

    return [logo, projects, illustrations, about];
}


function displayHomeHeader() {
    const navBarItems = generateHeaderItems();
    displayHeader(navBarItems);
}

function displayProjectHeader() {
    const navBarItems = generateHeaderItems('/index.html');
    displayHeader(navBarItems);
}

function displayMobileHeader() {
    const mobileNav = document.getElementById('mobile-nav');
    const navBtn = document.createElement('button');
    navBtn.textContent = '=';
    mobileNav.appendChild(navBtn);

    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar', 'mobile-nav-bar');
    navBar.style.display = 'none';
    mobileNav.appendChild(navBar);

    const links = [
        { href: '#intro', text: 'Home' },
        { href: '#projects', text: 'Projects' },
        { href: '#illustrations', text: 'Illustrations' },
        { href: '#about', text: 'About' }
    ];

    links.forEach(({ href, text }) => {
        const a = createNavLink(href, text);
        navBar.appendChild(a);
    });

    navBtn.addEventListener('click', () => {
        navBar.classList.toggle('visible');
    });
}

function displayFooter() {
    const footer = document.getElementById('footer');
    const socialsBar = document.createElement('div');
    socialsBar.classList.add('socials-bar');

    createSocialLinks(socialsBar);
    footer.appendChild(socialsBar);

    const msg = document.createElement('span');
    msg.textContent = 'Designed and developed by Piper Backer • 2025';
    footer.appendChild(msg);
}
