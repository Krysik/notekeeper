import { UniqueConstraintError } from "sequelize";
import RabbitMq from "./rabbitmq";
import User, { IUser } from '../models/user';
import logger from "./winston";

const rabbitmq = new RabbitMq();
const handlers = () => {
  rabbitmq.consume('notekeeper', 'user.create', async (msg) => {
    const user = JSON.parse(msg.content.toString()) as IUser;
    console.log(user);
    try {
      const result = await User.create(user);
      rabbitmq.channel.publish('notekeeper', 'api-gateway.user', Buffer.from(JSON.stringify(result)), {
        appId: 'user',
        correlationId: msg.properties.correlationId
      });
    } catch (error) {
      logger.error(error);
      if (error instanceof UniqueConstraintError) {
        const errorMsg = {
          error: true,
          errors: error.errors,
          fields: error.fields
        }
        rabbitmq.channel.publish('notekeeper', 'api-gateway.user', Buffer.from(JSON.stringify(errorMsg)), {
          appId: 'user',
          correlationId: msg.properties.correlationId
        })
      }
    }
  })
}

export default handlers;
