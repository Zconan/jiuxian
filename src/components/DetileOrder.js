//引入react框架
import React from 'react';
//引入Element-React
import 'element-theme-default';

class DetileOrder extends React.Component {
	render() {
		return (
			<div className="order">
				<div className="num">
					<span>数量</span>
					<span> - </span>
					<span> 1 </span>
					<span> + </span>
				</div>
				<div className="destination">
					<span>送至</span>
					<div>
						<p>广东省</p>
						<p>有货,预计3-6天可到达</p>
					</div>
					<i className="el-icon-arrow-right"></i>
				</div>
				<div className="hint">
					<span>提示</span>
					<div>
						<p>此商品不能使用优惠券</p>
						<p>每购买2瓶,即赠送原厂手提袋1个</p>
					</div>
				</div>
				<div className="bill">
					<span>正品保障</span>
					<span>满100包邮</span>
					<span>7天退换</span>
				</div>
			</div>
		)
	}
}

export default DetileOrder;