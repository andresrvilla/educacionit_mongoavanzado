var con = new Mongo("localhost:27017");
var db = con.getDB("claseuno");

var cursor = db.autos.find();


while(cursor.hasNext()){
    var o = cursor.next();
    //printjson(o);
    //print(o.patente);
    db.resumenautos.insert({marca: o.marca, modelo: o.modelo, color: o.color});
}