## How to use K6

**_Install it:_**

``sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61``

``echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list``

``sudo apt-get update``

`` sudo apt-get install k6``

**_Create a config file:_** 

For documentation on how to create options of a  configuration file, follow this [link](https://k6.io/docs/using-k6/options)


In this case I created a script.js file that will call a route on my local test API. 

**_Run K6_**

* Then in the terminal run this command: 
    * if you want to get results just on the terminal:
        - ``k6 run script.js``
    * if you want to export result on influxdb:
        -  ``k6 run --out influxdb=http://host:port/database_name script.js``
    * if you want to export result as a json file: 
        - ``k6 run --summary-export=json_file.json``
    * it's also possible to combine json export and influxdb: 
        - ``k6 run --summary-export=export.json script.js --out influxdb=http://host:port/database_name script.js ``

**_Pros_**

- the simplicity of the installation
- easy execution 
- fast data exporting to influxdb if used

**_Cons_**

