import {instance} from "../instance";
import {BookType, GetBooksParamsType, GetBooksResponseType} from "./types";

export const booksApi = {
    getBooks(params:GetBooksParamsType) {
        return instance.get<GetBooksResponseType>('volumes', {params}
        )
    },
    getBook(id: string) {
        return instance.get<BookType>(`volumes/${id}`)
    }
}





