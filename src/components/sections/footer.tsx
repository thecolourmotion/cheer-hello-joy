export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg md:text-xl font-bold">The Colour Motion</div>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            The place for your business branding.<br />
            <span className="text-foreground/60">2024 The Colour Motion. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
