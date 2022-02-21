import { createServer, Model } from 'miragejs'
import axios, * as others from 'axios';

import  book_a from '../assets/book_a.svg'
import  book_b from '../assets/book_b.svg'
import  book_c from '../assets/book_c.svg'
import  book_d from '../assets/book_d.svg'
import  book_e from '../assets/book_e.svg'
import  book_f from '../assets/book_f.svg'
import  book_g from '../assets/book_g.svg'
import  book_h from '../assets/book_h.svg'
import  book_i from '../assets/book_i.svg'

createServer({
  models: {
    book: Model

},
  
seeds(server) {
    server.db.loadData({
      
      books: [
 
              {
                id: 1,
                title: 'A',
                color: 'yellow',
                size: 'big',
                img: book_a,
                createdAt: new Date('2022-02-15 09:00:00')
              },          
        
              {
                id: 2,
                title: 'B',
                color: 'red',
                size: 'medium',
                img: book_b,
                createdAt: new Date('2022-02-15 09:00:00'),
              },
              {
                id: 3,
                title: 'C',
                color: 'orange',
                size: 'big',
                img: book_c,
                createdAt: new Date(),
              },
              {
                id: 4,
                title: 'D',
                color: 'purple',
                size: 'big',
                img: book_d,
                createdAt: new Date(),
              },
              {
                id: 5,
                title: 'E',
                color: 'light-blue',
                size: 'small',
                img: book_e,
                createdAt: new Date(),
         
          }
        ]
      })
    }, 
 
 
  routes() {
      console.log(this.schema)
      this.namespace = 'api';
        
    this.get('/books', () => {
       return this.schema.all('book');
    });
  }
})

export const api = axios.create({
    baseURL: 'http://localhost:3000/api', 
 });