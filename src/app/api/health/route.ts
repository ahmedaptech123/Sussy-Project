import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    app: "vaelen",
    note: "Health endpoint only; this does not verify database, payment, or email connectivity."
  });
}
