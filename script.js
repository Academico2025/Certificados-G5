const CertificadosPorAño = {
  "2023": [
    { nombre: "BURBANO MUÑOZ DEILY YASBETH", archivo: "Certificados/2023/BURBANO_MUÑOZ_DEILY_YASBETH.pdf" },
    { nombre: "GALINDEZ FREIRE SANTIAGO", archivo: "Certificados/2023/GALINDEZ_FREIRE_SANTIAGO.pdf" }
  ],
  "2024": [
    { nombre: "QUINAYAS GUAMANGA LAURA ISABEL", archivo: "./Certificados/2024/QUINAYAS_GUAMANGA_LAURA_ISABEL.pdf" }
  ],
  "2025": [
    { nombre: "SANTACRUZ DIAGO MAUREN ELIANA", archivo: "Certificados/2025/SANTACRUZ_DIAGO_MAUREN_ELIANA.pdf" }
  ],
  "2026": []
};

function showYear(year) {
  const container = document.getElementById("Certificados-container");
  const Certificados = CertificadosPorAño[year];

  if (certificados.length === 0) {
    container.innerHTML = `<p>No hay certificados disponibles para el año ${year}.</p>`;
    return;
  }

  let html = `<h3>Certificados del año ${year}</h3><ul>`;
  Certificados.forEach(cert => {
    html += `
      <li class="Certificado">
        📄 <a href="${cert.archivo}" target="_blank">${cert.nombre}</a>
      </li>`;
  });
  html += `</ul>`;
  container.innerHTML = html;
}
