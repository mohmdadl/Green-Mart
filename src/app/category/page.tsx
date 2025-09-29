import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Plants Categories',
  description: 'Browse Plants by category.',
};

export default async function CategoryPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>Browse by Category</h1>
      <p>
        Please select a category from the sidebar to view available rooms. This
        is the main content area for the category page.
      </p>
    </div>
  );
}