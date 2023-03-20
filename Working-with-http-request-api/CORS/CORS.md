# Cors 

* define origin 
    * 2 url have the same origin if they share same protocol comunication, port and host 
* define resource 
    * any resource you can have access on web ( html, json... )
* define cors 
    * cross origin resourse sharing 
        * what happen when one origin wants to make request to other orign? 
            * web browser apply restrictions when to resources what to share or connect themselfs... CORS 
            * look cors-client-example
                * http://127.0.0.1:5501/
                * https://reddit.com/r/javascript.json 
                * when from our origin we want to make request to other we have to make sure that we are allowded to do that, this info is in the header of request 
                    * web browser request 
                    * check options request 
                    * server option response 
                    * server response with actual response 

* how to fix when you have control on server 
    * in controllo del server devi settare headers per le origin che hanno il permesso di fetchare le risorse  
* how to fix when you do not have control on server 
    * devi usare un server nel medio, un Proxy server a cui deleghiamo la richiesta 
    * 