import { NextResponse } from "next/server";
import { contactMethods, projectTypes } from "@/lib/site";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const address = String(body.address ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const contactMethod = String(body.contactMethod ?? "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const valid =
    name &&
    phone &&
    emailOk &&
    address &&
    (projectTypes as readonly string[]).includes(projectType) &&
    (contactMethods as readonly string[]).includes(contactMethod);

  if (!valid) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
