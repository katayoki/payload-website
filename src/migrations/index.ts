import * as migration_20260505_061821 from './20260505_061821';

export const migrations = [
  {
    up: migration_20260505_061821.up,
    down: migration_20260505_061821.down,
    name: '20260505_061821'
  },
];
