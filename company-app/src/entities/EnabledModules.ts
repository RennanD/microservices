import { Document, model, Schema } from 'mongoose';

interface IModules {
  name: string;
  slug: string;
}

export interface IEnabledModulesSchema extends Document {
  company_token: string;
  modules: IModules[];
}

const EnabledModules = new Schema(
  {
    company_token: {
      type: String,
      required: true,
    },
    modules: [
      {
        type: Object,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default model<IEnabledModulesSchema>('EnabledModules', EnabledModules);
