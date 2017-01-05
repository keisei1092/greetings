import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = { links: [
      { name: "niconico", url: "http://www.nicovideo.jp/mylist/10180194" },
      { name: "YouTube", url: "https://www.youtube.com/miraitoarumachi" },
      { name: "SoundCloud", url: "https://soundcloud.com/keisei_1092" },
      { name: "KarenT", url: "http://karent.jp/album/1730" },
      { name: "BOOTH", url: "https://miraitoarumachi.booth.pm" },
      { name: "Twitter", url: "https://twitter.com/keisei_1092" },
      { name: "GitHub", url: "https://github.com/keisei1092" },
      { name: "blog", url: "http://keisei1092.hatenablog.com" }
    ].map((link) =>
      <li key={link.name}><a href={link.url}>{link.name}</a></li>
    ) };
  }
  render() {
    return(
      <div>
        <h1>ミライトアルマチ構想</h1>
        <ul>
          {this.state.links}
        </ul>
      </div>
    );
  }
}
