import './index.css'

export default function App() {
  return (
    <>
      {/* Header Section */}
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

      {/* Balance Hero */}
      <div
          className="px-8 py-10 bg-primary/5 flex flex-col items-center justify-center text-center"
        >
          <p
            className="text-sm font-medium uppercase tracking-widest text-primary/70 mb-2"
          >
            Total Balance
          </p>
          <h2
            className="text-6xl font-black text-foreground tracking-tighter"
          >
            $0.00
          </h2>
          <div className="mt-6 flex gap-8">
            <div className="text-center">
              <p
                className="text-xs text-muted uppercase font-bold"
              >
                Income
              </p>
              <p className="text-emerald-500 font-bold text-lg">+$0.00</p>
            </div>
            <div className="w-px bg-primary/10"></div>
            <div className="text-center">
              <p
                className="text-xs text-muted uppercase font-bold"
              >
                Expense
              </p>
              <p className="text-rose-500 font-bold text-lg">-$0.00</p>
            </div>
          </div>
      </div>

      {/* Main Content Grid */}
      <div
          className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-primary/10 divide-primary/10"
        >
          {/* Left Column: Transaction Form */}
          <section className="p-8">
            <h3
              className="text-lg font-bold mb-6 text-foreground flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-xl"
                >add_circle</span
              >
              Nueva Transacción
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-muted ml-1"
                  >Concepto</label
                >
                <input
                  className="w-full h-12 px-4 rounded-lg border border-primary/20 bg-card text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Ej. Alquiler"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-sm font-semibold text-muted ml-1"
                  >Monto</label
                >
                <div className="relative">
                  <span
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-bold"
                    >$</span
                  >
                  <input
                    className="w-full h-12 pl-8 pr-4 rounded-lg border border-primary/20 bg-card text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
                <p
                  className="text-[10px] text-muted mt-1 italic"
                >
                  (Positivo = ingreso, negativo = gasto)
                </p>
              </div>
              <button
                className="cursor-pointer w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined">add</span>
                Agregar Transacción
              </button>
            </form>
          </section>

          {/* Right Column: History List */}
          <section className="p-8">
            <h3
              className="text-lg font-bold mb-6 text-foreground flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl"
                  >history</span
                >
                Historial
              </div>
              <span className="text-xs font-normal text-muted"
                >Últimos movimientos</span
              >
            </h3>
            <div className="space-y-3">
              {/* Item 1: Income */}
              <div
                className="group relative flex items-center justify-between p-4 bg-muted/5 rounded-lg border-l-4 border-emerald-500 hover:bg-muted/10 transition-all"
              >
                <div className="flex flex-col">
                  <span
                    className="text-sm font-bold text-foreground"
                    >Pago Nómina</span
                  >
                  <span
                    className="text-[10px] text-muted uppercase tracking-wider"
                    >Hoy, 09:00 AM</span
                  >
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-emerald-500 font-black tracking-tight"
                    >+$500.00</span
                  >
                  <button
                    className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full bg-muted text-slate-500 hover:bg-rose-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              </div>
              {/* Item 2: Expense */}
              <div
                className="group relative flex items-center justify-between p-4 bg-muted/5 rounded-lg border-l-4 border-rose-500 hover:bg-muted/10 transition-all"
              >
                <div className="flex flex-col">
                  <span
                    className="text-sm font-bold text-foreground"
                    >Compra Pizza</span
                  >
                  <span
                    className="text-[10px] text-slate-400 uppercase tracking-wider"
                    >Ayer, 08:30 PM</span
                  >
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-rose-500 font-black tracking-tight"
                    >-$20.00</span
                  >
                  <button
                    className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full bg-muted text-foreground hover:bg-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              </div>

              {/* Empty State Placeholder (Visual hint) */}
              <div
                className="border-2 border-dashed border-border/75 rounded-lg p-8 flex flex-col items-center justify-center text-muted/55"
              >
                <span className="material-symbols-outlined text-3xl mb-1"
                  >receipt_long</span
                >
                <p className="text-xs">No hay más transacciones</p>
              </div>
            </div>
          </section>
      </div>

      {/* Footer / Stats */}
      <footer className="px-8 py-4 bg-primary/5 text-center">
          <p
            className="text-[10px] text-muted font-medium uppercase tracking-widest"
          >
            React Wallet • Desktop Edition • 2026
          </p>
      </footer>
    </>
  )
}
