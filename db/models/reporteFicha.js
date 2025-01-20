// db/models/reporteFicha.js
const db = require('../config'); 

// Función para obtener todos los registros de la tabla `listado_predios`
const getListadoCatastroPredio = async () => {
  const query = `
    SELECT * FROM reporte_ficha.listado_predios ORDER BY id_predio ASC;`;
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

module.exports = {
  getListadoCatastroPredio,
};