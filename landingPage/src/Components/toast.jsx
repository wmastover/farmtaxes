import React from 'react'; // Added React import
import { useToast } from "@/components/ui/use-toast"

export const ToastDemo = () => {
    const { toast } = useToast()
  
    React.useEffect(() => {
      const firstTimer = setTimeout(() => {
        toast({
          title: "John Smith:",
          description: "Calendar ninja is the best booking tool I have ever used! ⭐️⭐️⭐️⭐️⭐️",
        })
      }, 2000)

      const secondTimer = setTimeout(() => {
        toast({
          title: "Jane Doe:",
          description: "Absolutely love the simplicity and efficiency of this tool! 🌟🌟🌟🌟🌟",
        })
      }, 10000)

      const thirdTimer = setTimeout(() => {
        toast({
          title: "Alex Johnson:",
          description: "This is 10x better than calendly! 🔥🔥🔥🔥🔥",
        })
      }, 20000)
  
      return () => {
        clearTimeout(firstTimer)
        clearTimeout(secondTimer)
        clearTimeout(thirdTimer)
      }
    }, [toast])
  
    return null
  }
