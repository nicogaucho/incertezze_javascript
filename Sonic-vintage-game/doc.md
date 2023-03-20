## documentation 

* once clouds are uploaded on the browser, move them!
    * css included 
    * html included 
* we need some js to do it 
    * positioning randomly x screen position 
        * create some random function between min and max
        * positioning top and left absolute randomly using a function 
    * create clouds dinamically 
        * create element image (* example 10 clouds)
        * set a currentCloud = 1; and max png value = 4; to set correct number to reference .png files
    * use data structure to store cluodImage, in array or object
        * push in an array cloudImage to store them
        * push object with element prop, velocity prop
    * refactor the code 
        * create an object with all cloud properties
        * img itself
        * velocity (random)
        * x, y (start random positioning)
        * push this object into data structure array to store the clouds 
        * use object as referance in your code
    * still refactoring 
        * create our world state of game 
        * create an object gameState    
        * push previous object cloud in it 

    * update the location x based on velocity in update function 
    * create function drawClouds to draw the first time the clouds on canva then call a setTimout to update to keep clouds moving passing the function updateLocation 
* add sonic to the page
    * put him into the global object 