const fakeUser = {
    userName: "Tom",
    userAge: "24",
    userSex: "Male",
}

export const seeUser = (req, res) => res.send("See User Profile");

export const userHome = (req, res) => res.render("userHome", {pageTitle: `${fakeUser.userName}`, fakeUser});