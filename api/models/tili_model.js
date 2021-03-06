const connection = require('../database');
const db = require('../database');

const tili = {
  getById: function(id, callback) {
    return db.query('select * from tili where idtili=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from tili', callback);
  },
  add: function(tili, callback) {
    return db.query(
      'insert into tili (Saldo,Tilinumero) values(?,?)',
      [tili.Saldo, tili.Tilinumero],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from tili where idtili=?', [id], callback);
  },
  update: function(id, tili, callback) {
    return db.query(
      'update tili set Saldo=?, Tilinumero=? where idtili=?',
      [tili.Saldo, tili.Tilinumero, id],
      callback
    );
  },
  nosta: function(id, myArray,callback){
    var Summa=myArray.Summa;
    var Korttinumero=myArray.Korttinumero;
    var idkortti=myArray.idkortti;
    return db.query(
      'call nosta(?,?,?,?)',
    [id,Summa,Korttinumero,idkortti],
    callback
    );
  },
  talleta: function(id, myArray,callback){
    var Summa=myArray.Summa;
    var Korttinumero=myArray.Korttinumero;
    var idkortti=myArray.idkortti;
    return db.query(
      'call talleta(?,?,?,?)',
    [id,Summa,Korttinumero,idkortti],
    callback
    );
  }
}

module.exports = tili;