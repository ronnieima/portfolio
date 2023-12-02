import { EmailTemplate } from '../../contact/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'ronnie.imagawa@gmail.com',
      subject: `${name} - ${email}`,
      react: EmailTemplate({ message: message }) as React.ReactElement,
    });
    console.log('email sent');
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
