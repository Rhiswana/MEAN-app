
const axios = require('axios');

const getBooks = async(req,res)=>{
    try{
        const title = req.query.title;
        if(!title){
            return res.status(400).json({
              
                message:'Please provide book title to search'
              })
            
        
        };
      const response = await axios.get(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`);

         const books = response.data.docs.slice(0,10).map(book =>({
            title : book.title,
            author : book.author_name?book.author_name.join(','):'Unknown author',
             year: book.first_publish_year || 'N/A',
               cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`: null

            
         }));
         res.json(books);
        }
      catch(error){
        console.log(error.message);
        res.status(500).json({
            message:'Failed to fetch book, Try again'
        })
      }
    };
    module.exports = {getBooks};




