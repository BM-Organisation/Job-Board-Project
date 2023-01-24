import express from 'express'
const router = express.Router();
import {create,login } from '../../controllers/api/users.js';
import err from '../../config/ensureLoggedIn.js';
router.post('/', create);
router.post('/login', login);

export default router;