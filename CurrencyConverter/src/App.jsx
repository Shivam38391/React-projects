import { useState } from "react";

import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrency";

import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [conversionAmount, setconversionAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log("currencyInfo", currencyInfo);

  const options = Object.keys(currencyInfo);

  console.log("options", options);

  const swap = () => {
    setfrom(to);
    setto(from);

    setconversionAmount(amount);
    setAmount(conversionAmount);
  };

  const convert = () => {
    setconversionAmount(amount * currencyInfo[to]); // coverted amount
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1679397743664-f9384e6ad49d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => { e.preventDefault(); 
          
          //we want to call a method
          convert()
          }}>

            <div className="w-full mb-1">
              <InputBox 

///they are propertis that i metioned in the component


              label="From" 
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}


              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
              

              ///they are propertis that i metioned in the component
              amount={ conversionAmount }
              currencyOptions={options}
              onCurrencyChange={(currency) => setto(currency)}

              selectCurrency={from}
              amountDisable
              
              
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase() } to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
