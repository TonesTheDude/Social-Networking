import { Schema } from 'mongoose';
import { Types } from 'mongoose';
const reactionSchema = new Schema({
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
        get: (timestamp) => new Date(timestamp).toLocaleDateString(),
    },
}, {
    toJSON: {
        getters: true,
    },
    id: false,
});
export default reactionSchema;
