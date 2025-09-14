import redis from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log("Incrementing view count");
  const body = await request.json();
  const slug = body.slug as string | undefined;
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  // Get IP from x-forwarded-for header (most reliable for production)
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : request.headers.get("x-real-ip") || "unknown";

  if (ip === "unknown") {
    console.log("IP not found");
    return new NextResponse("IP not found", { status: 400 });
  }

  // Hash the IP and turn it into a hex string
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(ip)
  );
  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const isNew = await redis.set(["deduplicate", hash, slug].join(":"), true, {
    nx: true,
    ex: 24 * 60 * 60,
  });
  if (!isNew) {
    return new NextResponse(null, { status: 202 });
  }

  await redis.incr(["writing", slug].join(":"));
  return new NextResponse(null, { status: 202 });
}
