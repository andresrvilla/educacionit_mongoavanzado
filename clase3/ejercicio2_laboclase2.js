var con = new Mongo();
var db = con.getDB("educacion");

var cursor = db.cursos.aggregate([
    { $group: { _id: "$by_user", horasTotal: { $sum: "$horas" }, cantidadCursos: { $sum: 1 }} }
]);

while (cursor.hasNext()){
    printjson(cursor.next());
}