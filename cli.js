#!/usr/bin/env node
import { resolve } from 'path';
import { Command } from 'commander';
import getHandlers from './index.js';
import pojoStick from 'pojo-stick';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
);

;(async () => {
  // persistent appData
  const appData = await pojoStick(resolve('.', '.data-store.json'))

  const { test } = getHandlers({ appData })

  const program = new Command();

  program
    .version(pkg.version)
    .description('__REPLACE_DESCRIPTION_WITH_MAKE_CMD__')
    .option('-d, --debug', 'enable debug mode')
  ;
  
  program
    .command('test <action> [type] [rest...]')
    .description('Test out the CLI API')
    .action(test)
  ;
  
  program.parse(process.argv);
})()
