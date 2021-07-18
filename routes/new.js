import { Router } from "express"
import { isLoggedIn } from '../middleware/middleware.js'
import * as newCtrl from "../controllers/new.js"


export {
    router
}

const router = Router()

router.get("/", isLoggedIn, newCtrl.index)