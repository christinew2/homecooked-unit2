import { Router } from "express"
import * as buyersCtrl from "../controllers/buyers.js"

export {
    router
}

const router = Router()

router.get('/', buyersCtrl.index)