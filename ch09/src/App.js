import React from 'react'
import './App.css'
import Agreement from './Agreement'
import { ClimbingBoxLoader, GridLoader } from 'react-spinners'
import ErrorBoundary from './ErrorBoundary'
import ErrorScreen from './ErrorScreen'
import Status from './Status'
const Main = React.lazy(() => import('./Main'))

export default function App() {
  const [agree, setAgree] = React.useState(false)

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />
  return (
    <React.Suspense fallback={<GridLoader />}>
      <ErrorBoundary fallback={ErrorScreen}>
        {/* <React.Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </React.Suspense> */}
        <Status />
      </ErrorBoundary>
    </React.Suspense>
  )
}
