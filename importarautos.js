var con = new Mongo();
var db = con.getDB("clasedos");

var archivo = cat('./autos.json');
var datosJSON = JSON.parse(archivo);
db.autos.insert(datosJSON);