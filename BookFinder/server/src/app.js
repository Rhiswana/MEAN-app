 const express = require('express');
 const app = express();
 const dotenv = require('dotenv');
 const cors = require('cors');
  const bookRoutes = require('./routes/bookRouter');
    app.use(express.json());
    app.use(cors()); 

  
     dotenv.config();
    app.get('/', (req, res) => {
  res.send('Server is running');
});
    app.use('/api/books',bookRoutes);
  

    app.listen(process.env.PORT,() => {
      console.log(`server listening to ${process.env.PORT}  in ${process.env.NODE_ENV}`)
 });
         