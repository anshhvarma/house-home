import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Landlord = () => {
  return (
    <div className="bg-indigo-950 text-white py-24">
    <div className="container mx-auto px-4 max-w-2xl text-center">
      <p className="text-indigo-400 mb-4">No Spam Promise</p>
      <h2 className="text-4xl font-bold mb-4">Are you a landlord?</h2>
      <p className="mb-8">Discover ways to increase your home's value and get listed. No Spam.</p>
      <div className="flex gap-4 mb-4">
        <Input 
          type="email" 
          placeholder="Enter your email address" 
          className="bg-white"
        />
        <Button className="bg-indigo-500 hover:bg-indigo-600">
          Submit
        </Button>
      </div>
      <p className="text-sm text-indigo-400">
        Join 10,000+ other landlords in our House & Home community.
      </p>
    </div>
  </div>
  )
}

export default Landlord