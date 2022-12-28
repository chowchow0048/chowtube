export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
    console.log(req.params);
    res.send(`Watch video ${req.params.potato}`);
}
export const edit = (req, res) =>{
    console.log(req.params);
    res.send(`Edit video ${req.params.id}`);
} 
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send(`Delete Video ${req.params.id}`);
}
