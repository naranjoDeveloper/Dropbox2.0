"use client";

import { cn } from "@/lib/utils";
import Dropzone from "react-dropzone";

function DropZone() {
  const maxSize = 20971520;

  return (
    <Dropzone
      minSize={0}
      maxSize={maxSize}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center border border-dashed rounded-lg text-center cursor-pointer",
                isDragActive ? "bg-[#035FFE] text-white animate-pulse" : ""
              )}
            >
              {!isDragActive && "Click Here Or Drop A File To Upload"}
              {isDragActive && !isDragReject && "Drop To Upload This File"}
              {isDragReject && "File Type Not Accepted , Sorry "}
              {isFileTooLarge && (
                <div className="text-danger-mt-2">File Is Too Large</div>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
}

export default DropZone;
