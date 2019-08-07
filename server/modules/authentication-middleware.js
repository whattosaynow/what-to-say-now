const rejectUnauthenticated = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

//this middleware checks the user's cookie to see if they are an admin
//if true, then they can do what's next()
//if not, then send a 403
const rejectNonAdmin = (req, res, next) => {
  // check if logged in
  if (req.user.is_admin) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};


module.exports = { rejectUnauthenticated, rejectNonAdmin };
