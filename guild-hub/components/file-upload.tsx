"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="Upload" className="rounded-full object-cover" />
        <button
          onClick={() => {
            onChange("");
          }}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>File Upload Guild photo</p>

      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            onChange(res[0].url);
          } else {
            onChange(undefined);
            console.error("No files were uploaded.");
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
