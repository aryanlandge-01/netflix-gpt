import OpenAI from 'openai';
import { openai_key } from './Constant';

const openai = new OpenAI({
    apiKey: openai_key, dangerouslyAllowBrowser: true,
});


export default openai;