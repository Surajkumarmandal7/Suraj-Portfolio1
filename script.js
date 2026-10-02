// ================================
// PERSONAL INFORMATION CONFIGURATION
// ================================
const PERSONAL_INFO = {
    name: "Suraj Kumar Mandal",
    email: "surajmandal20042004@gmail.com",
    phone: "+91 6206897915",
    college: "Government Engineering College, Palamu",
    degree: "B.Tech Electrical Engineering (2023–2027)",
    linkedin: "https://www.linkedin.com/in/suraj-kumar-mandal-in",
    github: "[ADD GITHUB LINK]",
    leetcode: "[ADD LEETCODE LINK]",
    resumePath: "assests/Resume photo new.jpeg",
    profileImage: "assests/profile.jpeg"
};

// Initialize Lucide Icons
lucide.createIcons();

// Custom Cursor Logic
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.transform = `translate(${posX - 3}px, ${posY - 3}px)`;
    cursorRing.style.transform = `translate(${posX - 18}px, ${posY - 18}px)`;
});

document.querySelectorAll('a, button, [onclick], input').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.borderColor = 'var(--neon-cyan)';
    });
    el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'rgba(34, 211, 238, 0.4)';
    });
});

// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Command Palette (Ctrl + K or /)
const cmdPalette = document.getElementById('command-palette');
const cmdInput = document.getElementById('command-input');

window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
        e.preventDefault();
        cmdPalette.classList.remove('hidden');
        cmdInput.focus();
    }
    if (e.key === 'Escape') {
        cmdPalette.classList.add('hidden');
        document.getElementById('exp-modal').classList.add('hidden');
        document.getElementById('case-study-modal').classList.add('hidden');
        document.getElementById('resume-modal').classList.add('hidden');
        document.getElementById('lightbox-modal').classList.add('hidden');
    }
});

cmdPalette.addEventListener('click', (e) => {
    if (e.target === cmdPalette) cmdPalette.classList.add('hidden');
});

