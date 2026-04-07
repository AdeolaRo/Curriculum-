import { state } from "./state.js";
import { renderCV } from "./preview.js";

export function initUI() {

  document.getElementById("name").addEventListener("input", e => {
    state.cv.name = e.target.value;
    renderCV();
  });

  document.getElementById("title").addEventListener("input", e => {
    state.cv.title = e.target.value;
    renderCV();
  });

  document.getElementById("email").addEventListener("input", e => {
    state.cv.email = e.target.value;
    renderCV();
  });

  document.getElementById("phone").addEventListener("input", e => {
  state.cv.phone = e.target.value;
  renderCV();
  });

  document.getElementById("addSkill").addEventListener("click", () => {
    const input = document.getElementById("skillInput");
    if (input.value) {
      state.cv.skills.push(input.value);
      input.value = "";
      updateSkills();
      renderCV();
    }
  });

  document.getElementById("addExp").addEventListener("click", () => {
    state.cv.experiences.push({ job: "Poste", company: "Entreprise" });
    updateExperiences();
    renderCV();
  });

  // Dropdown
document.getElementById("template").addEventListener("change", e => {
  state.ui.template = e.target.value;
  renderCV();
});

// Bouton Mode ATS
document.getElementById("atsMode").addEventListener("click", () => {
  state.ui.template = "ats";
  renderCV();
});

}

function updateSkills() {
  const container = document.getElementById("skills");
  container.innerHTML = state.cv.skills.map(s => `<div>${s}</div>`).join("");
}

function updateExperiences() {
  const container = document.getElementById("experiences");

  container.innerHTML = state.cv.experiences.map((exp, i) => `
    <input value="${exp.job}" data-i="${i}" class="job">
    <input value="${exp.company}" data-i="${i}" class="company">
  `).join("");

  document.querySelectorAll(".job").forEach(el => {
    el.addEventListener("input", e => {
      state.cv.experiences[e.target.dataset.i].job = e.target.value;
      renderCV();
    });
  });

  document.querySelectorAll(".company").forEach(el => {
    el.addEventListener("input", e => {
      state.cv.experiences[e.target.dataset.i].company = e.target.value;
      renderCV();
    });
  });
}
