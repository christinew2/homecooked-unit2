import { Dish } from "../models/dish.js"

export {
    index
}

function index(req,res) {
    Dish.find({isBuy:true})
    .then (dishes => {
        res.render("buyers/index", {
            dishes,
            title: "I'm Cravin'!",
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/buyers")
    })
}