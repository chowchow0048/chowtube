let videos =[
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2mins ago",
        view: 59,
        id: 1
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2mins ago",
        view: 59,
        id: 2
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2mins ago",
        view: 1,
        id: 3
    },
]

export const trending = (req, res) => {
    res.render("home", {pageTitle: "Home", videos});
}
export const watch = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render("watch", {pageTitle: `Watching ${video.title}`, video});
}

export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    console.log(video);
    res.render("edit", {pageTitle: `Editing ${video.title}`, video});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    console.log(title);
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
}