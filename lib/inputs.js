import inquirer from 'inquirer';
const base = inquirer.createPromptModule();

const prompt = async ({ name = "__last_asked_question__", ...props } = {}) => {
  return (await base({name, ...props}))[name]
}

const notEmpty = (input) => {
  if (!input) {
    return 'Please provide an answer'
  }

  return true
}

const isNumber = (input) => {
  const empty = notEmpty(input) 
  if (empty !== true) return empty

  if (isNaN(Number(input))) {
    return `Please type a number, received "${input}"`
  }

  return true
}

export const text = (message = '', options = {}) => prompt({ validate: notEmpty, ...options, type: 'input', message });
export const number = async (message = '', options = {}) => {
  const numText = await prompt({ validate: notEmpty, ...options, type: 'input', message, validate: isNumber })
  return Number(numText)
};
export const password = (message = '', options = {}) => prompt({ validate: notEmpty, ...options, type: 'password', message });

export const checkbox = (label, choices = [], options = {}) => prompt({ validate: notEmpty, ...options, name: label, type: 'checkbox', choices });
export const select = (label, choices = [], options = {}) => prompt({ validate: notEmpty, ...options, name: label, type: 'list', choices });

export const confirm = (message = '', defOption = false, options = {}) => prompt({ validate: notEmpty, ...options, default: defOption, type: 'confirm', message });

export const validate = {
  isNumber,
  notEmpty,
};