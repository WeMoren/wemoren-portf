export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }

    console.log("NEW MESSAGE:", body);

    return Response.json(
      {
        success: true,
        message: "Message received successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
