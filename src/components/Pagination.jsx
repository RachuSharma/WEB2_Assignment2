function Pagination({ offset, setOffset, limit }) {
  const handlePrevious = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  return (
    <div className="d-flex justify-content-center my-4 gap-3">
      <button
  className="pagination-button"
  onClick={handlePrevious}
  disabled={offset === 0}
>
  ← Previous
</button>

<button
  className="pagination-button"
  onClick={handleNext}
>
  Next →
</button>

    </div>
  );
}

export default Pagination;
