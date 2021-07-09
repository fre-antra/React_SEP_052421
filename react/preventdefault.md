event.preventDefault()

affects child!!!!


I understand that event.preventDefault() can prevent browser default behavior, but why does it work if you put this on parent element's event handler?

Example:

document.getElementById("parent").addEventListener('click', (e)=>{
  alert('parent click');
  //e.stopPropagation();
  e.preventDefault();   
  
});

document.getElementById("button").addEventListener('click', (e)=>{
  alert('click');
  //e.stopPropagation();
  //e.preventDefault(); 
  //return true;
  
  });
.foo{
  background-color: red;
  text-align: center;
  padding: 16px;
  margin-bottom: 16px;
}
<div id ="parent">
  <a href="http://www.google.com" target="_blank">
    <div id="button" class="foo" tabindex='-1'> hello </div>
  </a>
</div>



!!!!
!!!!
!!!!
because preventDefault() prevent default "event" not handle!!!!!
which means it prevent all default handlers for "this click event"!!!!!!!!
