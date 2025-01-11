// import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// const handleAuth = () => {
//   const { userId } = auth(); // Destructure userId
//   if (!userId) throw Error("Unauthorized");
//   return { userId };
// };

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // .middleware(() => {
    //   return handleAuth();
    // })
    .onUploadComplete(({ metadata, file }) => {
      console.log("Server image uploaded:", { metadata, file });
    }),

  messageFile: f({ image: true, video: true, pdf: true })
    // .middleware(() => {
    //   return handleAuth();
    // })
    .onUploadComplete(({ metadata, file }) => {
      console.log("Message file uploaded:", { metadata, file });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
