import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Slider from "react-slick";
import ReactPlayer from 'react-player'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Posting from './Posting'
import "./ImagePost.css"
import logo from "./inahexLogo.png"

class ImagePost extends Component {

  state = {
    images: []
  }

  componentDidMount(){
    this.setState({isLoading:true});
    fetch('http://admin.inahex.com/api/slider')
    .then(response => response.json())
    .then(json  =>
      {
      this.setState({
        images: json
      }
    )
  }
)
}

  render() {
    var settings = {
      dots: true,
      // autoplay: true,
      // autoplaySpeed: 1000
    };

    return (
      <>
        <Slider {...settings}>
        {
          this.state.images.map(images => {
                    return(
                     <div>
                      <Posting type={images.type} src={images.image}/>
                     </div>
                   )
                }
          )
        }
        </Slider>

        <div className="frameAtas">
          <img src={logo} alt="Logo" className="logo"/>
        </div>
        <div className="frameBawah">
        </div>
      </>
    );
  }
}
export default ImagePost;
