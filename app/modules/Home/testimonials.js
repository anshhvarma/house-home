import React from 'react'
import { Card , CardContent} from '@/components/ui/card'

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="text-gray-600 mb-12">
        See what our property managers, landlords, and tenants have to say
      </p>
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8">
          <p className="text-lg mb-4">
            "House & Home is the platform I go to on almost a daily basis for 2nd home and 
            vacation condo shopping, or to just look at dream homes in new areas. Thanks 
            for fun home shopping and comparative analyzing, House & Home!"
          </p>
          <p className="font-semibold">Mira Culos, <span className="text-gray-600">Renter</span></p>
        </CardContent>
      </Card>
      <div className="flex justify-center gap-4 mt-8">
        <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
        <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
        <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
      </div>
    </div>
  </div>

  )
}

export default Testimonials