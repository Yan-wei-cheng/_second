window.onload = function(){
//登录页面
	//设置焦点与失去焦点
	//用户名
	var usernameText = document.getElementById("username");
	usernameText.onfocus = function(){
			this.setAttribute("placeholder","用户名");
			this.setAttribute("class","black");
	}
	usernameText.onblur = function(){
		if(this.value){
			this.setAttribute("placeholder","用户名");
			this.setAttribute("class","black");
		}else{
			this.setAttribute("placeholder","请输入用户名");
			this.setAttribute("class","red");
		}
	}
	
	//密码框
	var passwordText = document.getElementById("password");
	passwordText.onfocus = function(){
			this.setAttribute("placeholder","密码");
			this.setAttribute("class","black");
	}
	passwordText.onblur = function(){
		if(this.value){
			this.setAttribute("placeholder","密码");
			this.setAttribute("class","black");
		}else{
			this.setAttribute("placeholder","请输入密码");
			this.setAttribute("class","red");
		}	
	}
	//获取登录按钮
	var logIn = document.getElementById("logIn");
	var userId, username, password;
	logIn.onclick = function(){
		//获取当前输入的用户名和登录密码
		username = document.getElementById("username").value;
		password = document.getElementById("password").value;
		//发送登录请求
		axios.post('http://47.97.204.234:3000/user/login',"username="+username+"&password="+password)
					.then(function(response){
						// 获取用户信息
						loginInfor = response.data;
						if(loginInfor.result == "success"){
						/*成功则切换页面*/
						document.getElementsByClassName("hidden")[0].className = "main-page";
						document.getElementsByClassName("logIn-page")[0].className = "hidden";
						}else{//失败则弹出说明
							alert(loginInfor.message);
						}		
					})
					.catch(function(err){
						console.log(err);
					})
	 }	
	 // 退出登录
	 var logOut = document.getElementById("logOut");
	 logOut.onclick = function(){
	axios.post('http://47.97.204.234:3000/user/logout',"username="+username+"&password="+password)
				.then(function(response){
					console.log(response.data);
					document.getElementsByClassName("hidden")[0].className = "logIn-page";
					document.getElementsByClassName("main-page")[0].className = "hidden";
				})
				.catch(function(err){
					console.log(err);
				})	
	 }
	//  var getInfo = document.getElementById("getInfo");
	//  getInfo.onclick = function(){
	// 	 console.log(userId);
	// 	axios.get('http://47.97.204.234:3000/user/getInfo?userId='+userId)
	// 				.then(function(response){
	// 					console.log(response.data);
	// 				})
	// 				.catch(function(err){
	// 					console.log(err);
	// 				}) 
	//  }
	 
	 
	 // 页面关闭时，自动退出登录；
	 window.onunload = logOut.onclick;
}	



