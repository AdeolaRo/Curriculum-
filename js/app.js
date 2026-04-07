import { initUI } from "./ui.js";
import { renderCV } from "./preview.js";
import { exportPDF } from "./export.js";

initUI();
renderCV();

document.getElementById("download").addEventListener("click", exportPDF);