const express = require('express');


const app = express();
const articleRouter = require('./routes/articles');


//vistas
app.set('view engine', 'ejs')


//rutas
app.use('/articles', articleRouter)

app.get('/', (req, res)=>{
    const articles = [{
    title: 'Articulo de prueba',
    createAt: new Date(),
    description: 'descripcion de prueba'
  }]
  res.render('articles/index', { articles })
})


app.listen(5000,()=>{
  console.log('servidor corriendo en pueto 5000');
})