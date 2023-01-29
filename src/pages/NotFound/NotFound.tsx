import React from 'react'
import BaseLayout from '../../layout/Base/BaseLayout'

function NotFound() {
  return (
    <BaseLayout>
        <div style={{
            display:'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent:'center'
        }}>
        <h1>Oops Page Not Found | 404</h1>
        </div>
    </BaseLayout>
  )
}

export default NotFound
