// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const finalSubject =
      subject && subject.trim().length > 0 ? subject : "New contact from portfolio";

    const textBody = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    const { error } = await resend.emails.send({
      from: "Novo lead · Portfolio Leonardo <onboarding@resend.dev>", // or your verified sender
      to: "leodossantoslds@gmail.com",
      replyTo: email,
      subject: finalSubject,
      text: textBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
