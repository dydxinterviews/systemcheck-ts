import { knexPrimary } from '../src/db/knexfile';
import { createRedisClient, getAsync, setAsync } from '../src/db/redis';

const res = createRedisClient('redis://localhost:6382', 500);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const redis: any = res?.client;
export const connect = res?.connect;

describe('tests', () => {
  it('test postgres connection', async () => {
    const queryDB = await knexPrimary.raw('select * from pg_indexes');
    expect(queryDB).not.toEqual(null);
  });

  it('test redis', async () => {
    await setAsync({
      key: 'key',
      value: 'value',
    }, redis);

    const val: string | null = await getAsync('key', redis);
    expect(val).toEqual('value');
  });
});
