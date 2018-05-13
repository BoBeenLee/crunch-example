import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render() {
    let title = this.props.post.title
    if (this.props.isDraft) {
      title = `${title} (Draft)`
    }
    console.log(this.props.post);

    return (
      <Link className="no-underline ma1" to={`/post/${this.props.post.id}`}>
        <h2 className="f3 black-80 fw4 lh-solid">{title}<span>{this.props.post.userName}</span> </h2>
        <p className="black-80 fw3">{this.props.post.text}
          <br />
          <span>{this.props.post.tags.join(",")}</span>
        </p>
      </Link>
    )
  }
}
