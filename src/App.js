import {useState} from "react";

function App() {
    const [bill, setBill] = useState(0);
    const [tip1, setTip1] = useState(0);
    const [tip2, setTip2] = useState(0);

    function handleReset() {
        setBill(0);
        setTip1(0);
        setTip2(0);
    }

  return (
    <div className="app">
      <Bill bill={bill} setBill={setBill}/>
      <Feedback tip={tip1} setTip={setTip1}>
          <p>How did you like the service?</p>
      </Feedback>
      <Feedback tip={tip2} setTip={setTip2}>
          <p>How did your friend like the service?</p>
      </Feedback>
      <Pay bill={bill} tip1={tip1} tip2={tip2}/>
      <Reset handleReset={handleReset}/>
    </div>
  );
}

function Bill({bill,setBill}) {
    function handleBill(e) {
        e.preventDefault()
        setBill(Number(e.target.value));
    }

    return (
        <div>
            <label>How much was the bill ?</label>
            <input type="text" value={bill} onChange={(e) =>handleBill(e)}/>
        </div>
    );
}

function Feedback({children, tip,setTip}) {
    function handleTip(e) {
        e.preventDefault();
        setTip(Number(e.target.value));

    }

    return (
      <div>
          {children}
          <select name="" id="" value={tip} onChange={(e) => handleTip(e)}>
              <option value="5">It could do better (5%)</option>
              <option value="10">It was good (10%)</option>
              <option value="20">Absolutely amazing! (20%)</option>
          </select>
      </div>
  );
}

function Pay({bill,tip1,tip2}) {
    const tip = bill * (tip1 + tip2)/200;
    return (
        <div className={"pay"}>
            <p >You pay ${bill + tip} (${bill} + ${tip} tip)</p>
        </div>
    );
}

function Reset({handleReset}) {
    return (
        <button type="reset" onClick={handleReset}>Reset</button>
    );
}

export default App;
