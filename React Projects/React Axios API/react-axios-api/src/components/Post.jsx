import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, datetime, body } = post;

  return (
    <article className="post">
      <Link to={`/post/${id}`}>
        <h2>{title}</h2>
        <p className="postDate">{datetime}</p>
      </Link>
      <p className="postBody">{body.length <= 25 ? body : `${body.slice(0, 25)}...`}</p>
    </article>
  );
};

export default Post;
