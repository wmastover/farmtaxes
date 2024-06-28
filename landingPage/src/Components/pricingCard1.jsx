import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function PricingCard1() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardDescription>Early Access</CardDescription>
        <CardTitle>£10 for lifetime access</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className=" pl-5">
          <li>Unlimited meeting types ✅</li>
          <br />
          <li>Unlimitted meetings ✅</li>
          <br />
          <li> Color coded meetings ✅</li>
          <br />
          <li> 24/7 Support ✅</li>
          <br />
          <li>Automated reminders ⚒️</li>
          <li className="text-gray-400"> *under construction </li>
          <li>Autobook ⚒️</li>
          <li className="text-gray-400"> *under construction</li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  )
}
