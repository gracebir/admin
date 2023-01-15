'use client'
import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
    font-size: 3rem;
    font-weight: 700;
    color: blue;
`

function Home() {
  return (
    <>
    <div>
        <Paragraph>
            Home
        </Paragraph>
    </div>
    </>
    
  )
}

export default Home
