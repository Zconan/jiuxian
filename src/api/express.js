//引入模块
const request = require('request');
const express = require('express');
const app = express();
var mongo = require('./connect.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
	extended: false
}));


//服务器代理
app.get('/goodslist', function(req, res) {
	let page = req.query.page * 1;
	res.append("Access-Control-Allow-Origin", "*");
	request('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=' + page, function(error, response, body) {
		res.send(body);
	});
});

app.get('/barlist', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	request('https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1541469746317&pagenum=1&tabnum=1', function(error, response, body) {
		res.send(body);
	});
});

//单商品详情
app.get('/detile', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	let page = req.query.page * 1;
	let id = req.query.id * 1;
	request('https://m.jiuxian.com/m_v1/statics/getzx.htm?topicId=1165&pageNum=' + page, function(error, response, body) {
		let arrs = JSON.parse(body).promoList;
		arrs.forEach(item => {
			if(item.commonProductInfo.pid === id) {
				res.send(item);
			}
		});
	});
});

//验证注册手机是否存在
app.post('/checkphone', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	let phone = req.body.phone;
	let wherePhone = {
		phone
	};
	mongo.query(function(db) {
		db.collection('user').find(wherePhone).toArray(function(err, result) {
			if(err) {
				throw err;
			}
			if(result.length !== 0) {
				res.send('no');
			}
		});
	});
});

//保存注册信息
app.post('/saveinformation', function(req, res) {
	let phone = req.body.phone;
	let password = req.body.password;
	res.append("Access-Control-Allow-Origin", "*");
	var myobj = {
		phone,
		password
	};
	mongo.query(function(db) {
		db.collection('user').insertOne(myobj, function(err, result) {
			if(err) {
				throw err;
				res.send('no');
			} else {
				res.send('yes');
			}
		});
	});
});

app.listen(9999);