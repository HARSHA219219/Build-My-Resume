// ============================================================
// NIT Warangal LaTeX Resume Generator — script.js
// ============================================================

const LATEX_TEMPLATE = `%-------------------------
% Resume in Latex
% Author
% License : MIT
%------------------------

%---- Required Packages and Functions ----

\\documentclass[a4paper,11pt]{article}
\\usepackage{latexsym}
\\usepackage{xcolor}
\\usepackage{float}
\\usepackage{ragged2e}
\\usepackage[empty]{fullpage}
\\usepackage{wrapfig}
\\usepackage{lipsum}
\\usepackage{tabularx}
\\usepackage{titlesec}
\\usepackage{geometry}
\\usepackage{marvosym}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\usepackage{graphicx}
\\usepackage{cfr-lm}
\\usepackage[T1]{fontenc}
\\setlength{\\multicolsep}{0pt} 
\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}

\\usepackage[most]{tcolorbox}
\\tcbset{
\tframe code={}
\tcenter title,
\tleft=0pt,
\tright=0pt,
\ttop=0pt,
\tbottom=0pt,
\tcolback=gray!20,
\tcolframe=white,
\twidth=\\dimexpr\\textwidth\\relax,
\tenlarge left by=-2mm,
\tboxsep=4pt,
\tarc=0pt,outer arc=0pt,
}

\\urlstyle{same}

\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-7pt}]

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[2]{
  \\item{
    \\textbf{#1}{\\hspace{0.5mm}#2 \\vspace{-0.5mm}}
  }
}

\\newcommand{\\resumeAcheivement}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabularx}{0.98\\textwidth}[t]{X@{\\extracolsep{\\fill}}r}
        \\textbf{#1}{,}\\hspace{1mm}\\small{#2}  \\hfill\\textit{\\footnotesize{#3}} 
    \\end{tabularx}
    \\vspace{-3.5mm}
}

\\newcommand{\\resumePOR}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabularx}{0.98\\textwidth}[t]{X@{\\extracolsep{\\fill}}r}
        \\textbf{#1}{,}\\hspace{1mm}\\small{#2} & \\textit{\\footnotesize{#3}} 
    \\end{tabularx}
    \\vspace{-0.5mm}\\hspace{0mm}\\small{#4}
    \\vspace{-3mm}
}

\\newcommand{\\resumePO}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabularx}{0.98\\textwidth}[t]{X@{\\extracolsep{\\fill}}r}
        \\textbf{#1}{,}\\hspace{1mm}\\small{#2} & \\textit{\\footnotesize{#3}} 
    \\end{tabularx}
    \\vspace{-3mm}
}

\\newcommand{\\resumeSubheading}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#4}} \\\\
        \\textit{\\footnotesize{#3}} &  \\textit{\\footnotesize{#2}}\\\\
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeProject}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#3}} \\\\
        \\footnotesize{\\textit{#2}} & \\footnotesize{#4}
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-4pt}}

\\renewcommand{\\labelitemi}{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*,labelsep=0.5mm]}
\\newcommand{\\resumeHeadingSkillStart}{\\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\\newcommand{\\resumeItemListStart}{\\begin{justify}\\begin{itemize}[leftmargin=3ex, rightmargin=2ex, noitemsep,labelsep=1.2mm,itemsep=0mm]\\small}

\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}\\vspace{2mm}}
\\newcommand{\\resumeHeadingSkillEnd}{\\end{itemize}\\vspace{-2mm}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\end{justify}\\vspace{-2mm}}

\\newcolumntype{L}{>{\\raggedright\\arraybackslash}X}%
\\newcolumntype{R}{>{\\raggedleft\\arraybackslash}X}%
\\newcolumntype{C}{>{\\centering\\arraybackslash}X}%

%----------ELEMENTS-----------
\\newcommand{\\name}{<<NAME>>} 
\\newcommand{\\course}{<<COURSE>>} 
\\newcommand{\\roll}{<<ROLL>>} 
\\newcommand{\\phone}{<<PHONE>>} 
\\newcommand{\\emaila}{<<EMAILA>>} 
\\newcommand{\\emailb}{<<EMAILB>>} 

\\begin{document}
\\fontfamily{cmr}\\selectfont

%----------HEADING-----------------
\\parbox{2.35cm}{%
  \\includegraphics[width=2.15cm]{logo.png}
}
\\parbox{\\dimexpr\\linewidth-2.8cm\\relax}{
\\begin{tabularx}{\\linewidth}{L r} \\\\
  \\textbf{\\Large \\name} & {\\raisebox{0.0\\height}{\\footnotesize \\faPhone}\\ +91-\\phone}\\\\
  {Roll No.: \\roll} & \\href{mailto:\\emaila}{\\raisebox{0.0\\height}{\\footnotesize \\faEnvelope}\\ {\\emaila}} \\\\
  \\course & \\href{mailto:\\emailb}{\\raisebox{0.0\\height}{\\footnotesize \\faEnvelope}\\ {\\emailb}}\\\\
  {<<PROGRAM>>} & \\href{https://<<GITHUB>>}{\\raisebox{0.0\\height}{\\footnotesize \\faGithub}\\ {Github Profile}} \\\\
  {<<INSTITUTION>>} & \\href{https://<<LINKEDIN>>}{\\raisebox{0.0\\height}{\\footnotesize \\faLinkedin}\\ {Linkedin Profile}}
\\end{tabularx}
}

%-----------EDUCATION-----------
\\section{\\textbf{Education}}
  \\resumeSubHeadingListStart
    <<EDUCATION_SECTION>>
  \\resumeSubHeadingListEnd
\\vspace{-5.5mm}

<<EXPERIENCE_BLOCK>>
%-----------PROJECTS-----------------
\\section{\\textbf{Personal Projects}}
\\resumeSubHeadingListStart
    <<PROJECTS_SECTION>>
\\resumeSubHeadingListEnd
\\vspace{-5.5mm}

<<SKILLS_BLOCK>>
<<CERTIFICATIONS_BLOCK>>
<<EXTRACURRICULAR_BLOCK>>
% <<INTERNSHIPS_BLOCK>>
<<POR_BLOCK>>
%-----------Achievements-----------------
\\section{\\textbf{Achievements}}
\\vspace{-0.4mm}
\\resumeSubHeadingListStart
    <<ACHIEVEMENTS_SECTION>>
\\resumeSubHeadingListEnd
\\vspace{-5mm}

\\end{document}`;

