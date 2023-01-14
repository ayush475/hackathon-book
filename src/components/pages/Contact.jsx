import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //this  will cancel the  event if it  is cancellable

    // Send form data to server or third-party service here

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block mb-2 text-gray-700 font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">
              <label className="block mb-2 text-gray-700 font-bold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue-500"
              />
            </div>
            <div className="w-full px-4 mb-6">
              <label className="block mb-2 text-gray-700 font-bold">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue-500"
                rows="6"
              ></textarea>
            </div>
            <div className="w-full px-4 text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-full bg-teal-500 text-white font-bold hover:bg-teal-600 focus:outline-none focus:shadow-outline-teal"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact
