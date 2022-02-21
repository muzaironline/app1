const jwt = require('jsonwebtoken');
const pool = require('../database');
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client("953999418916-g6ht104mq1rdooi3iickb4olava8qj3k.apps.googleusercontent.com")

// Login Controller
exports.login = async (req, res)=>{
    console.log(req.body.login);
    const {email, pass} = req.body.login;
    try{
        const data = await pool.query("SELECT * FROM app_users WHERE email = $1 AND pass = $2", [email, pass]);
        // console.log(data.rows);
        if (data.rows.length != 0){
            const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_JWT);
            res.json({accessToken: accessToken,
                    status: "Success"});

             }
         else   res.json({accessToken: null,
                            status: "Failed"});
        }
    catch (err){
        console.log(err);
    }
};


// Signup Controller
exports.register = async (req, res)=>{
    const {fullname, username, email, pass} = req.body.register;
    // console.log(req.body.register);
    try{
        const data = await pool.query("INSERT INTO app_users (fullname, username, email, pass) VALUES ($1, $2, $3, $4)", [fullname, username, email, pass]);
        if(data != null){
            res.send('Success');
        }
        else res.send('Failed');
    }
    catch(err){
        console.log(err);
    }
};



// Authorize Access Token
// exports.authorizeAccessToken = (req, res) =>{

// }


exports.googleAuthController = async (req, res) => {
    const { token }  = req.body
    console.log(req.body);
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "953999418916-g6ht104mq1rdooi3iickb4olava8qj3k.apps.googleusercontent.com"
        });
        const { name, email, picture } = ticket.getPayload();   
        console.log(name, email, picture); 
        // res.json(name, email, picture);
        res.json({status:sendStatus(200) ,name, email, picture});

    }
    catch(err){
        res.sendStatus(403);
    }


    // const user = await db.user.upsert({ 
    //     where: { email: email },
    //     update: { name, picture },
    //     create: { name, email, picture }
    // })
    // res.status(201)
}