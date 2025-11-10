'use client';

import { useState, useEffect } from 'react';
import { getHeroSections } from '@/lib/strapi';
import { HeroSection } from '@/types/strapi';

export default function TestStrapiPage() {
  const [heroSections, setHeroSections] = useState<HeroSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getHeroSections();
        setHeroSections(data);
      } catch (err) {
        setError('Failed to fetch data from Strapi');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Loading...</h1>
          <p>Fetching data from Strapi...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 text-red-500">Error</h1>
          <p>{error}</p>
          <p className="mt-4 text-sm text-gray-400">
            Make sure Strapi is running on http://localhost:1337
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-8">Strapi Connection Test</h1>
        
        {heroSections.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl mb-4">No Hero Sections Found</h2>
            <p className="text-gray-400">
              Go to your Strapi dashboard and create a Hero Section entry.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {heroSections.map((hero) => (
              <div key={hero.id} className="border border-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl mb-4">
                  {hero.title} {hero.titleAccent}
                </h2>
                <p className="text-gray-300 mb-4">{hero.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Buttons:</h3>
                  <div className="flex gap-4">
                    {hero.buttons.map((button, index) => (
                      <div key={index} className="bg-gray-800 p-3 rounded">
                        <p><strong>Text:</strong> {button.text}</p>
                        <p><strong>Link:</strong> {button.href}</p>
                        <p><strong>Options:</strong> {button.Options}</p>
                        <p><strong>Icon:</strong> {button.icon ? 'Yes' : 'No'}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-400">
                  <p><strong>Text Align:</strong> {hero.textAlign}</p>
                  <p><strong>Show Footer:</strong> {hero.showFooter ? 'Yes' : 'No'}</p>
                  <p><strong>Reviews Link:</strong> {hero.reviewsLink}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 p-4 bg-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">API Endpoint:</h3>
          <code className="text-green-400">
            {process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}/api/hero-sections
          </code>
        </div>
      </div>
    </div>
  );
}
