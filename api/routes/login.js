const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');

router.post('/', 
  function(request, response) {
    if(request.body.korttinumero && request.body.pin){
      const korttinumero = request.body.korttinumero;
      const pin = request.body.pin;
        login.checkpin(korttinumero, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.length > 0) {
              bcrypt.compare(pin,dbResult[0].pin, function(err,compareResult) {
                if(compareResult) {
                  console.log("success");
                  response.send(true);
                }
                else {
                    console.log("wrong pin");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("user does not exists");
              response.send(false);
            }
          }
          }
        );
      }
    else{
      console.log("korttinumero or pin missing");
      response.send(false);
    }
  }
);

module.exports=router;