import { Dish } from "../models/dish.js"

export {
    index
}

function index(req,res) {
    Dish.find({})
    .then (dishes => {
        res.render("dishes/index", {
            dishes,
            title: "HERE ARE THE DISHES"
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/dishes")
    })
}