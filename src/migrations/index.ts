import * as migration_20260504_232249 from './20260504_232249';
import * as migration_20260505_061451 from './20260505_061451';

export const migrations = [
  {
    up: migration_20260504_232249.up,
    down: migration_20260504_232249.down,
    name: '20260504_232249',
  },
  {
    up: migration_20260505_061451.up,
    down: migration_20260505_061451.down,
    name: '20260505_061451'
  },
];
