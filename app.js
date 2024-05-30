const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;


// gunakan ejs

app.set('view engine','ejs');

//Third-party Middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));


app.get('/', (req, res) => {
  const mahasiswa = [
      {
          nama: 'Selvi Desti Riyani',
          email: 'selvi@gmail.com',
      },
      {
          nama: 'Tegar Febrian',
          email: 'tegar@gmail.com',
      },
      {
          nama: 'Winda',
          email: 'winda@gmail.com',
      },
  ];
  res.render('index', {
      nama: 'Selvi Desti Riyani',
      title: 'Halaman Home',
      mahasiswa,
      layout: 'layouts/main-layout', // Perbaikan: layout tanpa ekstensi dan path relatif
  });
});

app.get('/about', (req, res) => {
//   res.send('Ini adalah Halaman About');
// res.sendFile('./about.html', { root: __dirname});
res.render('about', { 
  layout: 'layouts/main-layout',
  title: 'Halaman About'
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
//   res.send('Ini adalah Halaman Contact');
// res.sendFile('./contact.html', { root: __dirname});
res.render('contact', { 
  layout: 'layouts/main-layout',
  title: 'Halaman Contact',
  contacts,
});
});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
res.render('detail', { 
  layout: 'layouts/main-layout',
  title: 'Halaman Detail Contact',
  contact,
});
});


app.use('/',(req, res) =>{
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});










// const http = require(`http`);
// const port = 3000;
// const fs = require('fs');

// const renderHTML =(path, res) => {
//     fs.readFile(path, (err, data) =>{
//         if(err){
//           res.writeHead(404);
//           res.write('Error: file not found');
//         } else {
//           res.write(data);
//         } 
//         res.end();
//     });

// };
// // const server = http.createserver((req, res) => {

// // });

// // server.listen(3000, () => {
// //     console.log(`Server is listeing on port 3000..`);
// // });

// http
//     .createServer((req, res) => {
   
//     // console.log(url);
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'}); 

//     const url = req.url;

//     switch(url){
//         case '/about':
//             renderHTML('./about.html', res);
//             break;
//         case '/contact':
//             renderHTML('./contact.html', res);
//             break;
//         default:
//             renderHTML('./index.html', res);
//             break;    
//     }

//     // if(url =='/about'){
//     //     renderHTML('./about.html', res);
//     //     // fs.readFile('./about.html', (err, data) =>{
//     //     //     if(err){
//     //     //       res.writeHead(404);
//     //     //       res.write('Error: file not found');
//     //     //     } else {
//     //     //       res.write(data);
//     //     //     } 
//     //     //     res.end();
//     //     // });
//     //     // res.write('<h1> Ini adalah halaman About</h1>');
//     //     // res.end();
//     // } else if (url === '/contact'){
//     //     renderHTML('./contact.html',res);
//     //     // res.write('<h1> Ini adalah halaman Contact</h1>');
//     //     // res.end(); 
//     // } else {
//     //     renderHTML('./index.html', res);
//     //     // res.write(`Hello Huda`);
//     //     // fs.readFile('./index.html', (err, data) =>{
//     //     //   if(err){
//     //     //     res.writeHead(404);
//     //     //     res.write('Error: file not found');
//     //     //   } else {
//     //     //     res.write(data);
//     //     //   } 
//     //     //   res.end();
//     //     // });
        
//     // }
   
// })
// .listen(3000, () => {
//     console.log(`Server is listening on port ${port}`);
// });