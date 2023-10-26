import {
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="input" validation={{ required: true }} />
        <label htmlFor="email">Email</label>
        <TextField name="email" validation={{ required: true }} />
        <label htmlFor="message">Message</label>
        <TextAreaField name="message" validation={{ required: true }} />
        <Submit>Send Message</Submit>
      </Form>
    </>
  )
}

export default ContactPage
