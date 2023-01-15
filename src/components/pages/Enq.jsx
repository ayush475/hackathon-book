import React from 'react'

const Enq = () => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
      <h1>  please </h1>
      <h2 className="text-lg font-medium mb-4">Enquiry</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="text"
            id="name"
            name="name"
            placeholder="John Smith"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 (555) 555-5555"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-gray-200 p-2 rounded-lg w-full"
            id="message"
            name="message"
            rows="4"
            placeholder="Please leave your message here..."
          ></textarea>
        </div>
        <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Enq