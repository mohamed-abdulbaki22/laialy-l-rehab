import { useState } from 'react'
import AdminLogin from './AdminLogin'
import AdminHomePage from './AdminHomePage'
import PasswordManagement from './PasswordManagement'
import DonorList from './DonorList'
import OrgList from './OrgList'

import DonorListInfo1 from './DonorListInfo1'
import OrganizationListInfo1 from './OrganizationListInfo1'


function App() {
  const [count, setCount] = useState(0)

 


  return (
    <div>
    <AdminLogin/>
     </div>
  )
}

export default App
