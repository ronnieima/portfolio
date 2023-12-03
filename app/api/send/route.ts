import { EmailTemplate } from '../../contact/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: 'Darius <dariusboldy@resend.dev>',
      to: 'ronnie.imagawa@gmail.com',
      subject: `Contact message from imagawa.dev : ${name} - ${email}`,
      react: EmailTemplate({
        message: message,
        name: name,
        email: email,
      }) as React.ReactElement,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
