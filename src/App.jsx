
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import Layout from './Layout'
import Dashboard from "./pages/Dashboard"
import Beneficiaries from './pages/Beneficiaries'
import Transactions from "./pages/Transactions"
import Wallet from "./pages/Wallet"

import UploadDocument from "./pages/UploadDocument"
import CompleteTransactions from './pages/CompleteTransactions'
import TransactionReceipt from './pages/TransactionReceipt'

function App() {
 

  return (
    <Router>
      <Routes>
       <Route path="/" element={<Layout />}>
          {/* Define nested routes here */}
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="beneficiaries" element={<Beneficiaries/>}/>         
          <Route path="complete-transactions" element={<CompleteTransactions/>}/>
          <Route path="transaction-receipt" element={<TransactionReceipt/>}/>
          <Route path="transactions" element={<Transactions/>}/>
          <Route path="wallet" element={<Wallet/>}/>
          <Route path="upload-document" element={<UploadDocument/>}/>
        </Route>
     </Routes>
    </Router>
  )
}

export default App
