import User from "../models/User"

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = async(req, res) => {
    const {name, username, email, password, location} = req.body;
    
    await User.create({
        name, username, email, password, location
    });

    return res.redirect("/login");
};

export const userHome = (req, res) => res.send("userHome");

export const seeUser = (req, res) => {
    const userName = req.params;

    res.send(`${userName}`);
}

export const login = (req, res) => res.send("login");