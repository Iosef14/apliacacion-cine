module.exports = (sequelize, Sequelize)=>{

    const Comentarios_Pelicula = sequelize.define ("Comentarios_Pelicula", {


        ID_Opinion:{
  
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
       
          Nombre_Persona: {
            type: Sequelize.STRING
        },
        Edad: {
            type: Sequelize.STRING
        },
        Fecha_Registro: {
            type: Sequelize.STRING
        },
        Calificacion: {
            type: Sequelize.STRING
        },
        Comentario: {
            type: Sequelize.STRING
        },
        

        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Comentarios_Pelicula;
    
    
};