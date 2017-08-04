/* js文件*/

function fileUp(obj){

	var imgfile = obj.files[0];
	console.log(imgfile)

	var img = new Image();

	var file = new FileReader();

	file.onload = function(){

		//console.log(file.result)
		var htmlStr = "<div class='upWrap'>";
		htmlStr += "<div class='imgBox'>";
		htmlStr += '<span>X</span>'
		htmlStr += '<img src="'+file.result+'" alt="" />';;
		htmlStr += "</div>";
		htmlStr += "</div>";

		$('.pic').append(htmlStr);
		obj.value="";


	}
	file.readAsDataURL(imgfile);
	
	/*$('.imgBox span').on('click',function(){

	    $(this).parent().parent().remove(); 
	})*/
	$(document).on('click','.imgBox span',function(){  
	    //处理未来事件  
	    $(this).parent().parent().remove();  
	}) 
}
