import { Dish } from "../models/dish.js"

export {
    index
}

function index(req,res) {
    Dish.find({isBuy:false})
    .then (dishes => {
        res.render("sellers/index", {
            dishes,
            title: "I'm Cookin'!",
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/sellers")
    })
}