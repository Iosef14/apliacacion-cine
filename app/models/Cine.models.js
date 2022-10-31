module.exports = (sequelize, Sequelize)=>{

    const Cine = sequelize.define ("Cines", {


        ID_Cine:{
  
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },
    
        Nombre:{
            type: Sequelize.STRING
        },
        Direccion: {
            type: Sequelize.STRING
        },
        Telefono_Consultas: {
            type: Sequelize.INTEGER
        },
        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });
    return Cine;


};