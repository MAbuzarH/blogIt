import React from 'react'

export const richText = {
    type: {
        marks: {
            // Ex. 1: custom renderer for the em / italics decorator
            em: ({ children }: any) => <em className="text-gray-600 font-semibold">{children}</em>,

            // Ex. 2: rendering a custom `link` annotation
            link: ({ value, children }: any) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                return (
                    <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''}>
                        {children}
                    </a >
                )
            },
        },
        block: {
            // Ex. 1: customizing common block types
            h1: ({ children }: any) => <h1 className="text-2xl">{children}</h1>,
            blockquote: ({ children }: any) => <blockquote className="border-l-purple-500">{children}</blockquote>,

            // Ex. 2: rendering custom styles
            customHeading: ({ children }: any) => (
                <h2 className="text-lg text-primary text-purple-700">{children}</h2>
            ),
        },
        list: {
            // Ex. 1: customizing common list types
            bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
            number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

            // Ex. 2: rendering custom lists
            checkmarks: ({ children }: any) => <ol className="m-auto text-lg">{children}</ol>,
        },
        listItem: {
            // Ex. 1: customizing common list types
            bullet: ({ children }: any) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,

            // Ex. 2: rendering custom list items
            checkmarks: ({ children }: any) => <li>✅ {children}</li>,
        },
    }
}
