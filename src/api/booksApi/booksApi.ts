import {instance} from "../instance";

export const booksApi = {
    getBooks() {
        return instance.get<GetBooksResponseType>('volumes', {
            params: {
                q: `js subject:art`,
                maxResults: 2,
                startIndex: 0,
                printType: "books",
                orderBy: "newest"
            }
        })
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
        };
        language: string;
    };
}



