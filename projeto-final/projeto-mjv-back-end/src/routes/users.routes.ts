import { Request, Response, Router } from "express";
import { UserService } from "../services/user.service";
import { UserEntity } from "../entities/user.entity";

const userRouter = Router();
 userRouter.get('/', async (req: Request, res: Response) => {
    const users = await UserService.get();
    res.send(users);users
})
 userRouter.get('/user', async (req: Request, res: Response) => {
    const email = req.query.email as string;
    if(!email) {
        return res.status(400).send('Query Params Faltando!')
    }
    const user = await UserService.getByEmail(email);
    return res.send(user);  
});

 userRouter.post('/create', async (req: Request, res: Response) => {
    const receivedUser = req.body;
    await UserService.insert(receivedUser);
    res.send(receivedUser);
})

userRouter.put('/update', async (req: Request, res: Response) => {
    const receivedUser = req.body as UserEntity;
    if(receivedUser.id) {
        console.log(receivedUser.id);
        await UserService.update(receivedUser.id, receivedUser);
        res.send(receivedUser);
    } else { res.status(400).send(`ID Não Especificado!\n`); }
});
 userRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const userRemoved = await UserService.removeById(id);
    if(!userRemoved) {
        return res.status(404).send( `Não Existe Usuário com o Id: ${ id }` );
    }
    return res.send(userRemoved);
});

export default userRouter;