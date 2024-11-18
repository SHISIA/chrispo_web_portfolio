'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ email: '', subject: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="w-full flex p-4 max-w-7xl mt-6">
      <div className='flex flex-row w-full justify-center '>
        <img  loading='lazy' src='/images/butterfly.jpeg' className='hidden xl:flex w-96 rounded-l-xl' />
        <section className="bg-white w-full  xl:w-[600px] rounded-xl xl:rounded-r-xl xl:rounded-l-none shadow-xl border">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col">
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className='flex flex-col justify-start items-start'>
                <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-600">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="e.g name@example.com"
                  required
                />
              </div>
              <div className='flex flex-col justify-start items-start'>
                <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2 flex flex-col justify-start items-start">
                <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-600">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lg font-sans text-center bg-slate-950 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
