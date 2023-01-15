import React from 'react'

const Menu = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-medium mb-4">Menu</h2>
    <div className="md:flex md:flex-wrap -mx-3">
      <div className="md:w-1/2 px-3 mb-6">
        <h3 className="text-base font-medium mb-2">Breakfast</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Eggs Benedict</li>
          <li>Smoked Salmon Bagel</li>
          <li>Blueberry Pancakes</li>
        </ul>
      </div>
      <div className="md:w-1/2 px-3 mb-6">
        <h3 className="text-base font-medium mb-2">Lunch</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Grilled Chicken Caesar Salad</li>
          <li>Soup of the Day</li>
          <li>BLT Sandwich</li>
        </ul>
      </div>
      <div className="md:w-1/2 px-3 mb-6">
        <h3 className="text-base font-medium mb-2">Dinner</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Pan-Seared Salmon</li>
          <li>Filet Mignon</li>
          <li>Spaghetti Bolognese</li>
        </ul>
      </div>
      <div className="md:w-1/2 px-3 mb-6">
        <h3 className="text-base font-medium mb-2">Desserts</h3>
        <ul className="list-disc pl-4 mb-4">
          <li>Chocolate Lava Cake</li>
          <li>Crème Brûlée</li>
          <li>Cheesecake</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Menu