import { Dish } from "../models/dish.js"

export {
    buyersIndex,
    sellersIndex,
    newDish as new,
    create,
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
    res.render("dishes/new", {
        title: "Add A Dish!"
    })
}

function create(req,res){
    console.log(req.body)
}