// ============================================================
// State Management
// ============================================================
const state = {
    pd: {
        name: "", course: "", roll: "", phone: "",
        emaila: "", emailb: "", github: "", linkedin: "",
        institution: "", program: ""
    },
    education: [],
    experience: [],
    projects: [],
    certifications: [],
    extracurricular: [],
    skills: {
        prog: "", tools: "", frame: "", cloud: "", soft: "", course: "", interest: ""
    },
    por: [],
    // internships: [],
    achievements: [],
    // Section ON/OFF toggles
    toggles: {
        experience: true,
        certifications: true,
        extracurricular: true,
        skills: true,
        por: true,
        // internships: true
    },
    // Skill sub-toggles
    skillToggles: {
        prog: true, tools: true, frame: true,
        cloud: true, soft: true, course: true, interest: true
    }
};

// ============================================================
// Utilities
// ============================================================
function escapeLatex(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, '\\&')
        .replace(/%/g, '\\%')
        .replace(/\$/g, '\\$')
        .replace(/#/g, '\\#')
        .replace(/_/g, '\\_')
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}')
        .replace(/~/g, '\\textasciitilde{}')
        .replace(/\^/g, '\\textasciicircum{}');
}

function autoExpand(el) {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
}

// ============================================================
// Dynamic Form Handlers — Description Rows (Textarea)
// ============================================================
function createDescRow(containerId, placeholder, className) {
    const container = document.getElementById(containerId);
    const div = document.createElement("div");
    div.className = "dynamic-input-row";
    div.innerHTML = `
        <textarea class="${className} auto-expand" rows="2" placeholder="${placeholder}"></textarea>
        <button type="button" class="btn btn-danger btn-sm remove-desc"><i data-lucide="x"></i></button>
    `;
    container.appendChild(div);
    const ta = div.querySelector("textarea");
    ta.addEventListener("input", () => autoExpand(ta));
    div.querySelector(".remove-desc").onclick = () => { div.remove(); generate(); };
    lucide.createIcons();
}

// Wire initial remove buttons (those in static HTML)
function wireInitialRemoveButtons() {
    document.querySelectorAll(".remove-desc-init").forEach(btn => {
        btn.onclick = () => { btn.closest(".dynamic-input-row").remove(); generate(); };
    });
}

document.getElementById("add-exp-desc-btn").onclick = () =>
    createDescRow("exp-desc-container", "Describe your impact...", "exp-desc-input");
document.getElementById("add-proj-desc-btn").onclick = () =>
    createDescRow("proj-desc-container", "Describe your impact...", "proj-desc-input");

// ============================================================
// Section Toggle Handlers
// ============================================================
function bindSectionToggle(checkboxId, contentId, toggleKey) {
    const cb = document.getElementById(checkboxId);
    const content = document.getElementById(contentId);
    cb.addEventListener("change", () => {
        state.toggles[toggleKey] = cb.checked;
        content.classList.toggle("active", cb.checked);
        generate();
    });
}

function bindSkillToggle(checkboxId, skillKey) {
    const cb = document.getElementById(checkboxId);
    cb.addEventListener("change", () => {
        state.skillToggles[skillKey] = cb.checked;
        // Dim the associated input when OFF
        const input = document.getElementById("sk-" + skillKey);
        if (input) input.style.opacity = cb.checked ? "1" : "0.4";
        generate();
    });
}

