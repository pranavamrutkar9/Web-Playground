import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const generatePassword = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numbers)  str += "0123456789"
      if (symbols)  str += "!@#$%^&*-_=+"

      for (let i = 0; i < length; i++) {
        let char = str[Math.floor(Math.random()*(str.length-1) + 1)]
        pass += char
      }
      setPassword(pass)
    },
    [length, numbers, symbols, setPassword],
  )

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useMemo(generatePassword, [generatePassword])
  // generatePassword()

  useEffect(() => {
    generatePassword()
  }, [generatePassword])
  

  return (
    <>
      <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-600'>
        <h1 className='text-3xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden'>
          < input
            type="text" 
            value={password}
            className='outline-none w-full text-center bg-white p-2'
            readOnly
            ref={passwordRef}
          />
          <button 
            className='bg-blue-600 px-3 text-white active:scale-105'
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-1 my-3'>
          <div>
            <input
              type="range" 
              min={8} 
              max={20} 
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length" className="text-white">Length: {length}</label>
          </div>

          <div>
            <input 
              type="checkbox"
              defaultChecked={numbers}
              onChange={(e)=>{
                setNumbers(e.target.checked)
              }}
            />
            <label className="text-white">Include Numbers</label>
          </div>
          
          <div>
            <input 
              type="checkbox"
              defaultChecked={symbols}
              onChange={(e)=>{
                setSymbols(e.target.checked)
              }}
            />
            <label className="text-white">Include symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
