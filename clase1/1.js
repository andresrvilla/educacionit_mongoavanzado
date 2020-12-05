var con = new Mongo("localhost:27017");
var db = con.getDB("claseuno");

db.createCollection("nuevadesdescript");