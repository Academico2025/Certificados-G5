const certificadosPorAño = {
  "2023": [
    { nombre: "Juan Pérez", archivo: "certificados/2023/juan_perez.pdf" },
    { nombre: "Ana Gómez", archivo: "certificados/2023/ana_gomez.pdf" }
  ],
  "2024": [
    { nombre: "Luis Martínez", archivo: "certificados/2024/luis_martinez.pdf" }
  ],
  "2025": [
    { nombre: "María Rodríguez", archivo: "certificados/2025/maria_rodriguez.pdf" }
  ],
  "2026": []
};

function showYear(year) {
  const container = document.getElementById("certificados-container");
  const certificados = certificadosPorAño[year];

  if (certificados.length === 0) {
    container.innerHTML = `<p>No hay certificados disponibles para el año ${year}.</p>`;
    return;
  }

  let html = `<h3>Certificados del año ${year}</h3><ul>`;
  certificados.forEach(cert => {
    html += `
      <li class="certificado">
        📄 <a href="${cert.archivo}" target="_blank">${cert.nombre}</a>
      </li>`;
  });
  html += `</ul>`;
  container.innerHTML = html;
}