bindSectionToggle("toggle-experience", "experience-content", "experience");
bindSectionToggle("toggle-certifications", "certifications-content", "certifications");
bindSectionToggle("toggle-extracurricular", "extracurricular-content", "extracurricular");
bindSectionToggle("toggle-skills", "skills-content", "skills");
bindSectionToggle("toggle-por", "por-content", "por");
// bindSectionToggle("toggle-internships", "internships-content", "internships");

["prog", "tools", "frame", "cloud", "soft", "course", "interest"].forEach(k =>
    bindSkillToggle("sk-toggle-" + k, k)
);

// ============================================================
// List Rendering
// ============================================================
function renderDynamicList(listId, items, renderItemFn, editItemFn, deleteItemFn) {
    const listEl = document.getElementById(listId);
    if (!listEl) return;
    listEl.innerHTML = "";
    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "list-item";
        div.innerHTML = `
            <div class="list-item-content">${renderItemFn(item)}</div>
            <div class="list-item-actions">
                <button class="btn btn-secondary btn-sm edit-btn"><i data-lucide="edit-2"></i></button>
                <button class="btn btn-danger btn-sm delete-btn"><i data-lucide="trash-2"></i></button>
            </div>
        `;
        div.querySelector(".edit-btn").onclick = () => editItemFn(index);
        div.querySelector(".delete-btn").onclick = () => deleteItemFn(index);
        listEl.appendChild(div);
    });
    lucide.createIcons();
}

// ============================================================
// Education
// ============================================================
document.getElementById("add-edu-btn").onclick = () => {
    const inst = document.getElementById("edu-inst").value;
    const deg = document.getElementById("edu-degree").value;
    const cpi = document.getElementById("edu-cgpa").value;
    const yr = document.getElementById("edu-year").value;
    if (!inst || !deg) return;
    state.education.push({ inst, deg, cpi, yr });
    resetFormGroup("edu-inst", "edu-year", "edu-degree", "edu-cgpa");
    updateEdu();
};

function updateEdu() {
    renderDynamicList("edu-list", state.education,
        (i) => `<div class="list-item-title">${i.inst}</div><div class="list-item-subtitle">${i.deg} | ${i.cpi} | ${i.yr}</div>`,
        (idx) => {
            const i = state.education[idx];
            document.getElementById("edu-inst").value = i.inst;
            document.getElementById("edu-degree").value = i.deg;
            document.getElementById("edu-cgpa").value = i.cpi;
            document.getElementById("edu-year").value = i.yr;
            state.education.splice(idx, 1);
            updateEdu();
        },
        (idx) => { state.education.splice(idx, 1); updateEdu(); }
    );
    generate();
}

// ============================================================
// Experience
// ============================================================
document.getElementById("add-exp-btn").onclick = () => {
    const company = document.getElementById("exp-company").value;
    const city = document.getElementById("exp-city").value;
    const role = document.getElementById("exp-role").value;
    const dur = document.getElementById("exp-duration").value;
    const descs = Array.from(document.querySelectorAll(".exp-desc-input"))
        .map(i => i.value).filter(v => v.trim());
    if (!company || !role) return;
    state.experience.push({ company, city, role, dur, descs });
    resetFormGroup("exp-company", "exp-city", "exp-role", "exp-duration");
    document.getElementById("exp-desc-container").innerHTML = `
        <div class="dynamic-input-row">
            <textarea class="exp-desc-input auto-expand" rows="2" placeholder="Work description line 1 — describe your impact"></textarea>
            <button type="button" class="btn btn-danger btn-sm remove-desc-init"><i data-lucide="x"></i></button>
        </div>
    `;
    wireInitialRemoveButtons();
    lucide.createIcons();
    updateExp();
};

function updateExp() {
    renderDynamicList("exp-list", state.experience,
        (i) => `<div class="list-item-title">${i.company}</div><div class="list-item-subtitle">${i.role} | ${i.dur}</div>`,
        (idx) => {
            const i = state.experience[idx];
            document.getElementById("exp-company").value = i.company;
            document.getElementById("exp-city").value = i.city;
            document.getElementById("exp-role").value = i.role;
            document.getElementById("exp-duration").value = i.dur;
            state.experience.splice(idx, 1);
            updateExp();
        },
        (idx) => { state.experience.splice(idx, 1); updateExp(); }
    );
    generate();
}

// ============================================================
// Projects
// ============================================================
document.getElementById("add-proj-btn").onclick = () => {
    const name = document.getElementById("proj-name").value;
    const sdesc = document.getElementById("proj-short-desc").value;
    const dur = document.getElementById("proj-duration").value;
    const descs = Array.from(document.querySelectorAll(".proj-desc-input"))
        .map(i => i.value).filter(v => v.trim());
    if (!name) return;
    state.projects.push({ name, sdesc, dur, descs });
    resetFormGroup("proj-name", "proj-duration", "proj-short-desc");
    document.getElementById("proj-desc-container").innerHTML = `
        <div class="dynamic-input-row">
            <textarea class="proj-desc-input auto-expand" rows="2" placeholder="Key feature, tool, or achievement"></textarea>
            <button type="button" class="btn btn-danger btn-sm remove-desc-init"><i data-lucide="x"></i></button>
        </div>
    `;
    wireInitialRemoveButtons();
    lucide.createIcons();
    updateProj();
};

