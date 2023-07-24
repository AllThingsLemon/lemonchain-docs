import React from 'react'
import { useEffect } from 'react'

const ContractWizard = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://wizard.lemonchain.io/build/embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
  }, [])
  return <oz-wizard></oz-wizard>
}
export default ContractWizard
