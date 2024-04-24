const express = require('express');
const main = require('./src/config/db')
const {User,Product} = require('./src/model/model');
const userRouter = require('./src/routes/user.route');
const productRouter = require('./src/routes/product.routes');

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users',userRouter)
app.use('/products',productRouter)


let port = 3001
app.listen(port, async() => {
  try {
    main()
    console.log('Server is listening on port 3001');
    
  } catch (error) {
    console.log('port error')
  }
});