module.exports = (sequelize, Sequelize)=>{

    const Horarios_Funcion_Cine = sequelize.define ("Horarios_Funcion_Cine", {

        ID_Cartelera:{
  
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
            
            // To increment user_id automatically.
            autoIncrement:false,
      
            // For uniquely identify user.
            primaryKey:false,

            allowNull: true,
            references: { model: 'Carteleras', key: 'ID_Cartelera'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
    
     
        ID_Funcion:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Sala_Funcions', key: 'ID_Funcion'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },

          Fecha_Funcion: {
            type: Sequelize.STRING
        },
          Hora_Funcion: {
            type: Sequelize.STRING
        },
        Subtitulos_Espaniol_SI_NO: {
            type: Sequelize.STRING
        },
        

        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Horarios_Funcion_Cine;

};


