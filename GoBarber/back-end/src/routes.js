import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'hello Jefferson' });
})


export default routes;