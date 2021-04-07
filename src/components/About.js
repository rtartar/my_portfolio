import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
    <main className="relative bg-white">
        <div className="p-10 lg:pt-48 container mx-auto relative">
            <section className="bg-white-100 border-4 border-green-500 border-opacity-100 rounded-lg shadow-2xl lg:flex p-20">
                <img src={urlFor(author.authorImage).url()}
                className="rounded w-15 h-15 lg:w-90 lg:h-80 mr-8"
                alt={author.name}/>
                <div className="text-lg flex flex-col justify-center">
                    <h1 className="cursive text-lg text-green-600 mb-4">
                        {" "}
                        <span className="text-green-600">{author.name}</span>
                    </h1>
                    <div className="prose lg:prose-xl text-green-600">
                        <BlockContent blocks={author.bio}
                        projectId="t68i22ec"
                        dataset="production">
                        </BlockContent>
                    </div>
                </div>
            </section>
        </div>
    </main>
    )
}