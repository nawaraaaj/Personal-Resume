export type ContactValues = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'

  if (!subject) errors.subject = 'Please enter a subject.'
  else if (subject.length < 3) errors.subject = 'Subject must be at least 3 characters.'

  if (!message) errors.message = 'Please enter a message.'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.'
  else if (message.length > 1000) errors.message = 'Message must be 1000 characters or fewer.'

  return errors
}