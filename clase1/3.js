var con = new Mongo("localhost:27017");
var db = con.getDB("claseuno");

// Consulta en si: Condiciones a la busqueda
// https://docs.mongodb.com/manual/reference/operator/query/
var query = { marca: { $eq: "BMW" }, fecha_modelo: { $gte: 2000 }  };
//Proyeccion
var proy = { patente: 0, color: 0, slogan: 0 , active: 0 }

var cursor = db.autos.find(query,proy).sort({fecha_modelo: -1});

while(cursor.hasNext()){
    var o = cursor.next();
    printjson(o);
}