function updateProj() {
    renderDynamicList("proj-list", state.projects,
        (i) => `<div class="list-item-title">${i.name}</div><div class="list-item-subtitle">${i.dur}</div>`,
        (idx) => {
            const i = state.projects[idx];
            document.getElementById("proj-name").value = i.name;
            document.getElementById("proj-short-desc").value = i.sdesc;
            document.getElementById("proj-duration").value = i.dur;
            state.projects.splice(idx, 1);
            updateProj();
        },
        (idx) => { state.projects.splice(idx, 1); updateProj(); }
    );
    generate();
}

// ============================================================
// Certifications
// ============================================================
document.getElementById("add-cert-btn").onclick = () => {
    const title = document.getElementById("cert-title").value;
    const issuer = document.getElementById("cert-issuer").value;
    const yr = document.getElementById("cert-year").value;
    const desc = document.getElementById("cert-desc").value;
    if (!title) return;
    state.certifications.push({ title, issuer, yr, desc });
    resetFormGroup("cert-title", "cert-issuer", "cert-year", "cert-desc");
    updateCert();
};

function updateCert() {
    renderDynamicList("cert-list", state.certifications,
        (i) => `<div class="list-item-title">${i.title}</div><div class="list-item-subtitle">${i.issuer} | ${i.yr}</div>`,
        (idx) => {
            const i = state.certifications[idx];
            document.getElementById("cert-title").value = i.title;
            document.getElementById("cert-issuer").value = i.issuer;
            document.getElementById("cert-year").value = i.yr;
            document.getElementById("cert-desc").value = i.desc;
            state.certifications.splice(idx, 1);
            updateCert();
        },
        (idx) => { state.certifications.splice(idx, 1); updateCert(); }
    );
    generate();
}

// ============================================================
// Extracurricular Activities
// ============================================================
document.getElementById("add-extra-btn").onclick = () => {
    const activity = document.getElementById("extra-activity").value;
    const role = document.getElementById("extra-role").value;
    const duration = document.getElementById("extra-duration").value;
    const desc = document.getElementById("extra-desc").value;
    if (!activity && !role && !desc) return;
    if (!activity && !role && !desc && duration) return;
    state.extracurricular.push({ activity, role, duration, desc });
    resetFormGroup("extra-activity", "extra-role", "extra-duration", "extra-desc");
    updateExtra();
};

function updateExtra() {
    renderDynamicList("extra-list", state.extracurricular,
        (i) => `<div class="list-item-title">${i.activity}</div><div class="list-item-subtitle">${i.role} | ${i.duration}</div>`,
        (idx) => {
            const i = state.extracurricular[idx];
            document.getElementById("extra-activity").value = i.activity;
            document.getElementById("extra-role").value = i.role;
            document.getElementById("extra-duration").value = i.duration;
            document.getElementById("extra-desc").value = i.desc;
            state.extracurricular.splice(idx, 1);
            updateExtra();
        },
        (idx) => { state.extracurricular.splice(idx, 1); updateExtra(); }
    );
    generate();
}

// ============================================================
// POR & Achievements
// ============================================================
document.getElementById("add-por-btn").onclick = () => {
    const pos = document.getElementById("por-pos").value;
    const org = document.getElementById("por-org").value;
    const dur = document.getElementById("por-dur").value;
    const desc = document.getElementById("por-desc").value;
    if (!pos && !org && !desc) return;
    if (!pos && !org && !desc && dur) return;
    state.por.push({ pos, org, dur, desc });
    resetFormGroup("por-pos", "por-org", "por-dur", "por-desc");
    updatePor();
};

function updatePor() {
    renderDynamicList("por-list", state.por,
        (i) => `<div class="list-item-title">${i.pos}</div><div class="list-item-subtitle">${i.org}</div>`,
        (idx) => {
            const i = state.por[idx];
            document.getElementById("por-pos").value = i.pos;
            document.getElementById("por-org").value = i.org;
            document.getElementById("por-dur").value = i.dur;
            document.getElementById("por-desc").value = i.desc;
            state.por.splice(idx, 1); updatePor();
        },
        (idx) => { state.por.splice(idx, 1); updatePor(); }
    );
    generate();
}

document.getElementById("add-ach-btn").onclick = () => {
    const title = document.getElementById("ach-title").value;
    const yr = document.getElementById("ach-year").value;
    const desc = document.getElementById("ach-desc").value;
    if (!title) return;
    state.achievements.push({ title, yr, desc });
    resetFormGroup("ach-title", "ach-year", "ach-desc");
    updateAch();
};

