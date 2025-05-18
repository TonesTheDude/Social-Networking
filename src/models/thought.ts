import {Schema, model} from 'mongoose';
import reactionSchema from './reaction.js';

interface Thoughts extends Document {
    thoughtText: string;
    createdAt: Schema.Types.Date;
    username: string;
    reactions: [typeof reactionSchema];
    }

const thoughtsSchema = new Schema<Thoughts>({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
    });

thoughtsSchema.virtual("reactionCount").get(function (this: Thoughts) {
        return this.reactions.length;
    });

    const ThoughtsModel = model<Thoughts>("Thought", thoughtsSchema);

    export default ThoughtsModel; 