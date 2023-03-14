

 const  mongoose = require('mongoose');

 
      mongoose.connect(`mongodb://localhost:27017/student-api`,{
        //useCreatIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true

      })
        .then(() => {
          console.log('Database connection successful')
        })
        .catch(err => {
          console.error('Database connection error')
        })
     
   