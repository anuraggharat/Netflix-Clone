import React from 'react'

export default function Footer() {
  return (
    <footer className="container w-100 md:w-4/6 text-zinc-400  mx-auto mt-20 p-10">
      <p>Questions? Call 000-800-040-1843</p>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 mt-10">
        <div>
          <ul>
            <li className="my-2 hover:text-white">FAQ</li>
            <li className="my-2 hover:text-white">Investor Relations</li>
            <li className="my-2 hover:text-white">Privacy</li>
            <li className="my-2 hover:text-white">Speed Test</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-2 hover:text-white">Help Center</li>
            <li className="my-2 hover:text-white">Jpbs</li>
            <li className="my-2 hover:text-white">Cookie Preferences</li>
            <li className="my-2 hover:text-white">Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-2 hover:text-white">Account</li>
            <li className="my-2 hover:text-white">Ways to Watch</li>
            <li className="my-2 hover:text-white">Corporate Information</li>
            <li className="my-2 hover:text-white">Only on Netflix</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-2 hover:text-white">Media Centre</li>
            <li className="my-2 hover:text-white">Terms of use</li>
            <li className="my-2 hover:text-white">Contact us</li>
          </ul>
        </div>
      </div>
      <div className='my-10'>
        <select
          name="language"
          id="language"
          className="mr-5 border-slate-50 border-2 bg-black text-white py-4 px-8"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
        </select>
      </div>
      <div>
        <p>Netflix India</p>
      </div>
    </footer>
  );
}
