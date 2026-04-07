export function exportPDF() {
  const element = document.getElementById("cv");

  html2pdf().from(element).set({
    margin: 0.5,
    filename: "cv.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { format: "a4" }
  }).save();
}