import Validator from 'validatorjs'

const messages = {
  required: 'The :attribute field is required.',
  email: 'The :attribute field must be a valid email address.',
  min: 'The :attribute field must be at least :min characters long.',
  regex: 'The :attribute field must contain at least one uppercase letter, one number, and one special character.',
}

export function validate(data, route) {

  console.log('Data to validate:', data) // Add this line

  let rules = {
    email: 'required|email',
    password: 'required|min:6',
  }
  
  if (route.path !== '/login') {
    rules.username = 'required|min:3|regex:/^[^\\s]*$/'
    rules.password += '|regex:/[A-Z]/|regex:/\d/|regex:/[^a-zA-Z0-9]/'
  }

  const validation = new Validator(data, rules, messages)

  if (validation.fails()) {
    const errors = validation.errors.all()
    console.log(errors)
    return Object.keys(errors).map((key) => ({ field: key, msg: errors[key] }))
  }
}