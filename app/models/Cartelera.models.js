module.exports = (sequelize, Sequelize)=>{

    const Cartelera = sequelize.define ("Carteleras", {


        ID_Cartelera:{
  
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },
    
        ID_Cine:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Cines', key: 'ID_Cine'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },

        Nombre_Cine: {
            type: Sequelize.STRING
        },
        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });
    return Cartelera;


};