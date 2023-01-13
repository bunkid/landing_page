
var coll = document.getElementsByClassName("card");

function removeall()
{
    for( i = 0; i <coll.length; i++)
    {
        if(  coll[i].classList.contains("card--active") )
        {
            coll[i].classList.remove("card--active");
        }
    }
}
    
for( i = 0; i <coll.length; i++)
    { 
      
      coll[i].addEventListener("click",function()
    {

        
              if(  this.classList.contains("card--active") )
              {
                this.classList.remove("card--active");
    
            }
            else
            {
                removeall();
                this.classList.add("card--active");
            }
            
        
    })
    }

    // for(const btn of coll)
    // {
    //     btn.addEventListener("click",function()
    //     {
    //         if(btn.classList.contains("card--active"))
    //         {   
    //             btn.classList.remove("card--active");
    //         }else
    //         {             
    //             btn.classList.add("card--active");
    //         }
    //     })
    // }

  const array = [
    "./public/img/gallery1.jpg",
    "./public/img/gallery2.jpg",
    "./public/img/gallery3.jpg",
    "./public/img/gallery4.jpg",
    "./public/img/gallery5.jpg"
  ]
  const content = [
    "laptop",
    "Ladies",
    "clock",
    "aaa",
    "bbbb"
  ]

  var modal = document.getElementById('myModal');

  // Get the images and bind an onclick event on each to insert it inside the modal
  // use its "alt" text as a caption
  var images = document.getElementsByClassName("img-thumbnail");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  for(let i = 0; i < images.length; i++){
    images[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = array[i];
      captionText.innerHTML = content[i];
    }
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  } 


  const menu = document.querySelector(".model-menu");
  const menuButton = document.querySelector(".navbar__icons");
  
  menuButton.addEventListener('click',()=>
{
    menu.classList.toggle("openmenu");
    menuButton.classList.toggle("open");
    
})