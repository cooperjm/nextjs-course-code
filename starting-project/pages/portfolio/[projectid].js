import React from 'react';
import { useRouter } from 'next/router';

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); 
  console.log(router.query); 

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <h1>The Portfolio Product Page</h1>
  )
}