function updateAch() {
    renderDynamicList("ach-list", state.achievements,
        (i) => `<div class="list-item-title">${i.title || i.desc}</div><div class="list-item-subtitle">${i.yr}</div>`,
        (idx) => {
            const i = state.achievements[idx];
            document.getElementById("ach-title").value = i.title || "";
            document.getElementById("ach-year").value = i.yr || "";
            document.getElementById("ach-desc").value = i.desc || "";
            state.achievements.splice(idx, 1); updateAch();
        },
        (idx) => { state.achievements.splice(idx, 1); updateAch(); }
    );
    generate();
}

// ============================================================
// Internships
// ============================================================
// document.getElementById("add-intern-btn").onclick = () => {
//     const company = document.getElementById("intern-company").value;
//     const role = document.getElementById("intern-role").value;
//     const dur = document.getElementById("intern-dur").value;
//     const desc = document.getElementById("intern-desc").value;
//     if (!company && !role && !desc) return;
//     if (!company && !role && !desc && dur) return; // Only year not accepted
//     state.internships.push({ company, role, dur, desc });
//     resetFormGroup("intern-company", "intern-role", "intern-dur", "intern-desc");
//     updateIntern();
// };

// function updateIntern() {
//     renderDynamicList("intern-list", state.internships,
//         (i) => `<div class="list-item-title">${i.company || i.role}</div><div class="list-item-subtitle">${i.dur}</div>`,
//         (idx) => {
//             const i = state.internships[idx];
//             document.getElementById("intern-company").value = i.company || "";
//             document.getElementById("intern-role").value = i.role || "";
//             document.getElementById("intern-dur").value = i.dur || "";
//             document.getElementById("intern-desc").value = i.desc || "";
//             state.internships.splice(idx, 1); updateIntern();
//         },
//         (idx) => { state.internships.splice(idx, 1); updateIntern(); }
//     );
//     generate();
// }

function resetFormGroup(...ids) {
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
}

