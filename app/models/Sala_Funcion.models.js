module.exports = (sequelize, Sequelize)=>{

    const Sala_Funcion = sequelize.define ("Sala_Funcions", {


        ID_Funcion:{
  
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },
    
        ID_Pelicula:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Peliculas', key: 'ID_Pelicula'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
        Codigo_Sala:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Salas', key: 'Codigo_Sala'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          Fecha_Funcion: {
            type: Sequelize.STRING
        },
        Hora: {
            type: Sequelize.STRING
        },
     
        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Sala_Funcion;


};