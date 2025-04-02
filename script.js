

const bookId = document .getElementById("book-title");

const titleId = document .getElementById("title")
const authorId = document .getElementById("Author")
const buttonId = document .getElementById("btn")

const  bookCollection = [];


// display books
const displayBook = () => {
    bookCollection.forEach(book=>{
        const addBook1 = document.createElement("p")
        addBook1.textContent = `${book.title} by ${book.author}`;
        bookId.appendChild(addBook1);
    });
    
}

const addBook = () => {
    const titleValue =  titleId.value;
    const authorValue  = authorId.value;
    const book = {
        title: titleValue,
        author: authorValue
    }
    bookCollection.push(book);


  displayBook();


}
buttonId.addEventListener('click', addBook)




const bookCollection1 = [
    {title: "New",
        author: "John"
    },
    
    {
        title: "The Sky",
        author: "Mark"
    },
{
    title: "zone",
    author: "mark"
}
]