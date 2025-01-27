import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { AngleDown, Flag } from "./icons";

function FormTab() {
  const [fileName, setFileName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event: any) => {
    const file = event?.target?.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="py-10 px-6 sm:px-0">
      <div className="mb-7">
        <h2 className="text-xl sm:text-2xl mb-4 font-bold ">
          Personal Information
        </h2>
      </div>

      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <Label htmlFor="">First Name*</Label>
            <Input {...register("first_name")} />
          </div>
          <div>
            <Label htmlFor="">Last Name*</Label>
            <Input {...register("last_name")} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <Label htmlFor="">Email*</Label>
            <Input {...register("email")} />
          </div>
          <div>
            <Label htmlFor="">Phone*</Label>
            <div className="relative">
              <div className="absolute top-0 left-0 w-[147px] h-[56px] rounded-full bg-[#D1D4DD] flex items-center gap-[11px] justify-center">
                <Flag />
                <span>+61</span>
                <AngleDown />
              </div>
              <Input className="pl-[164px]" {...register("phone")} />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl mb-4 font-bold ">
            Supporting Documents
          </h2>

          <div className="mb-5">
            <div className=" mx-auto ">
              <Label htmlFor="">Resume/CV*</Label>
              <div className="border-2 border-dashed border-[#33333354] rounded-lg flex items-center justify-center h-44 text-gray-500 cursor-pointer hover:bg-blue-50 relative">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  id="resume-upload"
                  onChange={handleFileChange}
                />
                {fileName.length > 0 ? (
                  <span>{fileName}</span>
                ) : (
                  <span className="text-center">
                    <strong className="font-semibold">Upload a file</strong> or
                    drag and drop here
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mb-5 ">
            <Label htmlFor="">Cover Letter</Label>
            <div className="mt-2">
              <Textarea rows={5}></Textarea>
            </div>
          </div>

          <div className="text-center mt-2">
            <Button
              onClick={() => null}
              variant={"default"}
              size={"lg"}
              className="rounded-full"
            >
              APPLY
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormTab;
