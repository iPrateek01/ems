import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function Login({handleLogin}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    // console.log("hello")

  }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Card className="w-full max-w-sm bg-gray-800 text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Login</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="What's you email?" 
              required 
              className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder="Password goes here!"
              required 
              className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white">Sign in</Button>
        </CardFooter>
      </Card>
    </div>
    </>
  )
}