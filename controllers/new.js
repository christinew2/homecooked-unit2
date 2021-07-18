import { Dish } from "../models/dish.js"

export {
    index
}

function index(req,res) {
    Dish.find({})
    .then (dishes => {
        res.render("new", {
            dishes,
            title: "New Dish",
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/")
    })
}