// ============================================================
// Main LaTeX Generation
// ============================================================
function generate() {
    // Collect Personal Details
    document.querySelectorAll("[id^='pd-']").forEach(i => {
        const key = i.id.split('-').slice(1).join('-'); // handles pd-emaila, pd-institution etc.
        state.pd[key] = i.value || "";
    });

    // Collect Skills (only values, toggles are in state.skillToggles from event listeners)
    document.querySelectorAll("[id^='sk-']").forEach(i => {
        if (i.id.startsWith("sk-toggle-")) return; // skip toggle checkboxes
        const key = i.id.split('-')[1];
        state.skills[key] = i.value || "";
    });

    let latex = LATEX_TEMPLATE;

    // ---- Header Replacements ----
    latex = latex.replace(/<<NAME>>/g, escapeLatex(state.pd.name) || "YOUR NAME");
    latex = latex.replace(/<<COURSE>>/g, escapeLatex(state.pd.course) || "Program Name");
    latex = latex.replace(/<<ROLL>>/g, escapeLatex(state.pd.roll) || "000000");
    latex = latex.replace(/<<PHONE>>/g, escapeLatex(state.pd.phone) || "0000000000");
    latex = latex.replace(/<<EMAILA>>/g, escapeLatex(state.pd.emaila) || "a@email.com");
    latex = latex.replace(/<<EMAILB>>/g, escapeLatex(state.pd.emailb) || "b@nitw.ac.in");
    latex = latex.replace(/<<GITHUB>>/g, escapeLatex(state.pd.github) || "github.com");
    latex = latex.replace(/<<LINKEDIN>>/g, escapeLatex(state.pd.linkedin) || "linkedin.com");
    latex = latex.replace(/<<INSTITUTION>>/g, escapeLatex(state.pd.institution) || "National Institute Of Technology, Warangal");
    latex = latex.replace(/<<PROGRAM>>/g, escapeLatex(state.pd.program) || "B.Tech, Computer Science and Engineering");

    // ---- Education ----
    let eduTex = "";
    state.education.forEach(e => {
        eduTex += `    \\resumeSubheading\n      {${escapeLatex(e.inst)}}{CGPA/Percentage: ${escapeLatex(e.cpi)}}\n      {${escapeLatex(e.deg)}}{${escapeLatex(e.yr)}}\n`;
    });
    latex = latex.replace(/<<EDUCATION_SECTION>>/g, eduTex);

    // ---- Experience Block (conditional) ----
    let expBlock = "";
    if (state.toggles.experience) {
        let expTex = "";
        state.experience.forEach(e => {
            expTex += `    \\resumeSubheading\n      {${escapeLatex(e.company)}}{${escapeLatex(e.city)}}\n      {${escapeLatex(e.role)}}{${escapeLatex(e.dur)}}\n      \\vspace{-2.0mm}\n      \\resumeItemListStart\n`;
            e.descs.forEach(d => expTex += `    \\item {${escapeLatex(d)}}\n`);
            expTex += `    \\resumeItemListEnd\n    \\vspace{-3.0mm}\n`;
        });
        expBlock = `%-----------EXPERIENCE-----------------\n\\section{\\textbf{Experience}}\n  \\resumeSubHeadingListStart\n${expTex}  \\resumeSubHeadingListEnd\n\\vspace{-5.5mm}\n\n`;
    }
    latex = latex.replace(/<<EXPERIENCE_BLOCK>>/g, expBlock);

    // ---- Projects ----
    let projTex = "";
    state.projects.forEach(p => {
        projTex += `    \\resumeProject\n      {${escapeLatex(p.name)}}\n      {${escapeLatex(p.sdesc)}}\n      {${escapeLatex(p.dur)}}\n      {}\n      \\resumeItemListStart\n`;
        p.descs.forEach(d => projTex += `        \\item {${escapeLatex(d)}}\n`);
        projTex += `    \\resumeItemListEnd\n    \\vspace{-2mm}\n`;
    });
    latex = latex.replace(/<<PROJECTS_SECTION>>/g, projTex);

    // ---- Skills Block (conditional) ----
    let skillsBlock = "";
    if (state.toggles.skills) {
        const skillMap = [
            { key: "prog", label: "Languages" },
            { key: "tools", label: "Developer Tools" },
            { key: "frame", label: "Frameworks" },
            { key: "cloud", label: "Cloud/Databases" },
            { key: "soft", label: "Soft Skills" },
            { key: "course", label: "Coursework" },
            { key: "interest", label: "Areas of Interest" }
        ];
        let skillLines = [];
        skillMap.forEach(s => {
            if (state.skillToggles[s.key] && state.skills[s.key]) {
                skillLines.push(`     \\textbf{${s.label}}{: ${escapeLatex(state.skills[s.key])}} \\\\`);
            }
        });
        if (skillLines.length > 0) {
            skillsBlock = `%-----------Technical skills-----------------\n\\section{\\textbf{Technical Skills and Interests}}\n \\vspace{0.5mm}\n \\begin{itemize}[leftmargin=0.05in, label={}]\n    \\small{\\item{\n${skillLines.join('\n')}\n    }}\n \\end{itemize}\n \\vspace{-16pt}\n\n`;
        }
    }
    latex = latex.replace(/<<SKILLS_BLOCK>>/g, skillsBlock);

    // ---- Certifications Block (conditional) ----
    let certBlock = "";
    if (state.toggles.certifications && state.certifications.length > 0) {
        let certTex = "";
        state.certifications.forEach(c => {
            if (c.desc && c.desc.trim() !== "") {
                certTex += `\\resumePOR{${escapeLatex(c.title)}}{${escapeLatex(c.issuer)}}{${escapeLatex(c.yr)}}{${escapeLatex(c.desc)}}\n`;
            } else {
                certTex += `\\resumePO{${escapeLatex(c.title)}}{${escapeLatex(c.issuer)}}{${escapeLatex(c.yr)}}{}\n`;
            }
        });
        certBlock = `%-----------Certifications-----------------\n\\section{\\textbf{Certifications}}\n\\vspace{-0.4mm}\n\\resumeSubHeadingListStart\n${certTex}\\resumeSubHeadingListEnd\n\\vspace{-5mm}\n\n`;
    }
    latex = latex.replace(/<<CERTIFICATIONS_BLOCK>>/g, certBlock);

    // ---- Extracurricular Block (conditional) ----
    let extraBlock = "";
    if (state.toggles.extracurricular && state.extracurricular.length > 0) {
        let extraTex = "";
        state.extracurricular.forEach(e => {
            if (e.desc && e.desc.trim() !== "") {
                extraTex += `\\resumePOR{${escapeLatex(e.activity)}}{${escapeLatex(e.role)}}{${escapeLatex(e.duration)}}{${escapeLatex(e.desc)}}\n`;
            } else {
                extraTex += `\\resumePO{${escapeLatex(e.activity)}}{${escapeLatex(e.role)}}{${escapeLatex(e.duration)}}{}\n`;
            }
        });
        extraBlock = `%-----------Extracurricular-----------------\n\\section{\\textbf{Extracurricular Activities}}\n\\vspace{-0.4mm}\n\\resumeSubHeadingListStart\n${extraTex}\\resumeSubHeadingListEnd\n\\vspace{-5mm}\n\n`;
    }
    latex = latex.replace(/<<EXTRACURRICULAR_BLOCK>>/g, extraBlock);

    // // ---- Internships Block (conditional) ----
    // let internBlock = "";
    // if (state.toggles.internships && state.internships.length > 0) {
    //     let internTex = "";
    //     state.internships.forEach(i => {
    //         internTex += `\\resumePOR{${escapeLatex(i.company)}}{${escapeLatex(i.role)}}{${escapeLatex(i.dur)}}{${escapeLatex(i.desc)}}\n`;
    //     });
    //     internBlock = `%-----------Internships-----------------\n\\section{\\textbf{Internships}}\n\\vspace{-0.4mm}\n\\resumeSubHeadingListStart\n${internTex}\\resumeSubHeadingListEnd\n\\vspace{-5mm}\n\n`;
    // }
    // latex = latex.replace(/<<INTERNSHIPS_BLOCK>>/g, internBlock);

    // ---- POR Block (conditional) ----
    let porBlock = "";
    if (state.toggles.por && state.por.length > 0) {
        let porTex = "";
        state.por.forEach(p => {
            if (p.desc && p.desc.trim() !== "") {
                porTex += `\\resumePOR{${escapeLatex(p.pos)}}{${escapeLatex(p.org)}}{${escapeLatex(p.dur)}}{${escapeLatex(p.desc)}}\n`;
            } else {
                porTex += `\\resumePO{${escapeLatex(p.pos)}}{${escapeLatex(p.org)}}{${escapeLatex(p.dur)}}{}\n`;
            }
        });
        porBlock = `%-----------Positions of Responsibility-----------------\n\\section{\\textbf{Positions of Responsibility}}\n\\vspace{-0.4mm}\n\\resumeSubHeadingListStart\n${porTex}\\resumeSubHeadingListEnd\n\\vspace{-5mm}\n\n`;
    }
    latex = latex.replace(/<<POR_BLOCK>>/g, porBlock);

    // ---- Achievements ----
    let achTex = "";
    state.achievements.forEach(a => {
        // Achievement Name (optional), Description (optional), Year (optional)
        // Rule: If only year -> skip. Else align year right.
        if (!a.title && !a.desc && a.yr) return;
        if (!a.title && !a.desc) return;

        let title = a.title || "";
        let desc = a.desc || "";
        let yr = a.yr || "";

        achTex += `\\resumeAcheivement{${escapeLatex(title)}}{${escapeLatex(desc)}}{${escapeLatex(yr)}}{}\n`;
    });
    latex = latex.replace(/<<ACHIEVEMENTS_SECTION>>/g, achTex);

    document.getElementById("latex-preview-code").textContent = latex;
    document.getElementById("overleaf-snip").value = latex;

    renderVisual();
}

