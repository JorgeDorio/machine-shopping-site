import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: "/acesso", whenAuthenticated: "redirect" },
  { path: "/cadastro", whenAuthenticated: "redirect" },
] as const;

const REDIRECT_TO_WHEN_NOT_AUTHENTICATED = "/acesso";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ||
    "cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e"
);

export const isValidToken = async (): Promise<boolean> => {
  const token = (await cookies()).get("token");

  if (!token) {
    console.error("Token não encontrado nos cookies.");
    return false;
  }

  try {
    const { payload } = await jwtVerify(token.value, SECRET);

    const exp = payload.exp as number;
    if (exp && exp < Date.now() / 1000) {
      console.error("Token expirado");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Erro na verificação do token:", error);
    return false;
  }
};

export async function middleware(req: NextRequest) {
  const segments = req.nextUrl.pathname.split("/").filter(Boolean);
  const tenant = segments[0];
  const subPath = "/" + segments.slice(1).join("/");

  const publicRoute = publicRoutes.find(
    (x) => x.path === subPath || subPath === ""
  );
  const isAuthenticated = await isValidToken();

  if (!isAuthenticated && publicRoute) return NextResponse.next();

  if (!isAuthenticated && !publicRoute) {
    const redirectUrl = new URL(
      `/${tenant}${REDIRECT_TO_WHEN_NOT_AUTHENTICATED}`,
      req.url
    );
    redirectUrl.searchParams.set(
      "redirectTo",
      req.nextUrl.pathname + req.nextUrl.search
    );
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.delete("token");
    return response;
  }

  if (isAuthenticated && publicRoute?.whenAuthenticated === "redirect") {
    const url = req.nextUrl.clone();
    url.pathname = `/${tenant}/`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
