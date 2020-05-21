import React from 'react';
import {
  BookWrapper,
  BookCardHeader,
  BookCardContent,
  BookCardImage,
  BookCardControl,
} from './Book.style';
import { Book as BookType } from 'types';
import { Button } from 'primereact/button';

type BookProps = {
  book: BookType;
};

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <BookWrapper>
      <BookCardHeader>{book?.title}</BookCardHeader>
      <BookCardContent>
        <BookCardImage>
          <img
            src={book?.coverImage}
            style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
          />
        </BookCardImage>
      </BookCardContent>
      <BookCardControl>
        {book?.status !== 'Reading' && (
          <Button
            label='Done'
            icon='pi pi-check'
            style={{ marginTop: '0.3vh', fontSize: '0.9em' }}
            className='p-button-success'
            disabled={true}
          />
        )}
        {book?.status === 'Reading' && (
          <>
            Status: {book?.completedPages} / {book?.pages} pages
            <Button
              label='Update'
              icon='pi pi-pencil'
              style={{ marginTop: '0.3vh', fontSize: '0.9em' }}
              className='p-button-secondary'
            />
          </>
        )}
      </BookCardControl>
    </BookWrapper>
  );
};

export default Book;
