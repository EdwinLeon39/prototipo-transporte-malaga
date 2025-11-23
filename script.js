function consultarRuta() {
    const ruta = document.getElementById("ruta").value;
    const parada = document.getElementById("parada").value;
    const hora = document.getElementById("horario").value;

    if (!hora) {
        document.getElementById("resultado").innerHTML = `
            <p>⚠️ Por favor selecciona una hora del viaje.</p>
        `;
        document.getElementById("resultado").classList.remove("oculto");
        return;
    }

    // Tiempos estimados por ruta
    const tiempos = {
        "Málaga – Concepción": "20 - 35 minutos",
        "Málaga – San José de Miranda": "15 - 25 minutos",
        "Málaga – Capitanejo": "40 - 50 minutos",
        "Málaga - Cerrito": "40 - 45 minutos",
        "Málaga – Enciso": "20,30 minutos",
        "Servicio Urbano": "15 - 25 minutos",
        "Zona Rural - Veredas": "20 - 50 minutos"
    };

    // Precios reales aproximados
    const precios = {
        "Málaga – Concepción": "$10.000 COP",
        "Málaga – San José de Miranda": "$8.000 COP",
        "Málaga – Capitanejo": "$12.000 COP",
        "Málaga - Cerrito": "9.000 COP",
        "Málaga – Enciso": "9.000 COP",
        "Servicio Urbano": "$4.000 COP",
        "Zona Rural - Veredas": "$2.000 - $8.000 COP"
    };

    const tiempoEstimado = tiempos[ruta] || "Tiempo no disponible";
    const precioPasaje = precios[ruta] || "No disponible";

    let mensaje = `
        <h3>📍 Resultado de la consulta</h3>
        <p><strong>Ruta:</strong> ${ruta}</p>
        <p><strong>Parada seleccionada:</strong> ${parada}</p>
        <p><strong>Hora del viaje:</strong> ${hora}</p>
        <p><strong>Tiempo estimado de llegada:</strong> ${tiempoEstimado}</p>
        <p><strong>💰 Precio del pasaje:</strong> ${precioPasaje}</p>
        <p>✔ Información aproximada basada en tarifas reales del transporte del municipio.</p>
    `;

    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").classList.remove("oculto");
}

function enviarReporte() {
    const problema = document.getElementById("problema").value;
    const comentario = document.getElementById("comentario").value;

    const mensaje = `
        <h3>✔ Reporte enviado</h3>
        <p><strong>Problema:</strong> ${problema}</p>
        <p>${comentario ? "Descripción: " + comentario : "Sin descripción adicional"}</p>
        <p>🙏 Gracias por apoyar la mejora del transporte en Málaga.</p>
    `;

    document.getElementById("mensaje").innerHTML = mensaje;
    document.getElementById("mensaje").classList.remove("oculto");
}

