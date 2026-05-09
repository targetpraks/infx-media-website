export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-void" aria-label="Loading">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-md bg-lime flex items-center justify-center animate-pulse">
          <span className="text-void font-extrabold text-sm" aria-hidden="true">INFX</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="text-text-tertiary text-xs uppercase tracking-widest">Loading...</span>
        </div>
      </div>
    </div>
  );
}
