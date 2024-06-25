import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import { Link } from 'react-router-dom';

const PostExerpt = ({ post }) => {
    return (
        <article className='singlePost'>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 80)}...</p>
            <p id="time" className="postCredit">
                <Link to={`/post/${post.id}`} id='viewMore'>View Post </Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
};

export default PostExerpt;
