import React from 'react'

export default function Header() {
  return (
    <nav className="bg-primary p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-secondary font-bold font-mono text-xl">LOGO</div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-secondary hover:text-secondary hover:font-bold">Home</a>
          </li>
          <li>
            <a href="/about" className="text-secondary hover:text-secondary hover:font-bold">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
