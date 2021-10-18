import Knex from 'knex';

export function getConfigForHost(host: string) : Knex.Config {
  return {
    client: 'pg',
    connection: {
      host,
      port: 5435,
      database: 'dydx_dev',
      user: 'dydx_dev',
      password: 'dydxserver123',
    },
    pool: {
      min: 1,
      max: 2,
    },
    migrations: {
      directory: `${__dirname}/migrations/migration_files/`,
    },
    seeds: {
      directory: `${__dirname}/seeds/tests`,
    },
  };
}

export const knexPrimaryConfigForEnv: Knex.Config = getConfigForHost('localhost');

export const knexReadReplicaConfigForEnv:
Knex.Config = getConfigForHost('localhost');

const logging = {
  log: {
    warn() {},
    error() {},
    deprecate() {},
    debug() {},
  },
};

export const knexPrimary: Knex = Knex({
  ...knexPrimaryConfigForEnv,
  ...logging,
});
