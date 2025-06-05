//Defining the User model

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'user_id',
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'username',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            field: 'email',
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password',
        },
              createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        tableName: 'usertable',
        timestamps: true, // Adds createdAt and updatedAt fields
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return User;
}