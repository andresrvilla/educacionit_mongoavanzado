var con = new Mongo();
var db = con.getDB("clasedos");

var cursor = db.autos.aggregate(
    [
        { $match: { "marca": "Chevrolet" } },
        { $match: { "fecha_modelo": 1992 } }
    ]
);

while(cursor.hasNext()){
    var o = cursor.next();
    printjson(o);
}