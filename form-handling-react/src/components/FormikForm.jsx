import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Formik form data:', values);

    // Mock API call
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log('Mock API response:', data))
      .catch((err) => console.error('Error:', err));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form style={{ maxWidth: 400, margin: 'auto' }}>
          <h2>User Registration (Formik)</h2>

          <div style={{ marginBottom: '10px' }}>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
