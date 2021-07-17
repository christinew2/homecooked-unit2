import { Router } from "express"
import * as dishesCtrl from "../controllers/dishes.js"

export {
    router
}

const router = Router()

router.get('/', dishesCtrl.index)