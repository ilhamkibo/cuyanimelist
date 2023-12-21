export default function Pagination({page, lastPage, setPage}) {

  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop()
  }
  
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop()
  }

  return (
    <div className="flex justify-center items-center px-2 py-4 gap-4 text-color-primary text-2xl">
      {page >= 2 && 
      <button className="transition-all hover:text-color-accent" onClick={handlePrevPage}>Prev</button>
      }
      <p>{page} of {lastPage}</p>
      {page <= lastPage-1 &&
      <button className="transition-all hover:text-color-accent" onClick={handleNextPage}>Next</button>
      }
    </div>
  )
}
