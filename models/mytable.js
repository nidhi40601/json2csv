module.exports = (sequelize, DataTypes) => {
    const mytable = sequelize.define("mytable", {
        name: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        currency: DataTypes.STRING,
        country: DataTypes.STRING
    },
    { timestamps: false } );
    
    return mytable;
}