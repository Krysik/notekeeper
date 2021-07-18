import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import RabbitMq from '../services/rabbitmq';

type EndpointResponse = Response | void;

const rabbitmq = new RabbitMq();

const getUser = (req: Request, res: Response, next: NextFunction): EndpointResponse => {
  try {
    const id = req.params.id;
    console.log(id);

    return res.json({ message: 'Get single user' })
  } catch (error) {
    next(error);
  }
}

const createUser = (req: Request, res: Response): EndpointResponse => {
  try {
    const body = req.body;
    const correlationId = uuidv4();
    console.log(body);

    rabbitmq.channel.publish('notekeeper', 'user.create', Buffer.from(JSON.stringify(body)), {
      appId: 'api-gateway',
      correlationId
    })
    rabbitmq.consume('notekeeper', 'api-gateway.user', (msg) => {
      if (msg.properties.correlationId === correlationId) {
        const user = JSON.parse(msg.content.toString());
        res.status(201).json({
          message: 'User created successfully',
          item: user
        })
      }
    })
  } catch (error) {
    // next(error);
    console.log(error);
    res.status(500).json({ message: 'internal server error' })
  }
}

const updateUser = (req: Request, res: Response, next: NextFunction): EndpointResponse => {
  try {
    const id = req.params.id;
    console.log(id);
    return res.json({ message: 'User updated successfully' })
  } catch (error) {
    next(error);
  }
}

const deleteUser = (req: Request, res: Response, next: NextFunction): EndpointResponse => {
  try {
    const id = req.params.id;
    console.log(id);
    return res.json({ message: 'User updated successfully' })
  } catch (error) {
    next(error);
  }
}

export {
  getUser,
  createUser,
  updateUser,
  deleteUser
}



