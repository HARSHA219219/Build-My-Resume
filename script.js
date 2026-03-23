const institutes = [
    { name: "IIT Gandhinagar", logo: "https://jeeadv.ac.in/images/iit_logos/Gandhinagar-p-500.webp", link: "./IIT Gandhinagar/index.html" },
    { name: "NIT Warangal", logo: "https://ik.imagekit.io/syustaging/SYU_PREPROD/LOGO_lXxk8fXqQ.webp?tr=w-3840", link: "./NIT Warangal/index.html" },
    { name: "IIT Kharagpur", logo: "https://jeeadv.ac.in/images/iit_logos/IITKGP-p-500.webp", link: "./Under Development/index.html" },
    { name: "IIT Madras", logo: "https://jeeadv.ac.in/images/iit_logos/IITM-p-500.webp", link: "./Under Development/index.html" },
    { name: "IIT Mandi", logo: "https://jeeadv.ac.in/images/iit_logos/IITMandi-p-500.webp", link: "./Under Development/index.html" },
    { name: "IIT Bombay", logo: "https://jeeadv.ac.in/images/iit_logos/iitB.webp", link: "./Under Development/index.html" },
    { name: "IIT Delhi", logo: "https://jeeadv.ac.in/images/iit_logos/IITD-p-500.webp", link: "./Under Development/index.html" },
    { name: "IIT Dhanbad", logo: "https://jeeadv.ac.in/images/iit_logos/IIT-ISM-Dhanbad.webp", link: "./Under Development/index.html" },
    { name: "IIT Goa", logo: "https://jeeadv.ac.in/images/iit_logos/IITGoa-p-500.webp", link: "./Under Development/index.html" },
    { name: "IIT Dharwad", logo: "https://jeeadv.ac.in/images/iit_logos/IITDh-p-500.webp", link: "./Under Development/index.html" }
];

// Helper to generate a 2-letter logo initial placeholder
function getInitials(name) {
    const words = name.split(' ');
    if (words.length > 1) {
        return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('institutes-grid');

    // Inject institute cards into the DOM
    institutes.forEach(inst => {
        const initials = getInitials(inst.name);

        const card = document.createElement('a');
        card.className = 'institute-card';
        card.href = inst.link;
        card.setAttribute('aria-label', `Generate resume for ${inst.name}`);

        // If logo is defined, show image, else show initials fallback
        const logoHTML = inst.logo
            ? `<img src="${inst.logo}" alt="${inst.name} logo" class="institute-logo" onerror="this.outerHTML='<div class=\\'logo-placeholder\\' aria-label=\\'${inst.name} logo placeholder\\'>${initials}</div>'">`
            : `<div class="logo-placeholder" aria-label="${inst.name} logo placeholder">${initials}</div>`;

        card.innerHTML = `
            <div class="card-logo-wrapper">
                ${logoHTML}
            </div>
            <h3 class="institute-name">${inst.name}</h3>
            <span class="btn-card">Generate Resume</span>
        `;

        grid.appendChild(card);
    });

    document.getElementById('start-building-btn').addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.institutes-section').offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
