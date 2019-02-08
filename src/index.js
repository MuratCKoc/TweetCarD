import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'
//import App from './App';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

// Tweet
function Tweet ({ tweet }) {
    return (
        // className attribute or "prop".
        <div className="tweet">
        <Avatar hash= { tweet.gravatar }/>
        <div className="content">
        <NameWithHandle author= { tweet.author } />
        <Time time= { tweet.timestamp }/>
        <Message text= { tweet.message }/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count= { tweet.retweets }/>
          <LikeButton count= { tweet.likes } />
          <MoreOptionsButton/>
        </div>
        </div>
        </div>
    );
}
var testTweet = {
    message: "Choco is our fammember",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "Charlie Koc"
    },
    likes: 2,
    retweets: 4,
    timestamp: "2018-11-20 3:13AM"
};
// Avatar
function Avatar ({ hash }) {
    var url = 'https://www.gravatar.com/avatar/${hash}';
    return (
        <img src={url}
        className='avatar' 
        alt='avatar' />
    );
}
/* Count */
function Count ({ count }) {
    if (count > 0 ) {
        return (
            <span className="retweet-count"> {count} </span>
        );
    } else {
        return null;
    }
}

/* NameWithHandle */
function NameWithHandle ({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
        <span className="name">{ name }</span>
        <span className="handle">@{ handle }</span>
        </span>
    );
}
/* Time */
const Time = ({ time }) =>  (
        <span className="time"> {moment(time).fromNow()}</span>
    );


/* ReplyButton */
const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

/* RetweetButton */
const RetweetButton = ({ count }) => (
    <span className="retweet-button">
    <i className="fa fa-retweet"/>
    <Count count={count}/>
    </span>
);



/* LikeButton */
const LikeButton = ({ count }) => ( 
    <span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 && <span className="like-count"> 
    {count}
    </span>}
    </span>
);

/* MoreOptionsButton */
const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);
/* Message */
function Message ({ text }) {
    return (
        <div className="message">
        {text}
        </div>
    );
}

function Comment ({ author, message, likes}) {
    return (
        <div>
            <div className='author'>{author}</div>
            <div className='message'>{message}</div>
            <div className='likes'>{likes > 0 ? likes : 'NO'} likes </div>
        </div>
        );
    }
    Comment.propTypes = {
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        likes: PropTypes.number
    }
    
ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
