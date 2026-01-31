import { Provider } from 'react-redux'
import './App.css'
import { store } from './Hooks/Redux-Toolkit/Store/Store'

import { RouterProvider } from 'react-router-dom'
import Routes from './Routing/Routes'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
    <Provider store={store}>
      <Toaster position='top-center' richColors/>
      <RouterProvider router={Routes}/>
    </Provider>
    </>
  )
}

export default App
