let books = [{
        Title: "Wings of Fire",
        Author: "APJ Abdul Kalam",
        Year: 200
    },
    {
        Title: "Geetanjali",
        Author: "Rabindranath Tagore",
        Year: 1989 
    },
    {
        Title: "Harry Potter",
        Author: "J.K. Rowling",
        Year: 1979  
    }
]

function titleOfBooks(titles){
    console.log(titles.join(", "))
}
function extractTitles(books, callback){
    const titles = books.map((book) => book.Title)
    callback(titles)
}
extractTitles(books, titleOfBooks)