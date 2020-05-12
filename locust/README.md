## How to use locust

**_Create a config file:_** 

In this case I created a locustfile.py file that will call a route on my local test API. 

**_Run locust_**

* Then in the terminal run this command: 
   * `locust --host=http://host:port` 

This will run a server on the localhost on port 8089. It will asks for the number of virtual users and number of user per second (hatch). 
Then it will run tests on the endpoint configured.

**_Pros_**

- easy to configure on the server when it runs
- simple graphs  

**_Cons_**

- difficult to build the projet 
- libraries not up to date with latest pip3
- need to set up many tools to get a result
