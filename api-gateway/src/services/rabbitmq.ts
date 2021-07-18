import amqp from 'amqplib';
import logger from './winston';

const AMQP_URL = process.env.AMQP_URL || 'amqp://localhost';

class RabbitMq {
  private static connection: amqp.Connection;

  private static channel: amqp.Channel;

  static rpcQueues = {
    users: 'users_rpc_queue'
  }

  get channel() {
    return RabbitMq.channel;
  }

  static async connect() {
    try {
      if (!RabbitMq.connection) {
        RabbitMq.connection = await amqp.connect(AMQP_URL);
      }
      if (!RabbitMq.channel) {
        RabbitMq.channel = await RabbitMq.connection.createChannel();
      }
      await RabbitMq.channel.assertExchange('notekeeper', 'topic');
      await RabbitMq.channel.assertQueue(RabbitMq.rpcQueues.users, {
        durable: true,
      });
      logger.info('The connection with rabbitmq has been established');
    } catch (error) {
      logger.error('Rabbitmq connection error');
      console.log(error);
    }
  }

  consume(
    exchange: string,
    topic: string,
    callback: (_message: amqp.ConsumeMessage) => void
  ) {
    if (!RabbitMq.channel) {
      throw new Error('The channel was not initialize');
    }
    let queue: amqp.Replies.AssertQueue;
    this.channel
      .assertQueue('', { exclusive: true })
      .then((q) => {
        queue = q;
        return this.channel.bindQueue(queue.queue, exchange, topic);
      })
      .then(() => {
        this.channel.consume(queue.queue, (msg) => {
          if (msg) {
            callback(msg);
            this.channel.ack(msg);
          }
        });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}

export default RabbitMq;
