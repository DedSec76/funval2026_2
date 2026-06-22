export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-6 border-b border-primary/10">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg text-white">
              <span className="material-symbols-outlined block">account_balance_wallet</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground"
            >
              React Wallet
            </h1>
          </div>
          
          <button
            className="cursor-pointer p-2 hover:bg-muted/15 rounded-full transition-colors"
          >
            <span
              className="material-symbols-outlined text-foreground/65"
              >settings</span
            >
          </button>
      </header>
    )
}