export default function Hero({total, expense, income}) {
    return (
        <div className="px-8 py-10 bg-primary/5 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary/70 mb-2">Total Balance</p>

          <h2 className="text-6xl font-black text-foreground tracking-tighter">${total.toFixed(2)}</h2>

          <div className="mt-6 flex gap-8">
            <div className="text-center">
              <p className="text-xs text-muted uppercase font-bold">Income</p>
              <p className="text-emerald-500 font-bold text-lg"> +${income.toFixed(2)}</p>
            </div>

            <div className="w-px bg-primary/10"></div>

            <div className="text-center">
              <p className="text-xs text-muted uppercase font-bold">Expense</p>
              <p className="text-rose-500 font-bold text-lg"> -${expense.toFixed(2)}</p>
            </div>
          </div>
        </div>
    )
}