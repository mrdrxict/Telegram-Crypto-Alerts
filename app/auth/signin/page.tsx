export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Access your crypto alerts dashboard
          </p>
        </div>
        {/* Auth form component will be added later */}
        <div className="p-4 bg-muted rounded-lg text-center">
          <p className="text-muted-foreground">Authentication form coming soon</p>
        </div>
      </div>
    </div>
  )
}