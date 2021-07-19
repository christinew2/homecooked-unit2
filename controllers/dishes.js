import { Dish } from "../models/dish.js"

export {
    buyersIndex,
    sellersIndex,
    newDish as new,
    create,
    show,
    createComment,
    edit,
    update,
    deleteDish as delete,
    updateInterest,
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
    .populate("comments.author")
    .populate("whoWants")
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

function createComment(req,res){
    Dish.findById(req.params.id, function(err, dish){
        req.body.author = req.user.profile
        dish.comments.push(req.body)
        dish.save(function(err){
            res.redirect(`/dishes/${dish._id}`)
        })
    })
}

function edit(req, res){
    Dish.findById(req.params.id)
    .then(dish => {
        res.render("dishes/edit", {
            dish, 
            title: "Edit Dish"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
    })
}

function update(req, res){
    Dish.findById(req.params.id)
    .then(dish => {
        if (dish.owner.equals(req.user.profile._id)){
            dish.update(req.body, {new: true})
            .then(dish => {
                console.log(dish)
                res.redirect(`/dishes/${dish._id}`)
            })
        } else {
            throw new Error("NOT AUTHORIZED")
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/`)
    })
}

function deleteDish(req,res){
    Dish.findById(req.params.id)
    .then(dish => {
        if (dish.owner.equals(req.user.profile._id)){
            dish.delete()
            .then(() =>{
                res.redirect("/")
            })
        } else {
            throw new Error("NOT AUTHORIZED")
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
    })
}

function updateInterest(req,res){
    Dish.findById(req.params.id, function(err, dish){
        dish.whoWants.push(req.user.profile)
        dish.save(function(err){
            if (dish.isBuy){
                res.redirect("/dishes/buyers")
            } else {
                res.redirect("/dishes/sellers")
            }
        })
    })
}