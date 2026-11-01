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
        "Conduct candidate interviews on an ongoing basis using the company’s structured interview framework, which I have been trained to follow.",
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
    eyebrow: "OSMANIA UNIVERSITY / BBA · ACADEMIC PROJECT",
    title: "Understanding the PC buyer.",
    summary: "A market-research project completed during my Bachelor of Business Administration, comparing assembled and pre-built PCs and the factors behind purchasing decisions.",
    sections: [
      { title: "The research question", text: "The project explored how buyers compare assembled and pre-built PCs, considering their needs, product preferences, and cost-to-performance value." },
      { title: "Research approach", items: [
        "Used primary and secondary research to compare the two product options.",
        "Designed questionnaires and gathered input through buyer and seller surveys and interviews at Chenoy Trade Center in Hyderabad.",
        "Considered academic and professional users as distinct customer groups.",
        "Compared purchasing preferences and product positioning, and organized the findings into a research report."
      ] },
      { title: "What this developed", text: "The project built my experience in questionnaire design, consumer research, customer segmentation, and comparative analysis. It also gave me practice turning research findings into evidence-based marketing recommendations." }
    ],
    tools: ["Primary research", "Secondary research", "Questionnaire design", "Customer segmentation", "Comparative analysis"]
  },
  timsMints: {
    eyebrow: "LAMBTON COLLEGE / POSTGRADUATE MARKETING · ACADEMIC CAPSTONE",
    title: "Tim’s Mints.",
    summary: "A capstone project for my postgraduate program in Marketing Management & Professional Sales, connecting a marketing plan with campaign concepts and creative production.",
    sections: [
      { title: "My contribution", text: "I architected the marketing plan for Tim’s Mints, working from pricing and positioning through to sales promotions, sponsored social media, and campaign planning." },
      { title: "Building the marketing plan", items: [
        "Developed the pricing approach and product positioning.",
        "Designed sales promotions as part of the broader marketing plan.",
        "Planned sponsored social media marketing and campaign activities.",
        "Connected the promotional approach with the advertisements and content needed to communicate it."
      ] },
      { title: "Creative execution", text: "I created advertisements and edited video content using Canva, bringing the marketing plan into tangible campaign materials." },
      { title: "What this demonstrates", text: "The capstone brought together strategic planning and hands-on execution: making decisions about pricing and positioning, planning promotion, and producing the creative content to support the campaign." }
    ],
    tools: ["Pricing", "Positioning", "Sales promotions", "Sponsored social media", "Campaign planning", "Canva", "Video editing"]
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
      section.items.forEach((item) => { const li = document.createElement("li"); li.textContent = item; list.append(li); });
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
