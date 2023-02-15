export const localsMiddleware = (req, res, next) => {
    console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Chowtube";
    // if(req.session.user){
    //     res.locals.loggedInUser = req.sesson.user;
    // }
    res.locals.loggedInUser = req.session.user;
    console.log("session:", req.session);
    next();
};