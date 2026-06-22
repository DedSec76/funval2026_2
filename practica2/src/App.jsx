import './index.css'
import { useState } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  const [transactions, setTransactions ] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");    
    
  function addTransaction(e) {
    // prevenir reload
    e.preventDefault()

    if(text.trim() !== "" && amount.trim() !== "") {
      
      // crear objeto
      const newItem = {
        id: Date.now(), 
        text, 
        amount: Number(amount) || 0
      }

      // Agregar a la lista de transacciones
      setTransactions(prev => [...prev, newItem]);

      // Limpiar los inputs
      setText("")
      setAmount("")

    } else {
      e.target.querySelector("p").classList.remove("hidden")
      return setTimeout(() => {
        e.target.querySelector("p").classList.add("hidden")
      }, 3000)
    }
  }

  function deleteTransaction(id) {
      setTransactions(prev => prev.filter(t => t.id !== id))
  }

  const wallet = {
    total: transactions.reduce((acum, t) => acum + t.amount ,0),
    expense: transactions.reduce((acum, t) => (t.amount < 0) ? acum + t.amount : acum, 0),
    income: transactions.reduce((acum, t) => (t.amount > 0) ? acum + t.amount : acum, 0)
  }
  
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Balance Hero */}
      <Hero {...wallet} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-t border-primary/10 divide-primary/10">
          
          {/* Left Column: Transaction Form */}
          <section className="p-8">
            <h3 className="text-lg font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">add_circle</span>
              Nueva Transacción
            </h3>

            <form className="space-y-5" onSubmit={addTransaction}>
              <p className="hidden text-sm text-rose-500 bg-rose-100 p-2 text-center mb-4 italic ">
                Por favor ingrese los datos de la transacción
              </p>
              {/* Concepto de transaccion */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-muted ml-1">Concepto</label>
                <input
                  onChange={(e) => setText(e.target.value)}
                  className="w-full h-12 px-4 rounded-lg border border-primary/20 bg-card text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="Ej. Alquiler"
                  type="text"
                  value={text}
                />
              </div>

              {/* Monto de transaccion */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-muted ml-1">Monto</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-bold">$</span>
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full h-12 pl-8 pr-4 rounded-lg border border-primary/20 bg-card text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="0.00"
                    type="number"
                    value={amount}
                  />
                </div>
                <p
                  className="text-[10px] text-muted mt-1 italic"
                >
                  (Positivo = ingreso, negativo = gasto)
                </p>
              </div>

              <button 
                  className="cursor-pointer w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                <span className="material-symbols-outlined">add</span>
                Agregar Transacción
              </button>
            </form>
          </section>

          {/* Right Column: History List */}
          <section className="p-8">
            <h3 className="text-lg font-bold mb-6 text-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">history</span>
                Historial
              </div>
              <span className="text-xs font-normal text-muted">Últimos movimientos</span>
            </h3>
            
            <div className="space-y-3">
              {/* Items: Income / Expense */}
              {transactions.length <= 0 ? 
                  <div className="border-2 border-dashed border-border/75 rounded-lg p-8 flex flex-col items-center justify-center text-muted/80">
                      <span className="material-symbols-outlined text-3xl mb-1">receipt_long</span>
                      <p className="text-xs">No hay movimientos registrados. ¡Agrega uno!</p>
                  </div> : ""}
                
              {transactions.map(t => (
                  <div key={t.id} className={`group relative flex items-center justify-between p-4 bg-muted/5 rounded-lg border-l-4 ${t.amount > 0 ? "border-emerald-500": "border-rose-500"} hover:bg-muted/10 transition-all`}>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground">{t.text}</span>
                      <span className="text-[10px] text-muted uppercase tracking-wider">{new Date(t.id).toDateString() === new Date().toDateString() 
                                                                                          ? "Hoy" : "Ayer"
                                                                                        },{" "} 
                                                                                        {new Date(t.id).toLocaleTimeString("es-PE", {
                                                                                          hour: "2-digit",
                                                                                          minute: "2-digit"
                                                                                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`${t.amount < 0 ? "text-rose-500" : "text-emerald-500"}  font-black tracking-tight`}>${t.amount > 0 ? "+" : ""}{t.amount.toFixed(2)}</span>
                      <button className="cursor-pointer w-6 h-6 flex items-center justify-center rounded-full bg-muted text-slate-500 hover:bg-rose-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      onClick={() => deleteTransaction(t.id)}
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </section>
      </div>

      {/* Footer / Stats */}
      <Footer />
    </>
  )
}
