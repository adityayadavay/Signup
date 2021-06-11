import express from "express";
import { validationResult, check } from "express-validator";
import {processRequest} from "./Controller/UserController";

const app = express();

//set view engine
app.set("view engine", "jade");

// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {

  res.render('sample');

});

app.post('/signup',
  check('firstName').notEmpty().withMessage('First name must not be empty'),
  check('lastName').notEmpty().withMessage('Last name must not be empty'),
  check('email').notEmpty().withMessage('Email must not be empty'),
  check('password')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 chars long'),
  check('phoneNumber')
    .matches(/^[0-9\s]*$/)
    .withMessage('Phone Number must contain a number only')
  , processRequest); 

app.listen(5000, function () {
  console.log('Node server is running..');
});