import { state } from "./state.js";
import { renderStandard } from './standardPreview.js';

export function renderATS() {
  const p = state.cv;

  return `
    <div class="ats">
      <h1>${p.name}</h1>
      <h2>${p.title}</h2>
      <p>${p.email} | ${p.phone}</p>

      <h3>Expérience professionnelle</h3>
      ${p.experiences.map(e => `
        <div class="ats-experience">
          <strong>${e.job}</strong><br>
          ${e.company}<br>
          <em>${e.date || ""}</em>
          <ul>
            <li>${e.desc || ""}</li>
          </ul>
        </div>
      `).join("")}

      <h3>Compétences</h3>
      <p>${p.skills.join(", ")}</p>

      ${p.interests.length ? `
        <h3>Centres d'intérêt</h3>
        <p>${p.interests.join(", ")}</p>
      ` : ""}
    </div>
  `;
}

export function renderCV() {
  const cv = document.getElementById("cv");

  if (state.ui.template === "ats") {
    cv.innerHTML = renderATS();
  } else {
    cv.innerHTML = renderStandard();
  }
}
