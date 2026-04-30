import React from 'react'
import { Button } from './Button.jsx'

export const App = () => {
  return (
    <div>
      <Button
        onClick={() => console.log('Button 1')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff'
        }}
      >
        кнопка 1
      </Button>
      <Button
        onClick={() => console.log('Button 2')}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white'
        }}
      >
        кнопка 2
      </Button>
    </div>
  )
}
