import mongoose, { Schema } from "mongoose";

const CodeSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const Code = mongoose.models.Code || mongoose.model("Code", CodeSchema);
export default Code;
