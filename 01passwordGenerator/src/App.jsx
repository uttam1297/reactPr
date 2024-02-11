import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charcterAllowed, setCharcterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charcterAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charcterAllowed, setPassword]);

  const copyPasswordClipBrd = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    
  },[password])
  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charcterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div
          className="flex shadow
        rounded-lg overflow-hidden mb-4"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordClipBrd}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex itm-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInp"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInp">Number</label>
          </div>
          <div className="flex itm-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charcterAllowed}
              id="charInp"
              onChange={() => {
                setCharcterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInp">Charcters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
