import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username, password } = await req.json();

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return new Response(
      JSON.stringify({ error: "Yetkisiz giriş" }),
      { status: 401 }
    );
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return new Response(
    JSON.stringify({ token }),
    { status: 200 }
  );
}
