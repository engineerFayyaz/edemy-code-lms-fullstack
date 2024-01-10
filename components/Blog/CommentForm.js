import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios'; // You may need to install axios using 'npm install axios'

const CommentArea = () => {
  // Define state to store comments
  const [comments, setComments] = useState([]);
  const [displayedComments, setDisplayedComments] = useState([]);
  const [commentsPerPage, setCommentsPerPage] = useState(5);
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: '',
  });

  useEffect(() => {
    // Fetch comments when the component mounts
    fetchComments();
  }, []);
  useEffect(() => {
    // Slice the comments array to display only the number of comments per page
    const slicedComments = comments.slice(0, commentsPerPage);
    setDisplayedComments(slicedComments);
  }, [comments, commentsPerPage]);

  // Function to fetch comments
  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/comments'); // Adjust the API endpoint URL
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

    // Function to handle "Load More" button click
    const handleLoadMore = () => {
        setCommentsPerPage((prev) => prev + 5); // Increase the number of comments to display
      };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the API to save the comment
      const response = await axios.post('/api/comments', formData); // Adjust the API endpoint URL
      setFormData({ author: '', email: '', content: '' }); // Clear the form
      fetchComments(); // Fetch comments to update the list
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="comments-area">
      <h3 className="comments-title">{comments.length} Comments:</h3>

      <ol className="comment-list">
 {displayedComments.map((comment) => (
  <li className="comment" key={comment.id}>
    <div className="comment-body">
      <div className="comment-meta">
        {/* Render comment details here */}
        <div className="comment-author vcard">
          <div
            className="avatar"
            style={{
              backgroundColor: '#555',
              color: '#fff',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              fontSize: '24px',
            }}
          >
            {comment.author ? comment.author[0].toUpperCase() : ''}
          </div>
          {comment.author && <b className="fn">{comment.author}</b>}
          <span className="says">says:</span>
        </div>

        <div className="comment-metadata">
          <span>{comment.date}</span>
        </div>
      </div>

      <div className="comment-content">
        <p>{comment.content}</p>
      </div>

      <div className="reply">
        <Link href="#">
          <a className="comment-reply-link">Reply</a>
        </Link>
      </div>
    </div>
  </li>
))}

{comments.length > displayedComments.length && (
        <div className="load-more">
          <button onClick={handleLoadMore} style={{backgroundColor:"pink",color:"white",borderRadius:"30px" , borderColor:"white"}} >Load More</button>
        </div>
      )}

      </ol>

      <div className="comment-respond">
        <h3 className="comment-reply-title">Leave a Reply</h3>

        <form className="comment-form" onSubmit={handleSubmit}>
          {/* Form fields for name, email, and comment */}
          <p className="comment-form-author">
            <label>Name <span className="required">*</span></label>
            <input
              type="text"
              placeholder="Your Name*"
              name="author"
              required
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            />
          </p>
          <p className="comment-form-email">
            <label>Email <span className="required">*</span></label>
            <input
              type="email"
              placeholder="Your Email*"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </p>
          <p className="comment-form-comment">
            <label>Comment</label>
            <textarea
              name="comment"
              cols="45"
              placeholder="Your Comment..."
              rows="5"
              maxLength="65525"
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            ></textarea>
          </p>
          {/* Checkbox for saving user information */}
          <p className="comment-form-cookies-consent">
            <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
            <label>Save my name, email, and website in this browser for the next time I comment.</label>
          </p>
          {/* Submit button */}
          <p className="form-submit">
            <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default CommentArea;
