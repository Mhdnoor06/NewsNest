import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        {/* <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ left: '90%', zIndex: '1' }}
        > */}
        {/* {source} */}
        {/* <span className="visually-hidden">unread messages</span>
        </span> */}
        <img
          src={
            imageUrl
              ? imageUrl
              : 'https://cdn.thewire.in/wp-content/uploads/2019/12/11171008/241414894_39dcb32b33_b-800x400.jpg'
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              updated by {author ? author : 'unknown'} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
