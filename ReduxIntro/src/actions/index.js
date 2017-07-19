export function selectBook(book){
    // This is an ActionCreator, needs to return action, an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}