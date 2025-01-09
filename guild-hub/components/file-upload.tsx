"use client";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <div>
      <p>File Upload Component</p>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            onChange(res[0].fileUrl);
          } else {
            onChange(undefined);
            console.error("No files were uploaded.");
          }
        }}
        onUploadError={(error: Error) => {
          console.error("Upload error:", error);
        }}
      />
    </div>
  );
};
