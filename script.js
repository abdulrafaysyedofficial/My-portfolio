"use strict";

// Project detail content is grouped here for easy updates.
const projects = {
  immigro: {
    eyebrow: "FHEM / IMMIGRO · MARKETING",
    title: "One connected lead journey.",
    summary: "Digital marketing execution for Immigro, FHEM’s immigration and international-student consulting vertical, from campaign planning to lead capture.",
    sections: [
      { title: "My role", text: "As a Digital Marketing Specialist, I took ownership of campaign execution, bringing together the page design, messaging, enquiry form, and paid advertising." },
      { title: "What I worked on", items: [
        "Planned the campaign and researched relevant keywords and search intent.",
        "Designed and developed the WordPress/Elementor landing page, including the content and consultation call-to-action.",
        "Created a Google Forms enquiry form and connected it to the landing-page journey.",
        "Developed Google Ads headlines, descriptions, and advertising assets aligned with the landing page.",
        "Worked on lead records in HubSpot and designed email workflows to support follow-up."
      ] },
      { title: "The connection", text: "The work connected paid acquisition, landing-page messaging, enquiry capture, and CRM organization into a practical marketing workflow. It shows the combination of creative execution and operational detail I bring to a project." }
    ],
    tools: ["Google Ads", "WordPress", "Elementor", "Google Forms", "HubSpot"]
  },
  district: {
    eyebrow: "GLENTEL / DISTRICT INITIATIVES · OPERATIONS",
    title: "Clarity across locations.",
    summary: "Performance reporting and district-level coordination across approximately 15 retail locations in the Toronto region, alongside my store-management responsibilities.",
    sections: [
      { title: "My role", text: "As a Sales & Operations Manager, I coordinated operational initiatives and helped make activity, performance, and follow-up easier to track across the district." },
      { title: "What I worked on", items: [
        "Developed Excel-based reports covering customer reviews, trade-ins, and sales activity.",
        "Used ratios, retail KPIs, and PivotTables to organize information and communicate progress.",
        "Coordinated inventory audits and followed up on stock variances.",
        "Supported sales-funnel cleanup to improve record accuracy and opportunity quality.",
        "Communicated with store teams to keep district initiatives moving."
      ] },
      { title: "What this demonstrates", text: "A practical approach to operational coordination: organize the data, make the priorities clear, and follow through with the people responsible for the next action." }
    ],
    tools: ["Excel", "PivotTables", "KPI reporting", "Inventory audits", "Stakeholder coordination"]
  },
  team: {
    eyebrow: "GLENTEL / PEOPLE DEVELOPMENT · LEADERSHIP",
    title: "Performance starts with people.",
    summary: "Day-to-day leadership and development of approximately five sales professionals in a customer-facing retail environment.",
    sections: [
      { title: "My role", text: "As a Sales & Operations Manager, I combine interviewing, hiring, onboarding, scheduling, and coaching with responsibility for day-to-day store operations and service standards." },
      { title: "How I supported the team", items: [
        "Source candidates through job listings, conduct interviews, and shortlist applicants to maintain a qualified talent pool and meet staffing requirements efficiently.",
        "Recruited and onboarded employees, helping them understand the role and expectations.",
        "Organized schedules and resources around store requirements.",
        "Coached team members on customer conversations, product positioning, and performance development.",
        "Used store performance information to guide priorities and follow-up.",
        "Supported promotional execution and consistent customer service."
      ] },
      { title: "Store results", text: "The store in the Durham region recorded approximately 40% sales-volume growth in Q4 2025 and exceeded budget targets for eight consecutive months. My contribution included team coaching, focused sales strategies, and promotional execution." }
    ],
    tools: ["Structured interviewing", "Hiring", "Onboarding", "Scheduling", "Coaching", "Performance development"]
  },
  recruitment: {
    eyebrow: "FHEM / RECRUITMENT & CRM · MARKETING + OPERATIONS",
    title: "Relevant reach. Organized follow-up.",
    summary: "Recruitment marketing and candidate-sourcing support for technical roles, followed by work on B2B contact organization in HubSpot.",
    sections: [
      { title: "My role", text: "At FHEM, I supported the marketing of technical and professional job postings, initial candidate screening, and the organization of business and marketing contacts." },
      { title: "What I worked on", items: [
        "Refined job titles, descriptions, headlines, and role-specific keywords.",
        "Used LinkedIn advertising and application workflows to reach more relevant candidate audiences.",
        "Supported candidate sourcing and initial screening for technical positions.",
        "Worked with job and candidate records in Prosperix and communicated recruitment updates.",
        "Organized B2B contact data in HubSpot to support business development in the education sector."
      ] },
      { title: "What this demonstrates", text: "The ability to pair audience targeting and clear communication with the record-keeping and follow-up that make marketing activity useful to a business." }
    ],
    tools: ["LinkedIn", "Prosperix", "HubSpot", "Audience targeting", "Candidate screening"]
  },
  pcResearch: {
    eyebrow: "OSMANIA UNIVERSITY / BBA · MARKET RESEARCH",
    title: "Understanding the PC buyer.",
    summary: "A BBA market-research project at Osmania University. I compared “assembled PCs” and “branded PCs” to understand buyer priorities and develop practical purchase recommendations.",
    branding: {
      institutionLogo: "assets/osmania-university-logo.jpg",
      institutionAlt: "Osmania University",
      institutionSquare: true
    },
    sections: [
      { title: "My contribution", text: "I designed the research questionnaires, conducted fieldwork at Chenoy Trade Center in Secunderabad and translated buyer and seller feedback into findings and purchase recommendations." },
      { title: "Research and analysis", items: [
        { label: "Sample design", text: "Used convenience sampling to reach 120 respondents at the market: 100 buyers and 20 sellers." },
        { label: "Primary research", text: "Developed a 10-question buyer survey and a five-question seller survey covering purchase needs, pricing, upgrades and warranty." },
        { label: "Secondary research", text: "Reviewed journals, articles, industry websites and online store reviews to provide market and product context." },
        { label: "Data analysis", text: "Tabulated response counts and calculated percentages, presenting tables and charts to compare budgets, intended uses, upgrade preferences and warranty expectations." },
        { label: "Comparative interpretation", text: "Compared buyer preferences with seller input on value, pricing and warranty, identifying distinct needs across academic users, gamers and video-editing customers." }
      ] },
      { title: "Findings and recommendations", text: "The study indicated that “assembled PCs” offered stronger value and upgrade flexibility, while “branded PCs” appealed on warranty convenience. I translated these findings into recommendations by customer use case and budget, demonstrating consumer insight, comparative analysis and clear reporting." }
    ],
    tools: ["Questionnaire design", "Primary & secondary research", "Consumer insights", "Comparative analysis", "Research reporting"]
  },
  timsMints: {
    eyebrow: "MARKETING CAPSTONE",
    title: "Tim’s Mints",
    summary: "A product development and marketing capstone at Lambton College in Toronto. My team proposed Tim’s Mints, a mint candy concept for Tim Hortons cafés addressing the need for fresh breath after coffee.",
    branding: {
      institutionLogo: "assets/lambton-college-logo.png",
      institutionAlt: "Lambton College",
      projectLogo: "assets/tims-mints-concept.jpeg",
      projectAlt: "Tim’s Mints logo designed by Abdul Rafay Syed"
    },
    sections: [
      { title: "My contribution", text: "I developed the marketing plan, covering pricing, positioning, promotional strategy and media selection. I also designed the Tim’s Mints logo and produced advertisements and video content in Canva." },
      { title: "Research and positioning", text: "Applied SWOT, Porter’s Five Forces and competitive mapping to assess the market opportunity. Defined a target profile of professionals who drink coffee, with positioning focused on affordability and convenience." },
      { title: "Campaign planning", text: "Planned an eight-week integrated campaign with channel budgets and scheduling:", items: [
        { label: "Sales promotions", text: "Complimentary mints with coffee, coupons and product sampling." },
        { label: "Social media campaigns", text: "Sponsored posts, weekly content and a video contest." },
        { label: "Video and display ads", text: "YouTube, social video placements and banner advertising." },
        { label: "Traditional advertising", text: "TV, radio, print and outdoor media." },
        { label: "Direct marketing and PR", text: "Loyalty emails and event sampling." }
      ] }
    ],
    tools: ["Market analysis", "Customer profiling", "Pricing & positioning", "Integrated media planning", "Sales promotions", "Canva", "Video editing"]
  }
};

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const projectCards = [...document.querySelectorAll(".project-card")];
function filterWork(category) {
  let count = 0;
  filterButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.filter === category)));
  projectCards.forEach((card) => {
    const show = category === "all" || card.dataset.categories.split(" ").includes(category);
    card.hidden = !show;
    if (show) count++;
  });
  document.getElementById("work-count").textContent = `${count} ${count === 1 ? "project" : "projects"}`;
}
filterButtons.forEach((button) => button.addEventListener("click", () => filterWork(button.dataset.filter)));
document.querySelectorAll("[data-expertise-filter]").forEach((link) => {
  link.addEventListener("click", () => filterWork(link.dataset.expertiseFilter));
});

