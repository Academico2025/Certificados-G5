// Simulación de base de datos de certificados
const certificates = {
    2023: [
        { id: "123456789", name: "***********", file: "cert_2023_123456789.pdf" },
        { id: "987654321", name: "***********", file: "cert_2023_987654321.pdf" }
    ],
    2024: [
        { id: "123456789", name: "Juan Pérez", file: "cert_2024_123456789.pdf" },
        { id: "987654321", name: "María Gómez", file: "cert_2024_987654321.pdf" }
    ],
    2025: [
        { id: "1059362653", name: "BURBANO MUÑOZ DEILY YASBETH", file: "BURBANO_MUÑOZ_DEILY_YASBETH.pdf" },
        { id: "1059363247", name: "DELACRUZ BENAVIDES VALERY SOFIA", file: "DELACRUZ BENAVIDES VALERY SOFIA.pdf" },
	{ id: "1110054600", name: "GALINDEZ FREIRE SANTIAGO", file: "GALINDEZ_FREIRE_SANTIAGO.pdf" },
	{ id: "1059362995", name: "IMBACHI ORDOÑEZ BRIDNY ROXANA", file: "IMBACHI ORDOÑEZ BRIDNY ROXANA.pdf" },
	{ id: "1059363057", name: "RODRIGUEZ BASTIDAS ANTHONY YELSID", file: "RODRIGUEZ BASTIDAS ANTHONY YELSID.pdf" },
    ],
    2026: [
        { id: "123456789", name: "**********", file: "cert_2026_123456789.pdf" },
        { id: "987654321", name: "**********", file: "cert_2026_987654321.pdf" }
    ],
    2027: [
        { id: "123456789", name: "**********", file: "cert_2027_123456789.pdf" },
        { id: "987654321", name: "**********", file: "cert_2027_987654321.pdf" }
    ],
    2028: [
        { id: "123456789", name: "**********", file: "cert_2028_123456789.pdf" },
        { id: "987654321", name: "**********", file: "cert_2028_987654321.pdf" }
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