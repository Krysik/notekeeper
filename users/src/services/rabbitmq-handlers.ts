import RabbitMq from "./rabbitmq";
import User, { IUser } from '../models/user';

const rabbitmq = new RabbitMq();
const handlers = () => {
  rabbitmq.consume('notekeeper', 'user.create', async (msg) => {
    const user = JSON.parse(msg.content.toString()) as IUser;
    console.log(user);

    const result = await User.create(user);
    rabbitmq.publish('notekeeper', 'api-gateway.user', result);
  })
}

export default handlers;
