//引入react框架
import React from 'react';
//引入Element-React
import { Carousel } from 'element-react';
import 'element-theme-default';

class HomeSlideShow extends React.Component {
	constructor() {
		super();
		this.state = {
			imgs: [
				require('../img/slideshow1.jpg'),
				require('../img/slideshow2.jpg'),
				require('../img/slideshow3.jpg'),
				require('../img/slideshow4.jpg'),
				require('../img/slideshow5.jpg'),
				require('../img/slideshow6.jpg'),
				require('../img/slideshow7.jpg')
			]
		}
	}
	render() {
		return(
			<div className="slideshow">
				<Carousel height="180px" arrow="never">
		          	{
			            this.state.imgs.map((item, index) => {
			              	return (
				                <Carousel.Item key={index}>
				                	<img style={{"height":180}} src={item} alt="" />
				                </Carousel.Item>
			             	)
		            	})
		          	}
		        </Carousel>
			</div>
		)
	}
}

export default HomeSlideShow;