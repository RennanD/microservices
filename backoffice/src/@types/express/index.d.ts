import { Producer } from 'kafkajs';
import { RolesDTO } from '../../constants/permissions';

declare global {
  namespace Express {
    interface Request {
      producer: Producer;
      user: {
        id: string;
        role: RolesDTO;
      };
    }
  }
}
