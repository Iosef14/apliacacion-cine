module.exports = (sequelize, Sequelize)=>{

    const Pelicula = sequelize.define ("Peliculas", {


        ID_Pelicula:{
  
            // Sequelize module has INTEGER Data_Type.
            type:Sequelize.INTEGER,
      
            // To increment user_id automatically.
            autoIncrement:true,
      
            // user_id can not be null.
            allowNull:false,
      
            // For uniquely identify user.
            primaryKey:true
        },
    
        
        Titulo_Distribucion: {
            type: Sequelize.STRING
        },
        Titulo_Original: {
            type: Sequelize.STRING
        },
        Genero: {
            type: Sequelize.STRING
        },
        Anio_Produccion: {
            type: Sequelize.STRING
        },
        Idioma_Original: {
            type: Sequelize.STRING
        },
        Pais_Origen: {
            type: Sequelize.STRING
        },
        URL_Trailer: {
            type: Sequelize.STRING
        },
        Duracion: {
            type: Sequelize.STRING
        },
        Clasificacion: {
            type: Sequelize.STRING
        },
        Estreno_Oficial: {
            type: Sequelize.STRING
        },
        Director: {
            type: Sequelize.STRING
        },
        Sinopsis: {
            type: Sequelize.STRING
        },


        Estatus: {
            type: Sequelize.BOOLEAN
        }

    });

    return Pelicula;

    
    

};