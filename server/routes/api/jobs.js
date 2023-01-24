import express from 'express'
const router = express.Router();
import {create,index,show} from '../../controllers/api/jobs.js';


router.post('/', create);
router.get('/', index);
router.get('/:id',show);

export default router;