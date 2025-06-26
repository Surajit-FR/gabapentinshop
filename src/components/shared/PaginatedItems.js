import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import AllBlogContents from '../blogpages/AllBlogContents';

const PaginatedItems = ({itemsPerPage, items, onClickBlog }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <AllBlogContents blogs={currentItems} onClickBlog={onClickBlog}/>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='pagination-blog'
        activeClassName='active-blog-pagination'
        disabledClassName='previous_button'

      />
    </>
  )
}

export default PaginatedItems