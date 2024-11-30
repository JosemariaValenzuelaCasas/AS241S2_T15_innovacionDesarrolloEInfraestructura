const express = require('express');
const { conexion,connection} = require('./database');
const router = express.Router();
const moment = require('moment');
moment.locale('es');

// Configuración de multer para almacenar archivos temporalmente
// Ruta para la página principal en "index.html"

router.get('/', (req, res) => {
    const today = moment().format('YYYY-MM-DD'); // Obtener la fecha actual en formato YYYY-MM-DD

    // Obtener el nombre del día y el mes en formato legible
    const dayOfWeek = moment().format('dddd'); // Día de la semana (Ej. "lunes")
    const dateString = moment().format('DD [de] MMMM [del] YYYY'); // Día completo (Ej. "30 de noviembre del 2024")

    // Consultar en la base de datos si hay algún evento para la fecha actual
    const query = 'SELECT titulo, descripcion FROM calendarioCivico WHERE fecha = ?';
    connection.query(query, [today], (err, results) => {
        if (err) {
            console.log('Error al consultar la base de datos:', err);
            return res.send('Error al obtener los datos');
        }

        let message = `Hoy es ${dayOfWeek} ${dateString}`;

        if (results.length > 0) {
            // Si hay un evento, agregar el título y la descripción del evento
            const event = results[0]; // Suponiendo que solo habrá un evento por fecha
            message += `, celebramos el día de ${event.titulo}: ${event.descripcion}`;
        }
        console.log(message)
        // Ahora renderizamos la vista EJS y pasamos el mensaje como variable
        res.render('index', { message: message });
    });
});



router.get("/soporte", function (req, res) {
    const consulta = `
        SELECT mainPregunta, respuesta
        FROM preguntaUsuario
        WHERE estado_pregunta = 'activa' AND mainPregunta != 'Sin consolidar'
        GROUP BY mainPregunta, respuesta
        ORDER BY COUNT(*) DESC
        LIMIT 5;
    `;

    conexion.query(consulta, function (error, resultados) {
        if (error) {
            res.status(500).send("Error al obtener datos de la base de datos");
        } else {
            res.render("soporte", { preguntasTop: resultados });
        }
    });
});


router.post('/validar', async function (req, res) {
    const datos = req.body;
    // Imagen guardada localmente
    let nombre = datos.name;
    let celular = datos.phone;
    let email = datos.email;
    let mensaje = datos.message;
    let main = "Sin consolidar";
    let respuesta ="Pendiente de respuesta";
    try {

        // Guardar los datos en la base de datos
        let registrar = `INSERT INTO preguntaUsuario (nombre, celular, email, pregunta, mainPregunta, respuesta) 
                         VALUES ('${nombre}', '${celular}', '${email}', '${mensaje}', '${main}', '${respuesta}');`;

        conexion.query(registrar, function (error) {
            if (error) {
                return res.status(500).json({ success: false, message: "Error al registrar el producto." });
            }

            res.json({ success: true, message: "Pregunta registrada correctamente." });
        })
    } catch (error) {
        console.error("Error ", error);

        res.status(500).json({ success: false, message: "Error p." });
    }
});

router.get("/paginas/soporte", function (req, res) {
    const consulta = `
        SELECT mainPregunta, respuesta
        FROM preguntaUsuario
        WHERE estado_pregunta = 'activa' AND mainPregunta != 'Sin consolidar'
        GROUP BY mainPregunta, respuesta
        ORDER BY COUNT(*) DESC
        LIMIT 5;
    `;

    conexion.query(consulta, function (error, resultados) {
        if (error) {
            res.status(500).send("Error al obtener datos de la base de datos");
        } else {
            res.render("soporte", { preguntasTop: resultados });
        }
    });
});


router.post('/validar', async function (req, res) {
    const datos = req.body;
    // Imagen guardada localmente
    let nombre = datos.name;
    let celular = datos.phone;
    let email = datos.email;
    let mensaje = datos.message;
    let main = "Sin consolidar";
    let respuesta ="Pendiente de respuesta";
    try {

        // Guardar los datos en la base de datos
        let registrar = `INSERT INTO preguntaUsuario (nombre, celular, email, pregunta, mainPregunta, respuesta) 
                         VALUES ('${nombre}', '${celular}', '${email}', '${mensaje}', '${main}', '${respuesta}');`;

        conexion.query(registrar, function (error) {
            if (error) {
                return res.status(500).json({ success: false, message: "Error al registrar el producto." });
            }

            res.json({ success: true, message: "Pregunta registrada correctamente." });
        })
    } catch (error) {
        console.error("Error ", error);

        res.status(500).json({ success: false, message: "Error p." });
    }
});

module.exports = router;

