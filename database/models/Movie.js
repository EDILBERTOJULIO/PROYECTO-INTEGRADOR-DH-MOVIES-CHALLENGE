module.exports = (sequelize, DataTypes) =>{

    let alias = "Movie"
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        length:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating:{
            type: DataTypes.DECIMAL(3,1),
            allowNull: false
        },
        awards:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        release_date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false,
        paranoid: true
    }
    
        const movie = sequelize.define(alias, cols, config);
    
        movie.associate = (models) =>{
            movie.belongsTo(models.Genre, {
                as: "generos",
                foreignKey: "genre_id",
                onDelete: "cascade",
            })
    
            movie.belongsToMany(models.Actores,{
                as: "actores",
                through: "actor_movie",
                foreignKey: "movie_id",
                otherKey: "actor_id",
                timestamps: false,
                onDelete: "cascade",
            });
        }
    
        
    
        return movie;
    }