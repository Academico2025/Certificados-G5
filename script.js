const certificadosPorAño = {
  "2023": [
    { nombre: "BURBANO MUÑOZ DEILY YASBETH", archivo: "./certificados/2023/BURBANO_MUÑOZ_DEILY_YASBETH.pdf" },
    { nombre: "GALINDEZ FREIRE SANTIAGO", archivo: "./certificados/2023/GALINDEZ_FREIRE_SANTIAGO.pdf" }
  ],
  "2024": [
    { nombre: "Luis Martínez", archivo: "./certificados/2024/luis_martinez.pdf" }
  ],
  "2025": [
    { nombre: "María Rodríguez", archivo: "./certificados/2025/maria_rodriguez.pdf" }
  ],
  "2026": [] // Puedes añadir más estudiantes aquí
};

function showYear(year) {
  const container = document.getElementById("certificados-container");
  const certificados = certificadosPorAño[year];

  if (!certificados || certificados.length === 0) {
    container.innerHTML = `<p>No hay certificados disponibles para el año ${year}.</p>`;
    return;
  }

  let html = `<h3>Certificados del año ${year}</h3><ul>`;
  certificados.forEach(cert => {
    html += `
      <li class="certificado">
        📄 <a href="${cert.archivo}" target="_blank" rel="noopener">${cert.nombre}</a>
      </li>`;
  });
  html += `</ul>`;
  container.innerHTML = html;
}
