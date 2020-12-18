import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = () => {
  return (
    <Helmet>
      <title>BudNote | Aplikacja do Planowania Budżetu domowego</title>
      <meta
        name="description"
        content="Darmowa aplikacja na telefon i komputer do planowania budżetu domowego, zapisywania wydatków, kontroli i zarządzania domowymi finansami."
      />
      <meta name="keywords" content="Aplikacja do oszczędzania, Aplikacja budżetowa" />
      <meta name="author" content="Super User" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default Head;
