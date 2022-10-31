module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root2022",
    DB: "Cine Plaza de Armas",
    dialect: "postgresql",

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        
    }

};

