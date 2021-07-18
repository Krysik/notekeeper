import { Model, DataTypes } from "sequelize";
import { sequelize } from "../services/database";

interface IUser {
  id?: number;
  username: string;
  email: string;
  password: string;
}

interface UserInstance extends Model<IUser>, IUser {
  createdAt: Date;
  updatedAt: Date;
}

const User = sequelize.define<UserInstance, IUser>('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(30),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(40)
  },
}, {
  timestamps: true
})

export default User;
