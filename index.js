const chalk = require('chalk');

module.exports = function getHandlers ({ appData }) {
  
  function test (action, type, rest) {
    appData.test = appData.test || { timesCalled: 0, lastCalledArgs: {} }
    const lastCalledArgs = appData.test.lastCalledArgs

    console.log('`test` called for the', ++appData.test.timesCalled, 'time')
    console.log('Current Args: ', chalk.blue(action), chalk.green(type), { rest })
    console.log('Previous Args:', chalk.blue(lastCalledArgs.action), chalk.green(lastCalledArgs.type), { rest: lastCalledArgs.rest })

    appData.test.lastCalledArgs = { action, type, rest }
  }

  return { test }
}