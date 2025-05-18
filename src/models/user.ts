import {Schema, model} from 'mongoose';

interface User extends Document {
    username: string;
    email: string;
    thoughts: Schema.Types.ObjectId[];
    friends: Schema.Types.ObjectId[];
    }

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
    });

    userSchema.virtual("friendCount").get(function (this: User) {
        return this.friends.length;
    });

    const UserModel = model<User>("User", userSchema);

    export default UserModel; 