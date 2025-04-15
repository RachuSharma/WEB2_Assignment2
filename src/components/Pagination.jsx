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
        className="btn btn-outline-primary"
        onClick={handlePrevious}
        disabled={offset === 0}
      >
        ← Previous
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={handleNext}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
