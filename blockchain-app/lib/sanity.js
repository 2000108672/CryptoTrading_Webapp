import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8upyyohw',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skHqWN9pxAMqtkOiaxrZnLMz3bVvQoWTl3TnrkALTtgVLYjm0uQBlBB9howW9QztVl4nDjIJG2ATlJ30032K30YxTbT6w4JbMnEr36R9c1ugrnsEiqHlfRkJc3X3XzM5RzA6e9hwKK6QGpMxKGwDFgeZBpRQDJe20gc89M1bun7qHuil0B5e', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
