var out = [];
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist",
});
con.connect(function(err) {});
var sql = "select * from tache order by id_tache desc";
var sql_sel = "select * from tache where id_tache=?";
var sql_categ = "select categorie from tache group by categorie";
var sql_stat = (categ, stat) => {
    let req_c = categ == "1" ? "1" : "categorie='" + categ + "'";
    let req_s = stat == "1" ? "1" : "statut='" + stat + "'";
    return "select * from tache where " + req_c + " and " + req_s;
};
var ins = (pack) => {
    var sql_inser = "INSERT INTO tache set ?";
    con.query(sql_inser, [pack], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
};
var up = (pack, id_tache) => {
    var sql_up = "update tache set ? where id_tache=?";
    con.query(sql_up, [pack, id_tache], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    // console.log('id_tache=' + id_tache);
};
var del = (id_tache) => {
    var sql_del = "delete from tache where id_tache=?";
    con.query(sql_del, [id_tache], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    // console.log('id_tache=' + id_tache);
};
var stat = (id_tache, type) => {
    var sql_act = "update tache set statut='" + type + "' where id_tache=?";
    con.query(sql_act, [id_tache], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    // console.log('id_tache=' + id_tache);
};
exports.ins = ins;
exports.up = up;
exports.del = del;
exports.con = con;
exports.sql = sql;
exports.sql_sel = sql_sel;
exports.sql_categ = sql_categ;
exports.sql_stat = sql_stat;
exports.stat = stat;