// ============================================================
// Visual Preview
// ============================================================
function renderVisual() {
    const container = document.getElementById("resume-preview");
    if (!state.pd.name && state.education.length === 0) {
        container.innerHTML = `<div class="preview-placeholder">Fill in your details to see the preview</div>`;
        return;
    }

    let html = `
        <div style="display:flex;align-items:flex-start;gap:15px;margin-bottom:10px;">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e1/National_Institute_of_Technology%2C_Warangal_logo.png"
                 style="width:55px;height:auto;flex-shrink:0;" alt="NITW Logo">
            <div style="flex:1;">
                <h1 style="text-align:left;margin:0 0 4px;">${state.pd.name || "YOUR NAME"}</h1>
                <div class="contact-info" style="text-align:left;">
                    ${state.pd.course || "Program"} | Roll No: ${state.pd.roll || "000000"}<br>
                    Phone: +91-${state.pd.phone || "0000000000"} | ${state.pd.emaila || "email@a.com"} | ${state.pd.emailb || "email@b.com"}<br>
                    ${state.pd.program || "B.Tech, CSE"} | ${state.pd.institution || "NIT Warangal"}
                </div>
            </div>
        </div>
    `;

    if (state.education.length > 0) {
        html += `<h2>Education</h2>`;
        state.education.forEach(e => {
            html += `
                <div class="item-header"><strong>${e.inst}</strong><span>${e.cpi}</span></div>
                <div class="item-subheader">${e.deg} | ${e.yr}</div>
            `;
        });
    }

    if (state.toggles.experience && state.experience.length > 0) {
        html += `<h2>Experience</h2>`;
        state.experience.forEach(e => {
            html += `
                <div class="item-header"><strong>${e.company}</strong><span>${e.city}</span></div>
                <div class="item-subheader">${e.role} | ${e.dur}</div>
                <ul>${e.descs.map(d => `<li>${d}</li>`).join('')}</ul>
            `;
        });
    }

    if (state.projects.length > 0) {
        html += `<h2>Personal Projects</h2>`;
        state.projects.forEach(p => {
            html += `
                <div class="item-header"><strong>${p.name}</strong><span>${p.dur}</span></div>
                <div class="item-subheader">${p.sdesc}</div>
                <ul>${p.descs.map(d => `<li>${d}</li>`).join('')}</ul>
            `;
        });
    }

    if (state.toggles.skills) {
        const skillMap = [
            { key: "prog", label: "Languages" }, { key: "tools", label: "Developer Tools" },
            { key: "frame", label: "Frameworks" }, { key: "cloud", label: "Cloud/Databases" },
            { key: "soft", label: "Soft Skills" }, { key: "course", label: "Coursework" },
            { key: "interest", label: "Areas of Interest" }
        ];
        const activeSkills = skillMap.filter(s => state.skillToggles[s.key] && state.skills[s.key]);
        if (activeSkills.length > 0) {
            html += `<h2>Technical Skills and Interests</h2><div style="font-size:13px;">`;
            activeSkills.forEach(s => {
                html += `<strong>${s.label}</strong>: ${state.skills[s.key]}<br>`;
            });
            html += `</div>`;
        }
    }

    if (state.toggles.certifications && state.certifications.length > 0) {
        html += `<h2>Certifications</h2>`;
        state.certifications.forEach(c => {
            html += `
                <div class="item-header"><strong>${c.title}</strong><span>${c.yr}</span></div>
                <div class="item-subheader">${c.issuer}</div>
                ${c.desc ? `<p style="font-size:13px;margin:4px 0;">${c.desc}</p>` : ''}
            `;
        });
    }

    if (state.toggles.extracurricular && state.extracurricular.length > 0) {
        html += `<h2>Extracurricular Activities</h2>`;
        state.extracurricular.forEach(e => {
            html += `
                <div class="item-header"><strong>${e.activity}</strong><span>${e.duration}</span></div>
                <div class="item-subheader">${e.role}</div>
                ${e.desc ? `<p style="font-size:13px;margin:4px 0;">${e.desc}</p>` : ''}
            `;
        });
    }

    // if (state.toggles.internships && state.internships.length > 0) {
    //     html += `<h2>Internships</h2>`;
    //     state.internships.forEach(i => {
    //         html += `
    //             <div class="item-header"><strong>${i.company}</strong><span>${i.dur}</span></div>
    //             <div class="item-subheader">${i.role}</div>
    //             ${i.desc ? `<p style="font-size:13px;margin:4px 0;">${i.desc}</p>` : ''}
    //         `;
    //     });
    // }

    if (state.toggles.por && state.por.length > 0) {
        html += `<h2>Positions of Responsibility</h2>`;
        state.por.forEach(p => {
            html += `
                <div class="item-header"><strong>${p.pos}</strong><span>${p.dur}</span></div>
                <div class="item-subheader">${p.org}</div>
                ${p.desc ? `<p style="font-size:13px;margin:4px 0;">${p.desc}</p>` : ''}
            `;
        });
    }

    if (state.achievements.length > 0) {
        html += `<h2>Achievements</h2>`;
        state.achievements.forEach(a => {
            if (!a.title && !a.desc && a.yr) return;
            if (!a.title && !a.desc) return;
            html += `
                <div class="item-header"><strong>${a.title || ""}</strong><span>${a.yr || ""}</span></div>
                ${a.desc ? `<p style="font-size:13px;margin:4px 0;">${a.desc}</p>` : ''}
            `;
        });
    }

    container.innerHTML = html;
}

