export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <a
        href="/api/auth/google"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Login with Google
      </a>
    </div>
  );
}