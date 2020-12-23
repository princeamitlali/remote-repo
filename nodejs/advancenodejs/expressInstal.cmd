<first you need to install express,>
<express is needed to store in ach new directory>
<commmand for installing express generator with global acess is>

npm install -g express-generator

<to verify>

express

<or>

express -h

<now need to create a view this can be pug and ejs>

express --view=pug/ejs file_name

<now change the directory and install all required pckages>

cd  file_name
npm install

<to run the app >
<for mac>
DEBUG=myapp:* npm start

<on cmd windows>
set DEBUG=myapp:* & npm start

<on powershell windows>
$env:DEBUG='myapp:*'; npm start