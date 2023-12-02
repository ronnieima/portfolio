import * as React from 'react';
import { Form } from './ContactCard';



export const EmailTemplate: React.FC<Readonly<Form>> = ({
  message, email, name
}) => (
  <div>
    <p>New contact message from imagawa.dev</p>
    <p>Sender: {name} {email}</p>
    <p>{message}</p>
  </div>
);
