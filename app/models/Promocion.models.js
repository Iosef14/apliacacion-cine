module.exports = (sequelize, Sequelize)=>{

    const Promocion = sequelize.define ("Promocion", {


        ID_Promocion:{
  
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
            
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },
    
     
        ID_Funcion:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Sala_Funcions', key: 'ID_Funcion'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          ID_Cine:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Cines', key: 'ID_Cine'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          Descripcion: {
            type: Sequelize.STRING
        },
        Descuento: {
            type: Sequelize.STRING
        },
        

        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Promocion;


};