document.querySelectorAll('.cmd-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        cmdPalette.classList.add('hidden');
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth Scroll Helper
function scrollToSection(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

// Education Accordion
function toggleEdu(element) {
    const desc = element.querySelector('div:last-child');
    desc.classList.toggle('hidden');
}

// Experience Modal / Side Drawer Data
const experienceData = {
    sail: {
        org: "Steel Authority of India Limited (SAIL)",
        title: "Industrial Electrical Trainee",
        duration: "May 2026 – July 2026",
        location: "SAIL Bokaro Steel Plant",
        whatIDid: "Completed 8-week practical training in an industrial steel-plant environment. Observed different plant departments and gained exposure to steel manufacturing processes and heavy industrial operations.",
        whatILearned: "Practical operational insight into industrial electrical systems, motor control operations, and high-capacity electrical distribution.",
        img: "assests/certificate sail.jpeg"
    },
    jharkhand: {
        org: "Department of Higher & Technical Education, Govt. of Jharkhand",
        title: "Jharkhand Grassroots Innovation Intern",
        duration: "June 2026 – July 2026",
        location: "Jharkhand, India",
        whatIDid: "Worked on identifying and documenting community-owned knowledge, traditional practices, and grassroots innovations through fieldwork.",
        whatILearned: "Enhanced field documentation, technical observation, and community coordination skills.",
        img: "assests/certificate grassroot1.jpeg"
    },
    bit: {
        org: "B.I.T. Sindri, Jharkhand",
        title: "Control System Engineering Intern",
        duration: "June 2025 – July 2025",
        location: "Electrical Engineering Department",
        whatIDid: "Completed 6-week hands-on training in Control System Engineering under the Electrical Engineering Department.",
        whatILearned: "Practical exposure to fundamental control-system concepts, feedback loops, and automated instrumentation applications.",
        img: "assests/certificate bit.jpeg"
    },
    bccl: {
        org: "Bharat Coking Coal Limited (BCCL)",
        title: "Substation Trainee",
        duration: "4 Weeks",
        location: "Koyla Nagar, Dhanbad",
        whatIDid: "Completed four-week vocational training with direct operational exposure to a 33 kV substation and power-system environment.",
        whatILearned: "High-voltage distribution safety protocols, transformer management, and substation grid operations.",
        img: "assests/certificate bccl.jpeg"
    }
};

function openExpModal(key) {
    const data = experienceData[key];
    const modal = document.getElementById('exp-modal');
    const content = document.getElementById('exp-modal-content');

    content.innerHTML = `
        <div class="flex justify-between items-center border-b border-subtle pb-4">
            <span class="font-mono text-xs text-cyan">${data.org}</span>
            <button onclick="closeExpModal()" class="p-2 rounded-full bg-subtle text-white hover:bg-cyan hover:text-deep transition-all">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>
        <div class="space-y-4">
            <h2 class="text-2xl font-bold text-white">${data.title}</h2>
            <div class="flex flex-wrap gap-4 font-mono text-xs text-gray-400">
                <span>⏱ ${data.duration}</span>
                <span>📍 ${data.location}</span>
            </div>
        </div>
        <div class="h-100 rounded-3xl overflow-hidden border border-subtle">
            <img src="${data.img}" alt="${data.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\' viewBox=\'0 0 400 200\'><rect width=\'400\' height=\'200\' fill=\'%230d1322\'/><text x=\'50%\' y=\'50%\' dominant-baseline=\'middle\' text-anchor=\'middle\' fill=\'%2322d3ee\' font-family=\'monospace\' font-size=\'12\'>${data.img}</text></svg>';">
        </div>
        <div class="space-y-6 font-mono text-sm">
            <div class="space-y-2">
                <h4 class="text-cyan font-bold uppercase text-xs">// What I Did</h4>
                <p class="text-gray-300 leading-relaxed">${data.whatIDid}</p>
            </div>
            <div class="space-y-2">
                <h4 class="text-emerald font-bold uppercase text-xs">// What I Learned</h4>
                <p class="text-gray-300 leading-relaxed">${data.whatILearned}</p>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    lucide.createIcons();
}

function closeExpModal() {
    document.getElementById('exp-modal').classList.add('hidden');
}

// Case Study Modal
function openCaseStudyModal() {
    document.getElementById('case-study-modal').classList.remove('hidden');
}
function closeCaseStudyModal() {
    document.getElementById('case-study-modal').classList.add('hidden');
}

// Resume Modal
function openResumeModal() {
    document.getElementById('resume-modal').classList.remove('hidden');
}
function closeResumeModal() {
    document.getElementById('resume-modal').classList.add('hidden');
}

// Certificate Modal Viewer
function openCertModal(path) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const desc = document.getElementById('lightbox-desc');

    img.src = path;
    title.textContent = "Verified Certificate";
    desc.textContent = "Official achievement credential";
    modal.classList.remove('hidden');
}

// Lightbox Gallery System
const galleryImages = [
    { src: 'assets/photo1.jpg', title: 'College Campus', desc: 'Government Engineering College, Palamu' },
    { src: 'assets/photo2.jpg', title: 'Industrial Visit', desc: 'SAIL Bokaro Steel Plant Operations' },
    { src: 'assets/photo3.jpg', title: 'Control Systems Lab', desc: 'B.I.T. Sindri Training' },
    { src: 'assets/photo4.jpg', title: 'Substation Fieldwork', desc: 'BCCL 33 kV Substation' },
    { src: 'assets/photo5.jpg', title: 'NSS Club Activity', desc: 'Community Outreach & Coordination' },
    { src: 'assets/photo6.jpg', title: 'Technical Workshop', desc: 'Balakaakar Exhibition' }
];
let currentLightboxIndex = 0;

function openLightbox(src, title, desc) {
    currentLightboxIndex = galleryImages.findIndex(img => img.src === src);
    if (currentLightboxIndex === -1) currentLightboxIndex = 0;
    updateLightboxContent();
    document.getElementById('lightbox-modal').classList.remove('hidden');
}

function updateLightboxContent() {
    const item = galleryImages[currentLightboxIndex];
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');

    img.src = item.src;
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;
}

function closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxContent();
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    updateLightboxContent();
}

window.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox-modal').classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
    }
});
/* =========================================================
   PREMIUM HERO — 3D PARALLAX + PHOTO VIEWER
   ========================================================= */

(function () {

    const hero = document.getElementById("home");
    const visual = document.getElementById("heroVisual");

    if (!hero || !visual) return;

    const frame = visual.querySelector(".hero-frame");
    const photo = visual.querySelector(".hero-profile-popout");
    const floats = visual.querySelectorAll("[data-depth]");

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    let animationFrame = null;

    function animateHero() {

        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;

        const rotateY = currentX * 4;
        const rotateX = -currentY * 3;

        visual.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        if (frame) {
            frame.style.transform =
                `translate(-50%, -50%)
                 translate3d(${currentX * 3}px, ${currentY * 3}px, -35px)
                 rotateX(${rotateX * 0.25}deg)
                 rotateY(${rotateY * 0.25}deg)`;
        }

        if (photo) {
            photo.style.transform =
                `translate(-50%, -50%)
                 translate3d(${currentX * 8}px, ${currentY * 7 - 12}px, 20px)
                 rotateX(${rotateX * 0.55}deg)
                 rotateY(${rotateY * 0.55}deg)`;
        }

        floats.forEach((element) => {

            const depth =
                parseFloat(element.dataset.depth) || 0.5;

            const x = currentX * depth * 14;
            const y = currentY * depth * 12;

            element.style.translate =
                `${x}px ${y}px`;

        });

        animationFrame =
            requestAnimationFrame(animateHero);
    }

    function handlePointerMove(event) {

        const rect = visual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width;

        const y =
            (event.clientY - rect.top) / rect.height;

        targetX = (x - 0.5) * 2;
        targetY = (y - 0.5) * 2;
    }

    function resetHero() {

        targetX = 0;
        targetY = 0;
    }

    if (window.matchMedia("(pointer:fine)").matches) {

        visual.addEventListener(
            "pointermove",
            handlePointerMove
        );

        visual.addEventListener(
            "pointerleave",
            resetHero
        );

        animationFrame =
            requestAnimationFrame(animateHero);
    }

})();


/* =========================================================
   HERO PHOTO LIGHTBOX
   ========================================================= */

function openHeroPhoto() {

    const viewer =
        document.getElementById("heroPhotoViewer");

    if (!viewer) return;

    viewer.classList.add("active");

    viewer.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }
}


function closeHeroPhoto() {

    const viewer =
        document.getElementById("heroPhotoViewer");

    if (!viewer) return;

    viewer.classList.remove("active");

    viewer.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* Close by clicking outside image */
document.addEventListener("click", function (event) {

    const viewer =
        document.getElementById("heroPhotoViewer");

    if (!viewer) return;

    if (
        viewer.classList.contains("active") &&
        event.target === viewer
    ) {
        closeHeroPhoto();
    }

});


/* ESC closes viewer */
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeHeroPhoto();
    }

});
/* =========================================================
   GALLERY PHOTO VIEWER
   ========================================================= */

function openGalleryPhoto(imageSrc) {

    const viewer = document.getElementById("galleryViewer");
    const image = document.getElementById("galleryViewerImage");

    if (!viewer || !image) return;

    image.src = imageSrc;

    viewer.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeGalleryPhoto(event) {

    if (event) {
        event.stopPropagation();

        // Do not close when clicking the actual image
        if (event.target.id === "galleryViewerImage") {
            return;
        }
    }

    const viewer = document.getElementById("galleryViewer");

    if (!viewer) return;

    viewer.classList.remove("active");

    document.body.style.overflow = "";
}


/* Close with ESC */
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const viewer = document.getElementById("galleryViewer");

        if (viewer && viewer.classList.contains("active")) {
            viewer.classList.remove("active");
            document.body.style.overflow = "";
        }

    }

});
/* =========================================================
   GALLERY FULLSCREEN VIEWER
========================================================= */

function openGalleryPhoto(imageSrc) {

    const viewer = document.getElementById("galleryViewer");
    const viewerImage = document.getElementById("galleryViewerImage");

    if (!viewer || !viewerImage) return;

    viewerImage.src = imageSrc;

    viewer.classList.add("active");
    viewer.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    if (
        typeof lucide !== "undefined" &&
        typeof lucide.createIcons === "function"
    ) {
        lucide.createIcons();
    }
}


function closeGalleryPhoto() {

    const viewer = document.getElementById("galleryViewer");

    if (!viewer) return;

    viewer.classList.remove("active");
    viewer.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* Close when clicking outside the image */

document.addEventListener("click", function (event) {

    const viewer = document.getElementById("galleryViewer");
    const viewerImage = document.getElementById("galleryViewerImage");

    if (!viewer || !viewerImage) return;

    if (
        viewer.classList.contains("active") &&
        event.target === viewer
    ) {
        closeGalleryPhoto();
    }

});


/* Close with ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeGalleryPhoto();
    }

});