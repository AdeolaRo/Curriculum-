import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function exportPDF() {
  const cv = document.getElementById("cv");

  html2canvas(cv, { scale: 3 }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save("CV.pdf");
  });
}
