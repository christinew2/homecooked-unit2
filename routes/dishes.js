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
router.get("/:id", isLoggedIn, dishesCtrl.show)

router.post("/", dishesCtrl.create)