const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const nodemailer = require('nodemailer');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const numbersRouter = require('./routes/numbers.router');
const submitAnswersRouter = require('./routes/submitAnswers.router');
const adminRouter = require('./routes/admin.router');
const updateUserPrefsRouter = require('./routes/updateUserPrefs.router');
const deleteAccountRouter = require('./routes/deleteAccount.router');
const chartsRouter = require('./routes/charts.router');
const emailRouter = require('./routes/emails.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/numbers', numbersRouter);
app.use('/api/answer', submitAnswersRouter);
app.use('/api/admin', adminRouter);
app.use("/api/update-user-prefs", updateUserPrefsRouter);
app.use('/api/delete-account', deleteAccountRouter);
app.use('/api/charts', chartsRouter);
app.use('/api/emails', emailRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// nodemailer emails

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// const mailOptions = {
//   from: 'jpaulmolnar@gmail.com',
//   to: 'jpaulmolnar@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });