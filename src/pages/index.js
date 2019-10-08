import React from 'react';
import { Link } from 'next';

const Landing = () => {
  const headerText = 'Hi this is a test';
  return <div>
    <h2>{headerText}</h2>
    <Link href="/forms">forms here</Link>
  </div>
}

export default Landing;
