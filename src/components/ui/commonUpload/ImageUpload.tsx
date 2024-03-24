/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRef, useState, ChangeEvent, DragEvent } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import uploadIcon from '../../../../public/images/uploadIcon.svg';
import fileIcon from '../../../../public/images/FileIcon.svg';
import binIcon from '../../../../public/images/binIcon.svg';

interface FileData {
  id: string;
  name: string;
  loading: number;
  size: number;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
}

interface ImageUploadProps {
  onUpload: () => void;
}

export default function ImageUpload({ onUpload }: ImageUploadProps) {
  const [files, setFiles] = useState<FileData[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [showProgress, setShowProgress] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const handleFileInputClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const uploadFile = async (
    selectedFiles: FileList | File[]
  ): Promise<void> => {
    await Promise.all(
      Array.from(selectedFiles).map(async (file) => {
        if (file) {
          const fileId = uuidv4();

          const fileName =
            file.name.length > 12
              ? `${file.name.substring(0, 13)}.. .${file.name.split('.')[1]}`
              : file.name;

          setFiles((prev) => [
            ...prev,
            { id: fileId, name: fileName, loading: 0, size: 0 }, // Assuming size should be a number, initialize with 0
          ]);
          setShowProgress(true);

          try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(
              'https://ik.imagekit.io/demo',
              formData,
              {
                onUploadProgress(progressEvent) {
                  const totalLoaded = progressEvent.loaded;
                  const totalSize = progressEvent.total;

                  setFiles((prev) => {
                    const newFiles = [...prev];
                    // Check if newFiles array is not empty before accessing the last element
                    if (newFiles.length > 0 && totalSize) {
                      newFiles[newFiles.length - 1].loading = Math.floor(
                        (totalLoaded / totalSize) * 100
                      );
                    }
                    return newFiles;
                  });

                  if (totalLoaded === totalSize) {
                    const fileSize =
                      totalSize < 1024
                        ? `${totalSize} KB`
                        : `${(totalLoaded / (1024 * 1024)).toFixed(2)} MB`;

                    setUploadedFiles((prev) => [
                      ...prev,
                      { id: fileId, name: fileName, size: fileSize },
                    ]);

                    setFiles([]);
                    setShowProgress(false);
                  }
                },
              }
            );

            // Handle response if needed
          } catch (error) {
            // Handle errors here
            console.error('Error uploading file:', error);
            setShowProgress(false);
          }
        }
      })
    );
  };

  const handleDeleteFile = (fileId: string, isUploadedFile: boolean): void => {
    if (isUploadedFile) {
      const updatedUploadedFiles = uploadedFiles.filter(
        (file) => file.id !== fileId
      );
      setUploadedFiles(updatedUploadedFiles);
    } else {
      const updatedFiles = files.filter((file) => file.id !== fileId);
      setFiles(updatedFiles);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add('dragover');
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.add('dragover');
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove('dragover');
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (dropAreaRef.current) {
      dropAreaRef.current.classList.remove('dragover');
    }

    const droppedFiles = e.dataTransfer.files;
    uploadFile(droppedFiles)
      .then(() => {
        // handle success if needed
      })
      .catch((error) => {
        // handle error
        console.error('Error uploading files:', error);
      });
  };

  const handleFileInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    await uploadFile(e.target.files as FileList);
  };

  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div
        ref={dropAreaRef}
        className="w-[70%] bg-white shadow-lg min-h-[300px] rounded-xl p-4 drop-area"
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <h2 className="text-black font-semibold text-lg">Upload file</h2>
        <div className="bg-gray-100 h-[1px] mt-2" />

        <form className="p-3 h-[180px] mt-5 flex items-center justify-center flex-col gap-1 border-dashed border-[2px] border-gray-300 rounded-xl">
          <input
            type="file"
            name="file"
            hidden
            ref={fileInputRef}
            onChange={handleFileInputChange}
            multiple
          />
          <div className="flex items-center justify-center flex-col gap-3">
            <img
              className="w-[40px] h-[40px]"
              src={uploadIcon}
              alt="upload file icon"
            />
          </div>
          <div className="font-normal text-[#4F4D55] text-[14px]">
            Drop your images here, or{' '}
            <button
              type="button"
              className="underline cursor-pointer text-[#007171]"
              onClick={handleFileInputClick}
            >
              Browse
            </button>
          </div>
          <p className="text-[#7F7D83] text-[14px] font-light">
            Supports PNG, JPEG & WEBP up to 40MB{' '}
          </p>
        </form>

        {showProgress && (
          <section className="mt-2">
            {files.map((file) => (
              <li key={file.id} className="list-none my-1">
                <div className=" flex items-center justify-between p-2 border rounded-md w-full">
                  <div className="flex items-center gap-2 flex-[3] w-full">
                    <img src={fileIcon} alt="file icon" className="w-[24px]" />
                    <div className="flex flex-col gap-0">
                      <p className="text-gray-500 font-medium text-[14px]">
                        {file?.name}
                      </p>
                      <p className="text-gray-400 font-medium text-[11px]">
                        {file?.size}
                      </p>
                    </div>
                  </div>

                  <div className="percentage flex-[2] w-full flex bg-gray-00 items-center justify-center gap-1">
                    <div className="loading-bar h-[4px] bg-gray-200 rounded-lg w-full overflow-hidden">
                      <div
                        style={{ width: `${file?.loading}%` }}
                        className="loading bg-[#97BCBC] h-full"
                      />
                    </div>
                    <p className="text-[#E4E5F1] font-medium text-[11px] min-w-[35px]">
                      {file?.loading}%
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </section>
        )}

        <section className="mt-2">
          {uploadedFiles.map((file) => (
            <li key={file.id} className="list-none my-2">
              <div className=" flex items-center justify-between p-2 border rounded-md w-full">
                <div className="flex items-center gap-2 flex-[3] w-full overflow-hidden">
                  <img src={fileIcon} alt="file icon" className="w-[24px]" />{' '}
                  <div className="flex flex-col gap-0">
                    <p className="text-gray-950 font-medium text-[14px]">
                      {file?.name}
                    </p>
                    <p className="text-gray-400 font-medium text-[11px]">
                      {file?.size}
                    </p>
                  </div>
                </div>

                <div className="percentage flex-1 w-full flex bg-gray-00 items-center justify-center gap-1">
                  <div className="loading-bar h-[4px] bg-white rounded-lg w-full overflow-hidden">
                    <div className="loading w-[10%] h-full" />
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      handleDeleteFile(file.id, true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleDeleteFile(file.id, true);
                      }
                    }}
                    className="text-[12px] min-w-[30px] cursor-pointer"
                  >
                    <img
                      src={binIcon}
                      alt="delete icon"
                      className="text-[32px]"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </section>
      </div>
    </div>
  );
}
