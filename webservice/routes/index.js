var express = require("express");
var router = express.Router();
var mysql = require("mysql");
const multer = require("multer"); // v1.0.5
var nodemailer = require("nodemailer");
const upload = multer(); //npm i multer
var modsql = require("./sql");
let mail = "bouaicha.abdennour@gmail.com";
var transporter = nodemailer.createTransport({
    Use: {
        service: "gmail",

        Goto: "https: //myaccount.google.com/lesssecureapps",

        Enable: "Allow less secure apps: ON",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
    },
    auth: {
        user: mail,
        pass: "***",
    },
});
let send = () => {
    var mailOptions = {
        from: "bouaicha <" + mail + ">",
        to: "todo <hbusinesssquare@gmail.com>",
        subject: "Traitement d'une tache",
        text: "Enrgistrement avec succées!",
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};
router.get("/", function(req, res, next) {
    res.render("index", { title: "TODOLIST", sinc: Date.now() });
});
/*************************************TABLEAU STANDARD***********************************************************************/
router.post("/tache", upload.array(), function(req, res, next) {
    modsql.ins(req.body);
    send();
});
router.post("/tache/:id_tache", upload.array(), function(req, res, next) {
    modsql.up(req.body, req.params.id_tache);
    //    res.redirect('/table');
});
router.post("/tache/del/:id_tache", upload.array(), function(req, res, next) {
    modsql.del(req.params.id_tache);
    send();
});
router.post(
    "/tache/stat/:type/:id_tache",
    upload.array(),
    function(req, res, next) {
        modsql.stat(req.params.id_tache, req.params.type);
        send();
    }
);
/**************************************WEBSERVICE**************************************/
router.get("/tache", function(req, res, next) {
    modsql.con.query(modsql.sql, function(err, result, fields) {
        res.json(result);
    });
});
router.get("/categ", function(req, res, next) {
    modsql.con.query(modsql.sql_categ, function(err, result, fields) {
        res.json(result);
    });
});
router.get("/tache/:id_tache", function(req, res, next) {
    modsql.con.query(
        modsql.sql_sel,
        req.params.id_tache,
        function(err, result, fields) {
            res.json(result);
        }
    );
});
router.get("/tache/categ/:categ/statut/:stat", function(req, res, next) {
    modsql.con.query(
        modsql.sql_stat(req.params.categ, req.params.stat),
        function(err, result, fields) {
            res.json(result);
        }
    );
});

module.exports = router;