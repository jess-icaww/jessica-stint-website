import { NextRequest, NextResponse } from "next/server"

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  })
}

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization")

  if (authHeader?.startsWith("Basic ")) {
    const [, password] = atob(authHeader.slice("Basic ".length)).split(":")
    if (process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD) {
      return NextResponse.next()
    }
  }

  return unauthorized()
}

export const config = {
  matcher: "/admin/:path*",
}
