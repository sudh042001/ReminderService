const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');
const { sendBasicEmail } = require('./service/email-service');
const TicketController=require('./controllers/ticket-controller');
const setupJobs=require('./utils/job.js');
const setUpAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
     app.use('/api/v1/tickets',TicketController.create);
    app.listen(PORT,()=>{
         console.log('server started at',PORT); 
        /* sendBasicEmail(
            'support@admin.com',
            'sshekharcpr@gmail.com',
            'This is a testing email',
            'Hey how are you,i hope you like the support'
         );*/
         
        setupJobs();
    });
}

setUpAndStartServer();