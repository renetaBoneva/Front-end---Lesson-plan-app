import { requester } from "./requester";

export const generateMeLessonPlan = async (instructions) => requester.post('/generateMeLessonPlan', instructions); 