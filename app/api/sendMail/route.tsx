// app/api/sendMail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email, subject, message } = await req.json();

  // Create a Nodemailer transporter using your email service settings
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Contact Form Submission: ${subject}`,
      text: `Email: ${email}\nMessage: ${message}`,
    });
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ message: 'Email sending failed.' }, { status: 500 });
  }
}
