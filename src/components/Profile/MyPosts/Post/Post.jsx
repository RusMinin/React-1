import s from './Post.module.css';

const Post = (props) => {

  return <div className={s.item}>
    <img src='https://mir-avatarok.3dn.ru/_si/0/03342719.jpg' alt='avatar' />
    {props.message}
    <div>
      {props.like}
    </div>
  </div>
}

export default Post;



// модуляция стилей Profile