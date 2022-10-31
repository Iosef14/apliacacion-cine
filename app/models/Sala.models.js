module.exports = (sequelize, Sequelize)=>{

    const Sala = sequelize.define ("Salas", {


        Codigo_Sala:{
  
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
        Nombre: {
            type: Sequelize.STRING
        },
        Tipo: {
            type: Sequelize.STRING
        },
        Cantidad_Asientos: {
            type: Sequelize.INTEGER
        },
        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Sala;


};