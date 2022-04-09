export const CardComponent = ({ children, title }) => {
  return (
    <div className='card'>
      <div className='d-flex justify-content-center mt-3'>
        <h5 className='card-title'>{title}</h5>
      </div>

      <div className='card-body'>{children}</div>
    </div>
  );
};
