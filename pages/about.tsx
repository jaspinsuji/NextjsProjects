import Link from 'next/link'

export default function FirstPost() {
   return (
      <>
         <h1>My Abou Page</h1>
         <h2>
            <Link href="/">
              Home Page 
              </Link>
         </h2>
      </>	  
   )
}