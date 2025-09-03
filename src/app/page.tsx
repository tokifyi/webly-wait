"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! You're on the waitlist.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Navigation */}
      <nav className="border-b border-slate-200/50 py-6 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Webly</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Create your website with AI in minutes
          </h1>
          
          <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Just describe your idea and watch as AI creates a beautiful, professional website in seconds.
          </p>
          
          {/* Waitlist Form */}
          <Card id="waitlist-form" className="max-w-lg mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-xl font-semibold text-slate-900 mb-2">Join the Waitlist</CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Get early access when we launch.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-8 pb-8">
              <form onSubmit={handleSubmit}>
                <Input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  type="email" 
                  required
                  disabled={status === "loading"}
                  className="h-12 border-2 border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 rounded-xl transition-all duration-200 mb-4 text-base"
                />
                <Button 
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-50 rounded-xl font-medium text-base transition-all duration-200 hover:shadow-lg"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                </Button>
                {message && (
                  <p className={`text-sm text-center ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}>
                    {message}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simple Process */}
      <section className="py-20 px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">How it works</h2>
            <p className="text-lg text-slate-600">Three simple steps to your website</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Describe</h3>
              <p className="text-base text-slate-600 leading-relaxed">Tell us about your business</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Generate</h3>
              <p className="text-base text-slate-600 leading-relaxed">AI creates your website</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Publish</h3>
              <p className="text-base text-slate-600 leading-relaxed">Go live instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
            Want early access?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Join the waitlist and be first to know when we launch.
          </p>
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            onClick={() => {
              document.getElementById('waitlist-form')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Join Waitlist
          </Button>
        </div>
      </section>

            {/* Minimal Footer */}
      <footer className="border-t border-slate-200/50 py-12 px-8 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © 2025 Webly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
