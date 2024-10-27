export function NotificationBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground rounded-full px-[0.25rem] size-[0.9rem] text-[0.5rem] flex items-center justify-center">
        9+
      </div>
    </div>
  );
}
