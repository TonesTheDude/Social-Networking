import {Schema} from 'mongoose';
import {Types, Document} from 'mongoose';

interface Reaction extends Document {
    reactionID: Schema.Types.ObjectId;
    createdAt: Schema.Types.Date;
    username: string;
    reactionBody: string;
    }

const reactionSchema = new Schema<Reaction>({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date) => new Date(timestamp).toLocaleDateString(),
    },
},
{
    toJSON: {
        getters: true,
    },
    id: false,
    });


    export default reactionSchema; 