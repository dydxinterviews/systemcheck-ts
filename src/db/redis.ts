import { promisify } from 'util';

import bluebird from 'bluebird';
import redis, { RedisClient } from 'redis';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

export function createRedisClient(
  url: string,
  reconnectTimeoutMs: number,
): {
  client: RedisClient,
  connect: () => Promise<void>,
} {
  const redisClient: RedisClient = redis.createClient({
    url,
    retry_strategy: () => {
      return reconnectTimeoutMs;
    },
  });

  const connectPromise: Promise<void> = new Promise((resolve) => redisClient.on('ready', () => {
    resolve();
  }));

  const redisConnect = async () => connectPromise;

  return { client: redisClient, connect: redisConnect };
}

export async function setAsync(
  {
    key,
    value,
  }: {
    key: string,
    value: string,
  },
  client: RedisClient,
): Promise<void> {
  const setAsyncFunc = promisify(client.set).bind(client);
  await setAsyncFunc(key, value);
}

export async function getAsync(key: string, client: RedisClient): Promise<string | null> {
  const getAsyncFunc = promisify(client.get).bind(client);
  return getAsyncFunc(key);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteAsync(key: string, client: any): Promise<number> {
  const deleteAsyncFunc = promisify(client.del).bind(client);
  return deleteAsyncFunc(key);
}
