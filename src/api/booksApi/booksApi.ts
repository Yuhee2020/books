import {instance} from "../instance";

export const booksApi = {
    getBooks(params:GetBooksParamsType) {
        return instance.get<GetBooksResponseType>('volumes', {params}
        )
    },
    getBook(id: string) {
        return instance.get<BookType>(`volumes/${id}`)
    }
}

export type GetBooksParamsType={
    q: string,
    maxResults: number,
    startIndex: number,
    printType: string,
    orderBy: string,
}

export type GetBooksResponseType = {
	kind: string;
	totalItems: number;
	items: BookType[];
}
export type BookType = {
    kind: string;
    id: string;
    etag:string;
    volumeInfo: {
        title: string;
        authors: string[];
        publishedDate: string;
        description: string;
        pageCount: number;
        printType: string;
        categories: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
            large:string;
            medium:string;
            extraLarge:string;
            small:string;
        };
        language: string;
    };
}



