import { Dish } from "../models/dish.js"

export {
    index
}

function index(req,res) {
    Dish.find({})
    .then (dishes => {
        res.render("buyers/index", {
            dishes,
            title: "HERE ARE THE DISHES",
            user: req.user ? req.user : null
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/buyers")
    })
}