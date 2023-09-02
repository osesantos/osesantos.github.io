import { getTools } from '../../api';

export const tools = async (args?: string[]): Promise<string> => {
  return await getTools();
};
