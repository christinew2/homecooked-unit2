import { Dish } from "../models/dish.js"

export {
    buyersIndex,
    sellersIndex,
    newDish as new,
}

function buyersIndex(req,res) {
    Dish.find({isBuy:true})
    .then (dishes => {
        res.render("dishes/buyers", {
            dishes,
            title: "I'm Cravin'!",
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/dishes/buyers")
    })
}

function sellersIndex(req,res) {
    Dish.find({isBuy:false})
    .then (dishes => {
        res.render("dishes/sellers", {
            dishes,
            title: "I'm Cookin'!",
        })
    })
    .catch (err => {
        console.log(err)
        res.redirect("/dishes/sellers")
    })
}

function newDish(req,res){
    console.log("HELLO")
}