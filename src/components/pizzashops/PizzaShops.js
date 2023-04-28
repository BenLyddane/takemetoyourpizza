import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import PizzaSidebar from '../dashboard/PizzaSidebar/PizzaSidebar'
const PizzaShops = () => {
  return (
    <ProSidebarProvider backgroundColor="#FFA600">
    <PizzaSidebar />
    <div>PizzaShops</div>
    </ProSidebarProvider>
  )
}

export default PizzaShops