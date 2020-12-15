#!/usr/bin/env node

const { Command } = require('commander');
const { test } = require('./index')
const pojoStick = require('pojo-stick')
const pkg = require('./package.json')


;(async () => {
  const persistentData = await pojoStick()

  const program = new Command();
  program
    .version(pkg.version)
    .description('Save the world by eating good food!')
    .option('-d, --debug', 'enable debug mode')
  
  const unknownAction = (x) => console.warn(`unknown action: "${x}"`)
  
  program
    .command('test <action> <type> [rest...]')
    .description('Test out the CLI API')
    .action(test)
  ;
  
  program.parse(process.argv);
})()
