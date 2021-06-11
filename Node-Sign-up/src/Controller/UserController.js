import { validationResult } from "express-validator";
exports.processRequest = function (req, res) {
    // function (req, res) {

    const errors = validationResult(req);

    if (errors.errors.length) {
        res.render('../src/views/sample', { errors: errors.errors });
    } else {
        res.render('../src/views/success', {
            data: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                isSubscribed: req.body.subscribe ? true : false
            }
        });
    }

}