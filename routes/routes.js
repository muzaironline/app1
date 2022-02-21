const authController =  require('../controllers/authController');
const deleteAcc =  require('../controllers/deleteAcc');
// import pool from '../database';

module.exports = (app)=> {

    app.route('/register').post(authController.register);
    app.route('/login').post(authController.login);
    app.route('/delete').post(deleteAcc.authorizeAccessToken, deleteAcc.deleteAccount);
    app.route('/auth/google').post(authController.googleAuthController);

};
