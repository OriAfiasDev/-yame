"use client";

import { supabase } from "@/app/supabase";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const errorParam = searchParams.get("error");
    const messageParam = searchParams.get("message");
    if (errorParam) setError(decodeURIComponent(errorParam));
    if (messageParam) setMessage(decodeURIComponent(messageParam));
  }, [searchParams]);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const isAdmin =
          user.user_metadata?.role === "admin" ||
          user.user_metadata?.is_admin === true;

        setUser(user);

        if (isAdmin) {
          await new Promise((resolve) => setTimeout(resolve, 300));
          router.push("/admin");
        } else {
        }
      }
    };

    checkUser();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: signInError, data } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }

      if (data.user) {
        const isAdmin =
          data.user.user_metadata?.role === "admin" ||
          data.user.user_metadata?.is_admin === true;

        if (isAdmin) {
          router.push("/admin");
        } else {
          setUser(data.user);
          setLoading(false);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      setUser(null);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="bg-red-50 mb-6 p-4 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {message && (
        <div className="bg-yellow-50 mb-6 p-4 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">{message}</p>
        </div>
      )}

      {!user ? (
        <form onSubmit={handleLogin} className="space-y-4 w-72" dir="rtl">
          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              אימייל
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-yame w-full"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700 text-sm">
              סיסמה
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="px-4 py-2 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-yame w-full"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !email || !password}
            className="bg-yame hover:bg-yame/90 disabled:opacity-50 px-4 py-3 rounded-xl w-full font-medium text-white transition-colors disabled:cursor-not-allowed"
          >
            {loading ? "טוען..." : "התחברות"}
          </button>
        </form>
      ) : (
        <div>
          <div className="bg-blue-50 mb-6 p-4 border border-blue-200 rounded-lg">
            <p className="mb-1 font-medium text-blue-900 text-sm">
              מחובר כ: {user.email}
            </p>
            <p className="text-blue-800 text-xs">
              {user.user_metadata?.role === "admin" ||
              user.user_metadata?.is_admin === true
                ? "אתה admin"
                : "אתה לא admin. פנה למנהל כדי לקבל גישה"}
            </p>
          </div>

          <button
            onClick={handleLogout}
            disabled={loading}
            className="bg-red-50 hover:bg-red-100 disabled:opacity-50 px-4 py-3 rounded-xl w-full font-medium text-red-700 transition-colors"
          >
            {loading ? "טוען..." : "התנתקות"}
          </button>
        </div>
      )}
    </>
  );
}
