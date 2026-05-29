import React from 'react'
import { Phone, Mail, Clock } from "lucide-react";

function TopBar() {
  return (
    <div className="bg-black px-10 font-serif text-sm text-white p-2 flex justify-between">
      <div>
        <p>follow us:
        instagram, facebook, twitter</p>
      </div>
      <div className="flex flex-row gap-4">
        <Phone size={16}/><p> +250798334054</p>
         <Mail size={16}/> <p> ngabiblackiane02@gmail.com</p>
        <Clock size={16}/><p> Sun-fri 9:00 AM - 5:00 PM</p>
      </div>
    </div>
  )
}

export default TopBar
