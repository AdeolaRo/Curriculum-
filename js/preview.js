import { state } from "./state.js";

export function renderCV() {
  const cv = document.getElementById("cv");

  cv.innerHTML = `
    <div class="cv-header">
      <h1>${state.cv.name || "Votre nom"}</h1>
      <p>${state.cv.title || "Titre"}</p>
      <p>${state.cv.email || ""}</p>
      <p>${state.cv.phone || ""}</p>
    </div>

    <div class="cv-section">
      <h3>Compétences</h3>
      ${state.cv.skills.map(s => `<span class="skill">${s}</span>`).join("")}
    </div>

    <div class="cv-section">
      <h3>Expérience</h3>
      ${state.cv.experiences.map(e => `
        <div>
          <strong>${e.job}</strong>
          <p>${e.company}</p>
        </div>
      `).join("")}
    </div>
  `;
}
