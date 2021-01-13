import React from 'react';
import { Helmet } from 'react-helmet'


export default function Header() {
  return (
    <Helmet>
       <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
        <title>Kosmos & Kaos</title>
    </Helmet>
  );
}