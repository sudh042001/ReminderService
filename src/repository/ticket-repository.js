const {NotificationTicket}=require('../models/index');
const sequelize=require('sequelize');
const Op=sequelize.Op;
class TicketRepository{
    async getAll(){
        try {
         
            const tickets=await NotificationTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
        }
    }
    async create(data){
        try {
               const response=await NotificationTicket.create(data);
               return response;
        } catch (error) {
            throw error;
        }
    }
    async get(filter){
        try {
             const ticket= await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
             });
             return ticket;
        } catch (error) {
            throw error;
        }
    }
    async update(ticketId,data){
        try {
            const ticket= await NotificationTicket.findByPk(ticketId);
              if(data.status)
            ticket.status=data.status;
            await ticket.save();
            return ticket;
       } catch (error) {
           throw error;
       }
    }
}

module.exports=TicketRepository;