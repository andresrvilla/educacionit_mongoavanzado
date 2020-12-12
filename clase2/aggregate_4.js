var con = new Mongo();
var db = con.getDB("clasedos");

var cursor = db.compras.aggregate(
    [
        { 
            $project: {
                cantidad: "$cantidad",
                valor: "$valor",
                costo: {
                    $multiply: ["$cantidad","$valor"]
                }
            }
        }
    ]
);

while(cursor.hasNext()){
    var o = cursor.next();
    printjson(o);
}