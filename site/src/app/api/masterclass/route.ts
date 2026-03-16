import { Resend } from "resend";
import { NextResponse } from "next/server";
import { buildMasterclassEmailHtml } from "@/lib/masterclass-email-template";

export async function POST(request: Request) {
  try {
    const { name, email, role, experience, goal, whyAdmit } = await request.json();

    if (!name || !email || !role || !experience || !goal) {
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

    const whyText = whyAdmit ? `\n\nWhy admit:\n${whyAdmit}` : "";

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: recipients,
      subject: `Masterclass Application — ${name} (${role})`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nRole: ${role}\nAI Experience: ${experience}\n\nGoal:\n${goal}${whyText}`,
      html: buildMasterclassEmailHtml(name, email, role, experience, goal, whyAdmit),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Masterclass form error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
