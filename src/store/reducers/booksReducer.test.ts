import {
    booksReducer,
    getBooksTC,
    getBookTC,
    setCategory,
    setOrderBy,
    setSearch
} from "./booksReducer";
import {BookType} from "../../api/booksApi/types";


let startState = {
    books: [] as BookType[],
    book: null as null | BookType,
    isLoading: false,
    totalBooks: 0,
    selectedBook: null,
    maxResults: 30,
    startIndex: 0,
    orderBy: "relevance",
    printType: "books",
    searchText: "",
    category: "all",
    isLoadingMore: false,
    error: null as null | string
}
beforeEach(() => {
    startState = {
        books: [] as BookType[],
        book: null as null | BookType,
        isLoading: false,
        totalBooks: 0,
        selectedBook: null,
        maxResults: 30,
        startIndex: 0,
        orderBy: "relevance",
        printType: "books",
        searchText: "",
        category: "all",
        isLoadingMore: false,
        error: null as null | string
    }
})

test('isLoading should be changed, when getBooks is pending', () => {

    const action = getBooksTC.pending
    const endState = booksReducer(startState, action)

    expect(endState.isLoading).toBe(true)
})

test('isLoading should be changed, when getBook is pending', () => {

    const action = getBookTC.pending
    const endState = booksReducer(startState, action)

    expect(endState.isLoading).toBe(true)
})

test('book should be changed, when getBook is pending', () => {
const book={
    "kind": "books#volume",
    "id": "h5TKRgbsYUQC",
    "etag": "tDt/22X7op4",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/h5TKRgbsYUQC",
    "volumeInfo": {
        "title": "Complete string quintets, with the horn and clarinet quintets",
        "subtitle": "from the Breitkopf & Härtel complete works edition",
        "authors": [
            "Wolfgang Amadeus Mozart"
        ],
        "publisher": "Courier Corporation",
        "publishedDate": "1978-01-01",
        "description": "\u003cp\u003eThis single volume contains all the string quintets of Mozart; the Quintet in B-flat Major, K.174; the imposing Quintet in C Major, K.515; the three late quintets considered to be among Mozart's greatest works the G Minor, K.516; the D Major, K.593; and the E-flat Major, K.614, one of the composer's last pieces. Also included are the String Quintet in C Minor, K.406 (actually an arrangement of the earlier Serenade for Wind Instruments, K.388); the Quintet with Horn or Second Cello, K.407: and the extremely popular Clarinet Quintet, K.581.\u003cbr\u003eThe scores have been photographically reprinted from the Breitkopf &amp; Hartel printed text, still considered the standard, authoritative edition for the Mozart quintets. Noteheads in this edition are large enough to be read easily, and margins and spaces between staves permit written notes, harmonic analysis, fingerings, and running measure numbers.\u003cbr\u003eSince Mozart's string quintets are frequently performed in concert and there are several recordings currently available for each of these pieces, this edition is extremely useful for study, reference, and enjoyment.&quot;\u003c/p\u003e",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "048623603X"
            },
            {
                "type": "ISBN_13",
                "identifier": "9780486236032"
            }
        ],
        "readingModes": {
            "text": false,
            "image": true
        },
        "pageCount": 181,
        "printedPageCount": 210,
        "dimensions": {
            "height": "31.00 cm",
            "width": "23.80 cm",
            "thickness": "1.10 cm"
        },
        "printType": "BOOK",
        "categories": [
            "Music / Genres & Styles / Classical",
            "Music / Genres & Styles / Chamber",
            "Music / Musical Instruments / Strings",
            "Music / Printed Music / Opera & Classical Scores"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.8.9.0.preview.1",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=h5TKRgbsYUQC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72_mmPe5tLqE_pI2fjB4P5UVwOGnZcTVxPWccRfL92CMLTqCNQL8bFIyWhBdSwgj0PSlUs5t2z6LdQmAmRF_W_xZYUiFq2u5tof4lNWRvIWlxRxoTCEtGNqP1D-pOkiQMgPE7F6&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=h5TKRgbsYUQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73RxbxBQNEiERk4CZ1CfI9lUzzQjqlE-Mc0ov5JfZq4E7qc1TC8nIySeKSrvkKgi4_FKnKiego8PAy3muO4ZfNCmQeGWpXKak6CfyRWmdIZdUK_114nWyiZHrgdbYnSxYit-e-w&source=gbs_api",
            "small": "http://books.google.com/books/content?id=h5TKRgbsYUQC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE722gDA9F7t_IFExKDK1Izfh4NhRCsdzzZoSY-EytUbCVK7f-vn_vA4wfNwOPQ45eaRLHN1oFziri9jncltVtgV_H04C-XE02CoP3CT2rGReB0Q11UK2OItZ0j_c9uQ6G9RaX-IX&source=gbs_api",
            "medium": "http://books.google.com/books/content?id=h5TKRgbsYUQC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72i1Cs0NiOGcpdeZh1Jyoap7A-lfomRR0iGmpha3MHqa2WDQFg_jQUpp_sDvqxV7cnKJ99rjAbOw4LdFJ9AG03RsgpgbrczBm4KVCx8iKZ7zr0QVi4uB_REfylCZEHnlnPopZBx&source=gbs_api",
            "large": "http://books.google.com/books/content?id=h5TKRgbsYUQC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE722vu6HO3iC6MbspTERVdrPlcDvuCbgmCv8hQzoD1LoKF8QcRGecXTIut4geGTIT2v3T7w_nEE2uKyH9N3alYZnOXOihlpvU6LTFZaEPDbRCzHf-iS2Yj9W4Kwp2WVDy07gsH7l&source=gbs_api",
            "extraLarge": "http://books.google.com/books/content?id=h5TKRgbsYUQC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70QQDS_IWdf5atwH9O_XX4I3zAnC-kN1KRway46uUSLUmeRodyt-OxO1omCpagck20IyuQVORDTRgkkIU49vKHMEp0cdU9qIfZKfvBgG6PAclHWBBKbqGwJaAX1bHAxvUc2C2y7&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.pl/books?id=h5TKRgbsYUQC&hl=&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=h5TKRgbsYUQC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=h5TKRgbsYUQC"
    },
    "saleInfo": {
        "country": "PL",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    "accessInfo": {
        "country": "PL",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": false
        },
        "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.pl/books/download/Complete_string_quintets_with_the_horn_a-sample-pdf.acsm?id=h5TKRgbsYUQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=h5TKRgbsYUQC&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    }
}

    const action = getBookTC.fulfilled(book,'books/getBooks','books/getBooks')
    const endState = booksReducer(startState, action)

    expect(endState.book).toEqual(book)
    expect(endState.book?.id).toBe("h5TKRgbsYUQC")
})

test('category should be changed', () => {
    const newCategory = "art"
    const endState = booksReducer(startState, setCategory(newCategory))

    expect(endState.category).toBe(newCategory)
})

test('order should be changed', () => {
    const orderBy = "newest"
    const endState = booksReducer(startState, setOrderBy(orderBy))

    expect(endState.orderBy).toBe(orderBy)
})

test('search text should be changed', () => {
    const searchText = "hello"
    const endState = booksReducer(startState, setSearch(searchText))

    expect(endState.searchText).toBe(searchText)
})