// ============================================================
// Global Input Listener (Live Update)
// ============================================================
document.addEventListener("input", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        if (e.target.tagName === "TEXTAREA") autoExpand(e.target);
        generate();
    }
});

// ============================================================
// Tab Switch
// ============================================================
document.getElementById("tab-visual").onclick = () => {
    document.getElementById("tab-visual").classList.add("active");
    document.getElementById("tab-code").classList.remove("active");
    document.getElementById("visual-pane").classList.add("active");
    document.getElementById("code-pane").classList.remove("active");
};

document.getElementById("tab-code").onclick = () => {
    document.getElementById("tab-code").classList.add("active");
    document.getElementById("tab-visual").classList.remove("active");
    document.getElementById("code-pane").classList.add("active");
    document.getElementById("visual-pane").classList.remove("active");
};

// ============================================================
// Copy Button
// ============================================================
document.getElementById("copy-btn").onclick = () => {
    const code = document.getElementById("latex-preview-code").textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById("copy-btn");
        const old = btn.innerHTML;
        btn.innerHTML = `<i data-lucide="check"></i> Copied!`;
        lucide.createIcons();
        setTimeout(() => { btn.innerHTML = old; lucide.createIcons(); }, 2000);
    });
};

// ============================================================
// Logo Download (always download from Wikipedia URL)
// ============================================================
document.getElementById("download-logo-btn").onclick = () => {
    const logoUrl = "https://upload.wikimedia.org/wikipedia/en/e/e1/National_Institute_of_Technology%2C_Warangal_logo.png";
    fetch(logoUrl)
        .then(res => res.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "logo.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(link.href), 5000);
        })
        .catch(() => {
            // Fallback: open in new tab if fetch blocked
            window.open(logoUrl, "_blank");
        });
};

// ============================================================
// Initialization
// ============================================================
wireInitialRemoveButtons();
generate();
lucide.createIcons();
