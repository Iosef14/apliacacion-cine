module.exports = (sequelize, Sequelize)=>{

    const Reparto_Película = sequelize.define ("Reparto_Película", {


        Nombre_Persona:{
  
            type:Sequelize.STRING,
      
        },
    
        Nacionalidad: {
            type: Sequelize.STRING
        },
        ID_Pelicula:{
            type: Sequelize.INTEGER,
            allowNull: true,
            references: { model: 'Peliculas', key: 'ID_Pelicula'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
       
        Director_Actor: {
            type: Sequelize.STRING
        },
        Personaje_Interpreta: {
            type: Sequelize.STRING
        },
        CantidadPeliculasDirigieron_Actuaron: {
            type: Sequelize.INTEGER
        },

        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Reparto_Película;


};