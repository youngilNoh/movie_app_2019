import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <div className="detail--img">
            <img src={location.state.poster} alt={location.state.title} />
          </div>
          <div className="detail--info">
            <p className="detail--title">
              {location.state.title}
              <span className="detail--year">({location.state.year})</span>
            </p>

            <div className="detail--genres">
              {location.state.genres.map((genre, id) => (
                <p className="detail--genre" key={id}>
                  {genre}
                </p>
              ))}
            </div>
            <p className="detail--summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
