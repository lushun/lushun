window.onload = function(){
	var nav = document.getElementById('nav').getElementsByTagName('li');
	var cont = document.getElementById('cont').getElementsByTagName('li');
	var opre = document.getElementById('pre');
	var onext = document.getElementById('next');
	var now = 0;
	for(var i=0; i<nav.length; i++)
	  {
		  nav[i].index = i;
		  nav[i].onmouseover = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	 opre.onclick = function()
	 {
	 	move(false);
	 }
	 onext.onclick = function()
	 {
	 	move(true);
	 }
	 function tab()
	  {
	     for(var i=0; i<nav.length; i++)
	     {
		    nav[i].className = '';
		    cont[i].className = '';
	     }
	     nav[now].className = 'selected';
	     cont[now].className ='show';
	  }
	 function move(flag)
	 {
	     if(flag)
	     {
		     now++;
		     if(now >= cont.length)	
		     now=0;
	     }
	     else{
		     now--;
		     if(now < 0)
			 now = cont.length-1;
	         }
	     tab();
     }
     var timer = setInterval(function(){move(true)},2000);
     playbox.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	 playbox.onmouseout = function()
	  {
		  timer = setInterval(function(){move(true)},2000)
	  }
}