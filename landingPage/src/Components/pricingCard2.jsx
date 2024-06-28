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


export function PricingCard2() {
  return (
    <Card className="w-[350px] opacity-50">
      <CardHeader>
        <CardDescription>Launch Pricing 🚀 (Coming Soon)</CardDescription>
        <CardTitle>£100 for lifetime access</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="pl-5">
          <li>Unlimited meeting types ✅</li>
          <br />
          <li>Unlimited meetings ✅</li>
          <br />
          <li>Color coded meetings ✅</li>
          <br />
          <li>24/7 Support ✅</li>
          <br />
          <li>Automated reminders ✅</li>
          <br />
          <li>Autobook ✅</li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button disabled style={{ cursor: "not-allowed", backgroundColor: "#a0aec0" }}>Coming Soon</Button>
      </CardFooter>
    </Card>
)}
