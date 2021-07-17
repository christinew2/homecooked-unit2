import { Router } from "express"
import * as sellersCtrl from "../controllers/sellers.js"

export {
    router
}

const router = Router()

router.get('/', sellersCtrl.index)