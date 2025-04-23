// Simulación de base de datos de certificados
const certificates = {
    2023: [
        { id: "123456789", name: "***********", file: "certificados/2023/cert_2023_123456789.pdf" },
        { id: "987654321", name: "***********", file: "certificados/2023/cert_2023_987654321.pdf" }
    ],
    2024: [
        { id: "123456789", name: "YEVELYN VALENTINA CASTILLO NOGUERA", file: "certificados/2024/YEVELYN_VALENTINA_CASTILLO_NOGUERA.pdf" },
        { id: "987654321", name: "DANYELY ESTEFANIA DOMINGUEZ ORDOÑEZ", file: "certificados/2024/DANYELY_ESTEFANIA_DOMINGUEZ_ORDOÑEZ.pdf" },
	{ id: "987654321", name: "MAIRA JULIANA IBARRA CRIOLLO", file: "certificados/2024/MAIRA_JULIANA_IBARRA_CRIOLLO.pdf" },
 	{ id: "987654321", name: "EMMANUEL SANTIAGO PAPAMIJA ORDOÑEZ", file: "certificados/2024/EMMANUEL_SANTIAGO_PAPAMIJA_ORDOÑEZ" },
	{ id: "987654321", name: "JUAN DAVID RODRIGUEZ NARVAEZ", file: "certificados/2024/JUAN_DAVID_RODRIGUEZ_NARVAEZ.pdf" },
 	{ id: "987654321", name: "JHOSTYN ALEJANDRO RODRIGUEZ NOGUERA", file: "certificados/2024/JHOSTYN_ALEJANDRO_RODRIGUEZ_NOGUERA.pdf" },
 	{ id: "987654321", name: "MAICOL ESTIBEN TELLO MOSQUERA", file: "certificados/2024/MAICOL_ESTIBEN_TELLO_MOSQUERA.pdf" },
 	{ id: "987654321", name: "JOSE MANUEL GÓMEZ LARA", file: "certificados/2024/JOSE_MANUEL_GÓMEZ_LARA.pdf" },
    ],
    2025: [
        { id: "1059362653", name: "BURBANO MUÑOZ DEILY YASBETH", file:"certificados/2025/BURBANO_MUÑOZ_DEILY_YASBETH.pdf" },
        { id: "1059363247", name: "DELACRUZ BENAVIDES VALERY SOFIA", file:"certificados/2025/DELACRUZ BENAVIDES VALERY SOFIA.pdf" },
	{ id: "1110054600", name: "GALINDEZ FREIRE SANTIAGO", file: "certificados/2025/GALINDEZ_FREIRE_SANTIAGO.pdf" },
	{ id: "1059362995", name: "IMBACHI ORDOÑEZ BRIDNY ROXANA", file: "certificados/2025/IMBACHI ORDOÑEZ BRIDNY ROXANA.pdf" },
	{ id: "1059363057", name: "RODRIGUEZ BASTIDAS ANTHONY YELSID", file: "certificados/2025/RODRIGUEZ BASTIDAS ANTHONY YELSID.pdf" },
    ],
    2026: [
        { id: "123456789", name: "**********", file: "certificados/2026/cert_2026_123456789.pdf" },
        { id: "987654321", name: "**********", file: "certificados/2026/cert_2026_987654321.pdf" }
    ],
    2027: [
        { id: "123456789", name: "**********", file: "certificados/2027/cert_2027_123456789.pdf" },
        { id: "987654321", name: "**********", file: "certificados/2027/cert_2027_987654321.pdf" }
    ],
    2028: [
        { id: "123456789", name: "**********", file: "certificados/2028/cert_2028_123456789.pdf" },
        { id: "987654321", name: "**********", file: "certificados/2028/cert_2028_987654321.pdf" }
    ]
};

function loadCertificates() {
    const year = document.getElementById('year').value;
    const certificateList = document.getElementById('certificate-list');
    certificateList.innerHTML = '';

    const certs = certificates[year] || [];
    if (certs.length === 0) {
        certificateList.innerHTML = '<p>No se encontraron certificados para este año.</p>';
        return;
    }

    certs.forEach(cert => {
        const div = document.createElement('div');
        div.className = 'certificate-item';
        div.innerHTML = `${cert.name} - <a href="${cert.file}" download>Descargar Certificado</a>`;
        certificateList.appendChild(div);
    });
}

function searchCertificate() {
    const idNumber = document.getElementById('id-number').value.trim();
    const year = document.getElementById('year').value;
    const certificateList = document.getElementById('certificate-list');
    certificateList.innerHTML = '';

    const certs = certificates[year] || [];
    const found = certs.find(cert => cert.id === idNumber);

    if (found) {
        const div = document.createElement('div');
        div.className = 'certificate-item';
        div.innerHTML = `${found.name} - <a href="${found.file}" download>Descargar Certificado</a>`;
        certificateList.appendChild(div);
    } else {
        certificateList.innerHTML = '<p>No se encontró un certificado con ese número de identificación.</p>';
    }
}

// Cargar certificados iniciales
document.addEventListener('DOMContentLoaded', loadCertificates);
