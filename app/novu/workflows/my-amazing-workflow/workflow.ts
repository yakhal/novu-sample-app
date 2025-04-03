import { workflow } from "@novu/framework";
import { amazingWorkFlowSchema } from "./schemas";

export const myAmazingWorkflow = workflow(
  "my-amazing-workflow",
  async ({ step, payload }) => {
    await step.inApp("In-App Step", async () => {
      return {
        subject: payload.inAppSubject,
        body: payload.inAppBody,
        avatar: payload.inAppAvatar,
      };
    });
  },
  {
    payloadSchema: amazingWorkFlowSchema,
  },
);
