import { Router } from "express"
import { isLoggedIn } from '../middleware/middleware.js'
import * as dishesCtrl from "../controllers/dishes.js"

export {
    router
}

const router = Router()

router.get("/buyers", dishesCtrl.buyersIndex)
router.get("/sellers", dishesCtrl.sellersIndex)
router.get("/new", isLoggedIn, dishesCtrl.new)

// THIS WORKS BUT HOW?
router.get("/:id", isLoggedIn, dishesCtrl.show)
router.get("/:id/edit", isLoggedIn, dishesCtrl.edit)

router.post("/", dishesCtrl.create)
router.post("/:id/comments", dishesCtrl.createComment)

router.put("/:id", isLoggedIn, dishesCtrl.update)