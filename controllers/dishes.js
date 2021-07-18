import { Dish } from "../models/dish.js"

export {
    buyersIndex,
    sellersIndex,
    newDish as new,
    create,
    show,
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
    req.body.owner = req.user.profile
    const dish = new Dish(req.body)
    dish.save(function(err){
        if(err){
            console.log(err)
            return res.redirect("/dishes/new")
        }
        res.redirect(`/dishes/${dish._id}`)
    })
}

function show(req,res){
    Dish.findById(req.params.id)
    .populate("owner")
    .then (dish => {
        res.render("dishes/show", {
            title: "Dish Details",
            dish,
       })
   })
   .catch(err => {
       console.log(err)
       res.redirect("/")
   })
}

