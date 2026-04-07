function DropDown(el) {
				this.dd = el;
				this.placeholder = this.dd.children('div.placeholder');
				this.opts = this.dd.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						return false;
					});

					obj.opts.on('click',function(){
						var opt = $(this);
						obj.val = opt.html();
						obj.index = opt.index();
						obj.placeholder.html(obj.val);
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

// Snow Flak js
$(document).ready(function(){
var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown').removeClass('active');
				});
	$(".mp_product_area .thumbnails img").click(function(){
	var lgimg= $(this).attr("rel");
	var imgpath = "assets/images/"+lgimg+".png";
	$(".main_img img").attr("src",imgpath);	
	});
	$('.sleep_cool').flurry({height: 600,frequency: 200,speed: 5000,small: 40,large: 60,color:"#7f8efe"});
  });