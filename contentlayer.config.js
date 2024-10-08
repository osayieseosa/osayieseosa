import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import pkg from "sqip"

const {sqip} = pkg

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    }
}

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        date: {
            type: 'date',
            required: true,
        },
        image: {
            type: "string",
            required: false
        }
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm]
    },
    rehypePlugins: [
        rehypeSlug,
        [
            rehypePrettyCode,
            {
                theme: 'github-dark',
                onVisitLine(node){
                    //prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
                    if(node.children.length === 0){
                        node.children = [{type: 'text', value: ' '}]
                    }
                },
                onVisitHighlightedLine(node){
                    node.properties.className.push('line--highlighted')
                },
                onVisitHighlightedWord(node){
                    node.properties.className = ['word--highlighted']
                },
            },
        ],
        [
            rehypeAutolinkHeadings,
            {
                properties:{
                    className: ['subheading-anchor'],
                    ariaLabel: 'link to section',
                }
            }
        ]
    ]
})