const dialog = document.getElementById("project-dialog");
const closeButton = dialog.querySelector(".dialog-close");
let lastProjectButton = null;

function openProject(key, trigger) {
  const project = projects[key];
  if (!project) return;
  document.getElementById("dialog-eyebrow").textContent = project.eyebrow;
  document.getElementById("dialog-title").textContent = project.title;
  document.getElementById("dialog-summary").textContent = project.summary;
  const institution = document.getElementById("dialog-institution");
  const projectLogo = document.getElementById("dialog-project-logo");
  institution.replaceChildren();
  projectLogo.replaceChildren();
  institution.classList.toggle("college-logo-square", Boolean(project.branding?.institutionSquare));
  institution.hidden = !project.branding?.institutionLogo;
  projectLogo.hidden = !project.branding?.projectLogo;
  if (project.branding?.institutionLogo) {
    const schoolImage = document.createElement("img");
    schoolImage.src = project.branding.institutionLogo;
    schoolImage.alt = project.branding.institutionAlt;
    schoolImage.width = 370;
    schoolImage.height = 190;
    institution.append(schoolImage);
  }
  if (project.branding?.projectLogo) {
    const logoImage = document.createElement("img");
    logoImage.src = project.branding.projectLogo;
    logoImage.alt = project.branding.projectAlt;
    logoImage.width = 750;
    logoImage.height = 451;
    projectLogo.append(logoImage);
  }
  const detailNodes = project.sections.map((section) => {
    const wrapper = document.createElement("section");
    const heading = document.createElement("h3");
    heading.textContent = section.title;
    wrapper.append(heading);
    if (section.text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = section.text;
      wrapper.append(paragraph);
    }
    if (section.items) {
      const list = document.createElement("ul");
      section.items.forEach((item) => {
        const li = document.createElement("li");
        if (typeof item === "string") {
          li.textContent = item;
        } else {
          const label = document.createElement("strong");
          label.textContent = `${item.label}: `;
          li.append(label, document.createTextNode(item.text));
        }
        list.append(li);
      });
      wrapper.append(list);
    }
    return wrapper;
  });
  document.getElementById("dialog-details").replaceChildren(...detailNodes);
  document.getElementById("dialog-tools").replaceChildren(...project.tools.map((tool) => {
    const tag = document.createElement("span"); tag.textContent = tool; return tag;
  }));
  lastProjectButton = trigger;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add("dialog-open");
  closeButton.focus({ preventScroll: true });
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project, button));
});
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  if (lastProjectButton) lastProjectButton.focus({ preventScroll: true });
});
// Only a click that starts and ends on the backdrop dismisses the sheet.
let backdropPointerDown = false;
function isOutsideDialog(event) {
  const rect = dialog.getBoundingClientRect();
  return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
}
dialog.addEventListener("pointerdown", (event) => { backdropPointerDown = isOutsideDialog(event); });
dialog.addEventListener("click", (event) => {
  if (backdropPointerDown && isOutsideDialog(event)) dialog.close();
  backdropPointerDown = false;
});
dialog.querySelector(".dialog-contact").addEventListener("click", () => dialog.close());

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimeout = setTimeout(() => { toast.classList.remove("is-visible"); }, 3500);
}

document.getElementById("copy-email").addEventListener("click", async () => {
  const email = "abdulrafaysyedofficial@gmail.com";
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(email);
    showToast("Email copied. Let’s connect.");
  } catch {
    showToast(`Copy this address: ${email}`);
    const range = document.createRange();
    range.selectNodeContents(document.querySelector(".email-address"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
