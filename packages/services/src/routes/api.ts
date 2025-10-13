import { Router } from 'express';
import healthRouter from './health';

const router: Router = Router();

router.use('/health', healthRouter);

router.get('/', (req, res) => {
  res.json({ 
    message: 'Longevity Services API',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
    endpoints: {
      health: '/api/health',
      docs: '/api/docs' // Future documentation endpoint
    }
  });
});

export default router;
