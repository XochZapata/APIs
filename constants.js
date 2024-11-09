
/*
 * LOCAL DATABASE Config
 * 
 *  Para acceder a una BD en la nube debes configurar un archivo .env
 */
const dbHost = "mysql-348ac4c5-tec-bc9b.k.aivencloud.com";
const dbPort ="27084";
const dbUser = "avnadmin";
const dbPass ="AVNS_YdJUgmW2f7mT96seqrK";
const dbName = "ioT";



/*
 * Server General Configuration
 */
const serverPort = 3000
const contextURL = '/iot'; //If needed, project context
const api = '/api'; // Sugested API URL

//SENSOR 1 URLS. Configurar URLS por cada sensor.
const getTemperatureSensor = '/getTemperatures'
const getTemperatureSensorByDate = '/getTemperatures'
const postTemperatureSensor = '/insertTemperature' 
const postTemperatureSensor2 = '/insertTemperature2'; //Implemented Endpoint URL
const postsensores= '/sensores'; //Implemented Endpoint URL

/*
 * DB Queries
 * Agregar queries por sensor.
 */
const selectTemperature = 'SELECT * FROM temps';
const selectTemperatureByDate = 'SELECT * FROM temps WHERE fecha between ? and ?';
const insertTemperature = 'INSERT INTO temps (id,valor,fecha) values (?,?,?)';
const insertTemperature2 = 'INSERT INTO temps2 (valor) values (?) ';
const insertaSensores = 'INSERT INTO sensores (tipo,dato,unidades,fecha) values (?,?,?,?) ';


module.exports= {
   dbHost,dbPort,dbUser,dbPass,dbName,serverPort, contextURL,api,getTemperatureSensor,
   getTemperatureSensorByDate,postTemperatureSensor,postTemperatureSensor2,selectTemperature,selectTemperatureByDate,insertTemperature,insertTemperature2,insertaSensores,postsensores
}