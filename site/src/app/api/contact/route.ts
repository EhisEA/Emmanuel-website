import { Resend } from "resend";
import { NextResponse } from "next/server";
import { buildContactEmailHtml } from "@/lib/email-template";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const recipients = (process.env.CONTACT_TO_EMAILS || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    if (recipients.length === 0) {
      throw new Error("No recipient emails configured.");
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: recipients,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: buildContactEmailHtml(name, email, message),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
