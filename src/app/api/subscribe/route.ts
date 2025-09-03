import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existingEmail) {
      return NextResponse.json(
        { error: "You're already on the waitlist!" },
        { status: 400 }
      );
    }

    // Insert new email into waitlist table
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert([
        {
          email,
          created_at: new Date().toISOString(),
          status: "active"
        }
      ]);

    if (insertError) {
      console.error("Supabase error:", insertError);
      return NextResponse.json(
        { error: "Failed to add email to waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: "Successfully added to waitlist" 
    });

  } catch (_error) {
    console.error("Server error:", _error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
