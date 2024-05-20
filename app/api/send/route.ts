import ContactFormEmail from "@/Email/contact-form-email";
import { getErrorMessage } from "@/lib/utils";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_dqTNQdbG_kSLuV5eow6r6f4Kiz5TecMH1");

export async function POST(request: Request) {
  const body = await request.json();
  const { senderEmail, message } = body;
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["jatinnaroraa5@gmail.com"],
      subject: "Hello world",
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return NextResponse.json(error);
  }
  return NextResponse.json(data);
}
