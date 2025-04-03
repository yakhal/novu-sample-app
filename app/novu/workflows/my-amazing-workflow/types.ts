import { z } from "zod";
import { amazingWorkFlowSchema } from "./schemas";

export type AmazingWorkflowSchema = z.infer<typeof amazingWorkFlowSchema>;
