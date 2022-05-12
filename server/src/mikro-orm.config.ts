import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core'
import path from 'path';

export default {
  allowGlobalContext: true,
  migrations: {
  path: path.join(__dirname, './migrations'),
  glob: '!(*.d).{js,ts}'
  },
  entities: [Post],
  dbName: 'inkling',
  type: 'postgresql',
  debug: !__prod__,
  user: 'postgres',
  password: 'postgres',
} as Parameters<typeof MikroORM.init>[0];