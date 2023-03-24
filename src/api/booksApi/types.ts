export type GetBooksParamsType = {
  q: string
  maxResults: number
  startIndex: number
  printType: string
  orderBy: string
}

export type GetBooksResponseType = {
  kind: string
  totalItems: number
  items: BookType[]
}
export type BookType = {
  kind: string
  id: string
  etag: string
  volumeInfo: {
    title: string
    authors: string[]
    publishedDate: string
    description: string
    pageCount: number
    printType: string
    categories: string[]
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
      large: string
      medium: string
      extraLarge: string
      small: string
    }
    language: string
  }
}

export type ErrorType = {
  error: {
    code: number
    message: string
    errors: {
      message: string
      domain: string
      reason: string
    }[]
    status: string
    details: {
      '@type': string
      reason: string
      domain: string
      metadata: {
        service: string
      }
    }[]
  }
}
