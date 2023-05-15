import express from 'express';
import dataController from '../controllers/dataController';

const router = express.Router();

// GET /api/data
router.get('/:direction', dataController.getFlights);

export default router;