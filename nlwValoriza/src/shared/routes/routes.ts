//importando router express
import { Router } from "express";
import { CreateUserController } from "../../modules/useCases/CreateUserController";
import { CreateTagController } from "../../modules/useCases/CreateTagController";
import { ensureAdmin } from "../infra/middlewares/ensureAdmin";
import { AuthenticateuserController } from "../../modules/useCases/AuthenticateUserController";
import { CreateComplimentController } from "../../modules/useCases/CreateComplimentController";
import { ensureAuthenticated } from "../infra/middlewares/ensureAuthenticated";
import { ListSendComplimentsByUserController } from "../../modules/useCases/ListUserSendComplimentsController";
import { ListReceiverComplimentsByUserController } from "../../modules/useCases/ListUserReceiveComplimentsController";
import { ListTagController } from "../../modules/useCases/ListTagController";
import { ListUserController } from "../../modules/useCases/ListUserController";

//instanciando objeto de router
const router = Router();

//instanciando classe  controller
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateuserController();
const complimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListSendComplimentsByUserController()
const listUserReceiveComplimentsController = new ListReceiverComplimentsByUserController()
const listTagController = new ListTagController()
const listUserController = new ListUserController()

//rota de post
router.post("/users", createUserController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)

router.post('/login', authenticateUserController.handle)

router.post('/compliments', ensureAuthenticated, complimentController.handle)

router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)

router.get('/users/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)

router.get('/tags', ensureAuthenticated, listTagController.handle)

router.get('/users', ensureAuthenticated, listUserController.handle)
//exportando routes
export { router }
