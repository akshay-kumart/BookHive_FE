import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookDTO } from 'src/app/models/BookDTO';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-cartbook',
  templateUrl: './cartbook.component.html',
  styleUrls: ['./cartbook.component.css']
})
export class CartbookComponent implements OnInit {

  constructor(private bookservice:BookService) { }

  public booksdata:Array<any>=[];

  ngOnInit(): void {
    // console.log(this.oneBook)
    this.bookservice.getAllBooks().subscribe((data:any)=>{
      this.booksdata=data.url;
    })
  }
  booksArr: Book[] = [];
  @Input() oneBook: BookDTO;
  @Input() oneBook1: Book;

  @Output() removeBook: EventEmitter<number> = new EventEmitter<number>();
  @Output() handleAddToCart: EventEmitter<Book> = new EventEmitter<Book>();


  handleDelete(){
    // console.log(`delete product no: ${this.oneProduct.productId}`)
    this.removeBook.emit(this.oneBook.bookId);
  }

}
