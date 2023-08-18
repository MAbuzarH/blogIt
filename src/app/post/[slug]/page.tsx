import { getSpecificBlogData } from '@/lib/mock';
import Link from 'next/link';
import React from 'react'

export default async function page({ params }: { params: { slug: string } }) {

  const data = await getSpecificBlogData(params.slug);
  const reqdata = data[0]
  console.log('data', data[0])
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-purple-800 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold">{reqdata.title}</h1>
          </div>
        </header>

        {/* Blog Content */}
        <section className="container mx-auto mt-10 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={reqdata.mainImage}
              alt="Blog"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Blog Title</h2>
            <p className="text-gray-600 mb-4">
              {reqdata.description}
            </p>
            <a href="#" className="text-purple-700 hover:underline">
              Read More
            </a>
          </div>

          {/* Blog Writer */}
          <div className="bg-white p-6 mt-6 rounded-lg shadow-md flex items-center space-x-4">
            <img
              src={reqdata.author.image}
              alt="Writer"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{reqdata.author.name}</h3>
              <p className="text-gray-500">Blogger and Enthusiast</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 mt-10">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Beautiful Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </>
  )
}
