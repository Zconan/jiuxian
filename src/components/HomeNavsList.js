//引入react框架
import React from 'react';

class HomeNavsList extends React.Component {
	constructor() {
		super();
		this.state = {
			navs1: [
				require('../img/navslist1.jpg'),
				require('../img/navslist2.jpg'),
				require('../img/navslist3.jpg'),
				require('../img/navslist4.jpg'),
				require('../img/navslist5.jpg'),
				require('../img/navslist6.jpg'),
				require('../img/navslist7.jpg'),
				require('../img/navslist8.jpg'),
				require('../img/navslist9.jpg'),
				require('../img/navslist10.jpg')
			],
			navs2: require('../img/navslist11.jpg'),
			navs3: [
				require('../img/navslist12.jpg'),
				require('../img/navslist13.jpg')
			]
		}
	}
	
	render() {
		return(
			<div className="navslist">
				<ul className="list1">
					{
						this.state.navs1.map((item,index)=>{
							return (
								<li key={index}>
									<a href="#/home">
										<img src={item} alt="" />
									</a>
								</li>
							)
						})
					}
				</ul>
				<a className="list2" href="#/home">
					<img src={this.state.navs2} alt="" />
				</a>
				<ul className="list3">
					{
						this.state.navs3.map((item,index)=>{
							return (
								<li key={index}>
									<a href="#/home">
										<img src={item} alt="" />
									</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default HomeNavsList;