import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    if (newCount >= 10) {
      setMessage("🔥 You've reached the limit!")
    } else {
      setMessage("")
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1
      setCount(newCount)
      setMessage("")
    } else {
      setMessage("🚫 Cannot go below zero!")
    }
  }

  return (
    <div style={styles.container}>
      <h1>Click Counter</h1>
      <p style={styles.counter}>{count}</p>
      <div>
        <button style={styles.button} onClick={handleIncrement}>Increase</button>
        <button style={styles.button} onClick={handleDecrement}>Decrease</button>
      </div>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '15%',
    fontFamily: 'Arial',
  },
  counter: {
    fontSize: '4rem',
    margin: '20px 0',
    color: '#007bff',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: 'red',
    fontWeight: 'bold',
  }
}

export default App
